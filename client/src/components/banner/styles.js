/* eslint-disable no-unused-vars */

// styles for Banner.jsx 
import { Box, styled } from "@mui/material";


export const Container = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    position: "relative",
    padding: "1rem 1.5rem",
    [theme.breakpoints.down("md")]: {
        padding: "0.5rem"
    }
}))

export const Image = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    position: "absolute",
    filter: "brightness(25%)",
    top: 0,
    left: 0,
    zIndex: -10,
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    "& > img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center"
    },
}))

export const Info = styled(Box)(({ theme }) => ({
    color: "white",
    position: "absolute",
    bottom: "7.5rem",
    left: "3rem",
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    gap: "1rem",
    "& > div": {
        display: 'flex',
        alignItems: "center",
        gap: "1rem",
        "& > button": {
            padding: "0.8rem 3rem",
            fontSize: "1rem",
            "&:nth-of-type(1)": {
                background: "rgba(225,225,225,0.5)"
            }
        }
    },
    "& > h2": {
        fontWeight: "bolder",
        fontSize: "4.5rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "4rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem"
        },
    },
    [theme.breakpoints.down("md")]: {
        left: "1rem"
    }
}))

export const Gradient = styled(Box)(({ theme }) => ({
    height: "7.5rem",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    background:"black",
    maskImage:"linear-gradient(360deg, rgba(0,0,0,1), transparent)",
    WebkitMaskImage:"linear-gradient(360deg, rgba(0,0,0,1), transparent)",
}))