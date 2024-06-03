/* eslint-disable no-unused-vars */
import { Box, Drawer, Toolbar, styled } from "@mui/material";


export const Header = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "1rem 2rem",
    [theme.breakpoints.down("md")]: {
        justifyContent: "space-between"
    }
}))

export const Logo = styled(Box)(({ theme }) => ({
    "& > img": {
        width: "150px"
    }
}))

export const LinksContainer = styled("ul")(({ theme }) => ({
    display: "flex",
    marginLeft: "1rem",
    alignItems: "center",
    gap: "1.5rem",
    "& > li": {
        listStyle: "none",
        "& > a": {
            color: "white",
            fontWeight: "bold",
            ":hover": {
                color: "red"
            },
            [theme.breakpoints.down("md")]: {
                color: "red",
                marginRight:"3rem"
            }
        }
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "start",
        marginTop: "2rem"
    }
}))

export const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    "& > svg": {
        cursor: 'pointer',
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "start",
        marginTop: "1rem",
        marginLeft: "1rem"
    }
}))

export const ToggleMenu = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
        cursor: "pointer"
    }
}))

export const MenuContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flex: 2,
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}))


export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& > .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
        background: "#000 !important",
        width: "200px !important",
    },
}))