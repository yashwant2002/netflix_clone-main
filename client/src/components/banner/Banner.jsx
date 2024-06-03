/* eslint-disable react/prop-types */
import { Container, Gradient, Image, Info } from "./styles"
import { Box, Button, Typography } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorIcon from '@mui/icons-material/Error';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ movies }) => {

    // a state to store the random value 
    const [random, setRandom] = useState(null);

    // we just want to get the random number once the component is mounted into the browser so we are using here useEffect with an expty array
    useEffect(() => {
        const randomNum = Math.floor(Math.random() * movies?.length - 1)
        setRandom(randomNum)
    }, [movies])

    // to navigate to different route 
    const navigate = useNavigate()

    return (
        <Container>
            {/*random  banner image  */}
            <Image >
                <img src={`https://image.tmdb.org/t/p/original/${movies[random]?.backdrop_path ? movies[random]?.backdrop_path : movies[random]?.poster_path}`} alt="" />
            </Image>
            {/*random  banner image  */}

            {/* banner info container  */}
            <Info>
                <Typography variant="h2" >{movies[random]?.title || movies[random]?.name || movies[random]?.original_title}</Typography>
                <Box>
                    <Button
                        size="large"
                        variant="contained"
                        onClick={() => navigate(`/player/${movies[random].id}`)}
                    ><PlayArrowIcon
                        /> Play</Button>
                    <Button size="large" ><ErrorIcon />&nbsp;Info</Button>
                </Box>
                <h3>{movies[random]?.overview.slice(0, 150)}...</h3>
            </Info>
            {/* banner info container  */}

            {/* little linear gradient effect in bottom  */}
            <Gradient></Gradient>
            {/* little linear gradient effect in bottom  */}
        </Container>
    )
}

export default Banner
