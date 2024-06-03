/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";


export const Container = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    position:"relative",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    alignItems: "center",
    padding: "1rem",
    gap:"1.5rem",
}))


export const Headings = styled(Box)(({ theme }) => ({
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "& > h1": {
        fontSize: "4rem",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem"
        },
    },
    "& > h4": {
        fontSize: "3rem",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem"
        }
    },
    "& > h6": {
        fontSize: "2rem",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.5rem"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "1.1rem"
        },
    }
}))

export const FormContainer = styled(Box)(({ theme }) => ({
    width: "80%",
    display: "grid",
    gap:"0.1rem",
    "& > div":{
        background:"rgba(225,225,225,0.3)",
        borderRadius:"5px",
        "&  input":{
            padding:"1.5rem 1rem",
            fontSize:"1.2rem",
            width:"100%",
            background:"none",
            border:"none",
            color:"white",
            outline:"none",
            "::placeholder":{
                color:"white"
            }
        },
        "& > button":{
            height:"100%"
        }
    }
}))
