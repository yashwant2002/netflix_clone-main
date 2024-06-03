import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Youtube from 'react-youtube'
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../../utils/constants";
import demo from '../../assets/StrangerThings.mp4'
import { Container } from "./styles";


// a single player page which gets the movie id of the movie if it contains the video then it will render the video into the react youtube
const Player = () => {

    const { id } = useParams();
    const [key, setKey] = useState(null)


    useEffect(() => {
        async function fetchVideo() {
            const { data: { videos: { results } } } = await axios.get(`${TMDB_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
            setKey(results[Math.floor(Math.random() * results.length - 1)]?.key)
        }

        fetchVideo()
    }, [])



    return (
        <>
            <Container>
                {
                    // if the key is not null or it is not undefined then only the react youtube will work else the local video will play
                    key !== null && key !== undefined ? (
                        <Youtube videoId={key} />
                    ) : (
                        <video src={demo} autoPlay muted controls />
                    )
                }
            </Container>
        </>
    )
}

export default Player
