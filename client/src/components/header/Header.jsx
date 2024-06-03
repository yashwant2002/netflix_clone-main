/* eslint-disable react/prop-types */
import { AppBar, Button } from '@mui/material'
import logo from '../../assets/logo.png'
import { StyledHeader } from './styles'
import { useNavigate } from 'react-router-dom'


// header for the login signup page 
const Header = ({to, text}) => {

    const navigate = useNavigate()

    return (
        <AppBar sx={{ background: "none", boxShadow: "none" }} >
            <StyledHeader>
                <img src={logo} alt="netflix logo" />
                <Button
                    color='error'
                    variant='contained'
                    size='medium'
                    onClick={()=> navigate(`/${to}`)}
                >{text}</Button>
            </StyledHeader>
        </AppBar>
    )
}

export default Header
