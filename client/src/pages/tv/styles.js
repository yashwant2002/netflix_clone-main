import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    marginTop: "7rem",
    "& > h2":{
        color:"white",
        margin:"1rem 0 1rem 1rem"
    },
    "& > div": {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center"
        }
    }
}))