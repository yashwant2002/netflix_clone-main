/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material"
import { Container } from "./styles"
import { Card } from '../index'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Row = ({ title, movies, isLargeRow }) => {
    return (
        <>
            <Container>
                {/* title */}
                <Typography variant="h5" >{title}</Typography>
                {/* title */}

                {/* cards  */}
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={isLargeRow && true}
                    autoPlaySpeed={2000}
                    customTransition="all .5s ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        movies.map((movie) => (
                            <Card isLargeRow={isLargeRow} key={movie.id} movie={movie}/>
                        ))
                    }
                </Carousel>
                {/* cards  */}
            </Container>

        </>
    )
}

export default Row

