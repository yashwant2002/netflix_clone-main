/* eslint-disable no-unused-vars */

// login signup background
import { Box, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    filter: "brightness(30%)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -10,
    "& > img": {
        width: "100%",
        height: "100%",
        objectFit: 'cover',
    }
}))
