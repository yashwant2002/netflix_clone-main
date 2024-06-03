import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    likedMovies: {
        type:Array
    }
})

const User = mongoose.model("user", userSchema);

export default User;