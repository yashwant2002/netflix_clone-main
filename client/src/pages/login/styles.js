/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";


export const Container = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    position: "relative",
    overflow:"hidden",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
}))

export const FormContainer = styled(Box)(({theme})=>({
    width:"90%",
    maxWidth:"500px",
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
    background:"rgba(0,0,0,0.5)",
    padding:"2rem 2.5rem",
    "& > h4":{
        color:"white",
        fontWeight:"bold",
        marginBottom:"1rem"
    },
    "& > div":{
        borderRadius:"5px",
        overflow:"hidden",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        background:"rgba(225,225,225,0.5)",
        "&  svg":{
            cursor:"pointer",
            marginRight:"1rem"
        },
        "&  input":{
            padding:"1rem 1.2rem",
            color:"white",
            fontSize:"1.2rem",
            background:"none",
            height:"100%",
            flex:2,
            border:"none",
            outline:"none",
            "::placeholder":{
                color:"Black"
            }
        }
    },
    "& > p":{
        color:"#878787",
        "& > a":{
            color:"white",
            marginLeft:"0.5rem"
        }
    }
}))