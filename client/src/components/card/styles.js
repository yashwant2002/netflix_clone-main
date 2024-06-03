/* eslint-disable no-unused-vars */

// styles for Card.jsx 
import { Box, styled } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    transition: "all 0.25s linear",
    padding: "0.5rem",
    "& > img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    },
    position: "relative",
    [theme.breakpoints.down("md")]:{
        width:"85%"
    }
}))

export const Hovered = styled(Box)(({ theme }) => ({
    width: "100%",
    transition:"all 0.2s ease-in",
    height: "80%",
    position: "absolute",
    display:"flex",
    padding:"0.5rem",
    flexDirection:"column",
    justifyContent:"center",
    zIndex: 5,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(2px)",
    left: 0,
    "& > h5": {
        color: "white",
        padding: "0.3rem",
        fontSize:"0.8rem"
    },
    "& > div": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding: "0.8rem",
        "&  svg": {
            color: "white",
            borderRadius:"50%",
            ":hover":{
                color:"red",
            }
        }
    },
    "& > p":{
        color:"white",
        fontSize:"0.8rem",
        padding:"0.3rem"
    }
}))