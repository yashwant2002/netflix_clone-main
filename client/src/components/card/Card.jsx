/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react"
import { CardContainer, Hovered } from "./styles"
import { Box, Tooltip, Typography } from "@mui/material"
import { Add, ThumbUp, ThumbDown, KeyboardArrowDown, Delete, PlayArrow } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { addToLikedMovies } from "../../services/api";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store/store";



const Card = ({ movie, isLargeRow, isLiked = false, isNotRow }) => {

    // to navigate to different route 
    const navigate = useNavigate()

    // extracting the email from the localStorage 
    const email = localStorage.getItem("initial")

    // using useDispatch to dispatch toolkit function 
    const dispatch = useDispatch()

    // handle delete function to remove the movies from myList 
    const handleDelete = () => {
        dispatch(deleteMovie({ email, movieId: movie.id }))
        if (dispatch) {
            toast.success("Movie Removed")
        } else {
            toast.error("Movie not deleted")
        }
    }

    // function to add the movies to the mylist 
    const addToList = async () => {
        try {
            const response = await addToLikedMovies({ email, data: movie })
            if (response) {
                if (response.data.success) {
                    // if the movie is added then it will toast success 
                    toast.success(response.data.success);
                } if (response.data.warning) {
                    // if the movie is already liked 
                    toast.info(response.data.warning)
                } else {
                    // if there is some error this will pop up 
                    toast.error(response.data.error)
                }
            } else {
                toast.error("Movie not added");
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }



    const [isHovered, setIsHoverd] = useState(false)
    return (
        <>
            <CardContainer
                // when isHovered is true the card will scale to 1.05 
                sx={{ transform: isHovered && "scale(1.05)", width: isNotRow && "18rem" }}
                onMouseEnter={() => setIsHoverd(true)}//onMouseEnter the isHovered is true
                onMouseLeave={() => setIsHoverd(false)} //onMouseEnter the isHovered is false
            >
                {/* movie image  */}
                <img src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                {
                    // is largeRow is true then the card will be large than the rest of the cards of the other row 
                    !isLargeRow && isHovered && (
                        <Hovered>
                            <h5>{movie.name ? movie.name : movie.title}</h5>
                            <Typography>{movie?.overview?.slice(0, 40)}...</Typography>
                            <Box>
                                <Tooltip title="Play" placement="top" >
                                    <PlayArrow fontSize="medium" onClick={() => navigate(`/player/${movie.id}`)} />
                                </Tooltip>

                                <Tooltip title="Like" placement="top">
                                    <ThumbUp fontSize="medium" />
                                </Tooltip>

                                <Tooltip title="Dislike" placement="top">
                                    <ThumbDown fontSize="medium" />
                                </Tooltip>

                                {
                                    isLiked ? (
                                        <Tooltip title="Remove" placement="top">
                                            <Delete onClick={handleDelete} />
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title="Add" placement="top">
                                            <Add onClick={addToList} fontSize="medium" />
                                        </Tooltip>
                                    )
                                }
                                <Tooltip title="More" placement="top">
                                    <KeyboardArrowDown fontSize="medium" />
                                </Tooltip>
                            </Box>
                        </Hovered>
                    )
                }

            </CardContainer>
        </>
    )
}

export default Card
