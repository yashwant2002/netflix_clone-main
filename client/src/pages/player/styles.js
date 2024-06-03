/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, styled } from '@mui/material'

export const Container = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    "&  *": {
        objectFit: "contain",
        height: "100% !important",
        width: "100% !important"
    }
}))