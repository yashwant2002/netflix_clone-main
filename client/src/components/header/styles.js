/* eslint-disable no-unused-vars */

// styles for the header.jsx 
import { Toolbar, styled } from "@mui/material";

export const StyledHeader = styled(Toolbar)(({theme})=>({
    backgroundColor:"none",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    "& > img":{
        width:"150px",
    }
}))