/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";


export const Container = styled(Box)(({theme})=>({
    width:"100%",
    margin:"1rem 0.5rem",
    "& > h5":{
        color:"white",
        fontWeight:"bolder",
        letterSpacing:"2px",
        margin:"1rem 0 1rem 2rem"
    },
    "& > div > ul":{
        margin:"0 1.6rem"
    }
}))
