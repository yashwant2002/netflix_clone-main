import { Box, Button } from '@mui/material'
import { BackgroundImage } from '../../components/index'

import { Container, FormContainer, Headings } from "./styles"
import { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Header } from '../../components/index'
import { signupUser } from '../../services/api';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate()

    // to get the password input when clicking on the get started 
    const [isGetStarted, setIsGetStarted] = useState(false);

    // to show the password and hide the password on clicking the icon 
    const [showPassword, setShowPassword] = useState(false)

    // initial values 
    const [formValues, setFormValue] = useState({
        email: "",
        password: ""
    })

    // this function get the previous data of the form and it puts the targeted value to the respective targeted name
    const handleChange = (e) => {
        setFormValue({ ...formValues, [e.target.name]: e.target.value })
    }


    // handleSignup to add the data to the database along with some error handlings
    const handleSignup = async (e) => {
        e.preventDefault()
        const response = await signupUser(formValues)
        if (response) {
            if (response.data.success) {
                toast.success(response.data.success);
                navigate("/")
            } else if (response.data.warning) {
                toast.warn(response.data.warning)
                navigate("/")
            } else {
                toast.error(response.data.error)
            }
        } else {
            toast.error("something went wrong")
        }
    }

    return (
        <Container>
            <Header to="" text="Login" />
            {/* background image start */}
            <BackgroundImage />
            {/* background image end */}

            {/* headings for the signup page */}
            <Headings>
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h6>Ready to watch? Enter your email to create or restart membership</h6>
            </Headings>
            {/* headings for the signup page */}

            {/* credentials  */}
            <FormContainer sx={{ gridTemplateColumns: isGetStarted ? "1fr 1fr" : "2fr 1fr" }} >
                <Box>
                    <input type="email"
                        name='email'
                        onChange={handleChange}
                        placeholder='Email' />
                </Box>
                <Box>
                    {
                        isGetStarted ? (
                            <Box sx={{ display: "flex", alignItems: "center", p: "0 0.5rem" }} >
                                <input
                                    name='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                    type={`${showPassword ? "text" : "password"}`} />

                                <Box sx={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </Box>
                            </Box>
                        ) : (
                            <Button variant='contained' fullWidth color='error' onClick={() => setIsGetStarted(true)} >Get Started</Button>
                        )
                    }
                </Box>
            </FormContainer>
            {/* credentials  */}

            {/* button to submit the values  */}
            <Button
                variant='contained'
                size='large'
                color='error'
                onClick={handleSignup}
            >Sign up</Button>
            {/* button to submit the values  */}
        </Container>
    )
}

export default Signup
