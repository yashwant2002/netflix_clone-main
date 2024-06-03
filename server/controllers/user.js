import User from '../models/userSchema.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
// secret key for jwt 
const SECRET_KEY = process.env.SECRET_KEY

// function to hash the password 
const securedPass = async (pass) => {
    return await bcrypt.hash(pass, 12);
}

// function to compare the password 
const comparePass = async (pass, databasePass) => {
    return await bcrypt.compare(pass, databasePass)
}

// function to signup the user 
export const signupUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ warning: "User already exist, try Logging in" })
        } else {
            if (!email || email.length <= 0) {
                return res.json({ error: "Email required" })
            } else if (!password || password.length < 6) {
                return res.json({ error: "Password must be greater than 5 character" })
            } else {
                const hashedPassword = await securedPass(password);
                const newUser = new User({
                    name,
                    email,
                    password: hashedPassword
                })
                await newUser.save();
                return res.json({ success: "Registered Successfully", name: newUser.name })
            }
        }
    } catch (error) {
        res.status(500).json(error, "error while signing up the user")
    }
}


// function to login the user 
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ error: "User not found" })
        } else {
            if (!email) {
                return res.json({ error: "Email is required" })
            }

            if (!password || password.length < 6) {
                return res.json({ error: "Password must be greater than 5 character" })
            }

            const isValid = await comparePass(password, user.password);
            if (!isValid) {
                return res.json({ error: "Incorrect password" })
            } else {
                const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY, { expiresIn: "1d" });
                return res.json({ success: "Logged in successfully", userID: user._id, token: token, initial: user.email })
            }
        }
    } catch (error) {
        res.status(500).json(error, 'error while logging in the user');
    }
}


// function to verify the user 
export const verifyUser = async (req, res) => {
    try {
        res.json({ message: "User verified" })
    } catch (error) {
        res.status(500).json(error, "error while verifying the user")
    }
}


// function to add the movies to mylist 
export const addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id)
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(user._id, {
                    likedMovies: [...user.likedMovies, data],
                },
                    { new: true }
                )
            }
            else {
                return res.json({ warning: "Movie already Added" })
            }
        }
        else {
            await User.create({ email, likedMovies: [data] })
        }
        return res.json({ success: "Movie added" })
    } catch (error) {
        res.status(500).json(error, "error while adding movie")
    }
}

// function to remove movie 
export const deleteMovie = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieIndex = likedMovies.findIndex((movie) => movie.id === movieId);
            console.log(movieIndex)
            if (movieIndex >= 0) {
                likedMovies.splice(movieIndex, 1);
                user.likedMovies = likedMovies;
                await user.save();
                return res.json({ success: "Movie removed" })
            }
        } else {
            return res.json({ error: "user not found" })
        }
    } catch (error) {
        res.status(500).json(error, "error while deleting the user")
    }
}


// function to get the liked movies 
export const getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if (user) {
            res.json({ success: "Liked movies", movies: user.likedMovies })
        } else {
            return res.json({ error: "User with given email not found" })
        }
    } catch (error) {
        res.status(500).json(error, 'error while getting the liked movies')
    }
}