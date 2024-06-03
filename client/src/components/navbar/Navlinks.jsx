/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { LinksContainer, Container } from './styles'
import { Avatar, Button, Dialog, DialogActions, DialogTitle, IconButton, Modal } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
import { useState } from 'react';
import { useGlobalContext } from '../../context/context'




const links = [
    { name: "Home", link: "/home" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
];
const Navlinks = () => {

    const { account } = useGlobalContext()
    const [cookies, setCookies, removeCookies] = useCookies(["access_token"])
    const navigate = useNavigate()


    const logout = () => {
        removeCookies("access_token");
        localStorage.clear("userID");
        localStorage.clear("initial")
        navigate("/");
        toast.success("Logged out successfully");
    }


    const initial = (word) => {
        return word.charAt(0)
    }




    return (
        <>
            <LinksContainer>
                {
                    links.map((link) => (
                        <li key={link.name} >
                            <Link to={link.link} >{link.name}</Link>
                        </li>
                    ))
                }
            </LinksContainer>

            <Container>
                <Avatar sx={{ background: "red" }} >{initial(account)}</Avatar>
                <IconButton onClick={logout}>
                    <PowerSettingsNew color='error' fontSize='medium' />
                </IconButton>
            </Container>
        </>
    )
}

export default Navlinks
