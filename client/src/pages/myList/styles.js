/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";


export const Container = styled(Box)(({ theme }) => ({
    display:"flex",
    flexWrap:"wrap",
    gap:"1rem",
    padding:"1rem",
    marginTop:"6rem",
    "& > h1":{
        color:"white"
    },
}))