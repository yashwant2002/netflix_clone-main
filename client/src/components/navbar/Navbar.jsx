/* eslint-disable react/prop-types */
import { AppBar, } from '@mui/material'
import logo from '.././../assets/logo.png'
import { Header, Logo, MenuContainer, ToggleMenu, } from './styles'
import { Menu } from '@mui/icons-material';
import Navlinks from './Navlinks';
import { useEffect, useState } from 'react';
import NavDrawer from './NavDrawer';
import { Link } from 'react-router-dom';


const Navbar = () => {

    // for the drawer 
    const [open, setOpen] = useState(false);

    // for the navbar if the window is scrolled and the offset scrollY is greater than 50px the background color of the navbar will be black
    const [isScrolled, setIsScrolled] = useState(false);

    // scroll function for the navbar background color change
    const scrollFunc = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", scrollFunc)
        return () => {
            window.removeEventListener("scroll", scrollFunc)
        }

    }, [])

    return (
        <>
            <AppBar sx={{ background: isScrolled ? "black" : "none", boxShadow: "none", transition: isScrolled ? "all 0.3s ease-in" : "none" }} >
                <Header>
                    {/* netflix logo  */}
                    <Logo component={Link} to="/home">
                        <img src={logo} alt="netflix" />
                    </Logo>

                    {/* navbar links  */}
                    <MenuContainer>
                        <Navlinks />
                    </MenuContainer>

                    {/* drawer fro the mobile screen  */}
                    <ToggleMenu onClick={() => setOpen(!open)} >
                        <Menu fontSize='large' />
                        <NavDrawer open={open} setOpen={setOpen} />
                    </ToggleMenu>
                </Header>
            </AppBar>
        </>
    )
}

export default Navbar
