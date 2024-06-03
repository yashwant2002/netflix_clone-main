/* eslint-disable no-unused-vars */
import { Box, Button, Typography } from '@mui/material'
import { BackgroundImage } from '../../components/index'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Container, FormContainer } from "./styles"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Header } from '../../components/index'
import { loginUser } from '../../services/api';
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../context/context';




const Login = () => {

    const { setAccount } = useGlobalContext()
    const navigate = useNavigate()
    const [cookie, setCookie] = useCookies(["access_token"])
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        if (cookie.access_token) {
            navigate("/home")
        } else {
            navigate("/")
        }
    }, [])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        const response = await loginUser(formValues)
        if (response) {
            if (response.data.success) {
                toast.success(response.data.success)
                setCookie("access_token", response.data.token);
                localStorage.setItem("userID", response.data.userID)
                localStorage.setItem("initial", response.data.initial)
                navigate("/home")
            } else if (response.data.warning) {
                toast.warn(response.data.warning);
            } else {
                toast.error(response.data.error)
                navigate("/signup")
            }
        } else {
            toast.error("Something went wrong");
        }
    }

    return (
        <Container>
            <Header to="signup" text="signup" />
            {/* background image start */}
            <BackgroundImage />
            {/* background image end */}

            <FormContainer>
                <Typography variant='h4' >Login</Typography>
                <Box>
                    <input
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                    />
                </Box>
                <Box>
                    <input
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        type={`${showPassword ? "text" : "password"}`} />
                    <Box onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </Box>
                </Box>
                <Button
                    color='error'
                    variant='contained'
                    size='large'
                    onClick={handleLogin}
                >Login</Button>
                <Typography>New to Netflix? <Link to='/signup' > Sign up</Link> </Typography>
            </FormContainer>

        </Container>
    )
}

export default Login
