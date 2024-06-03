import { useEffect } from "react"
import { Card, Navbar } from "../../components"
import { Container } from "./styles"
import { useDispatch, useSelector } from 'react-redux'
import { getUsersLikedMovies } from "../../store/store"


// mylist page 
const MyList = () => {
    const movies = useSelector((state) => state.netflix.myList)
    const dispatch = useDispatch()

    // we need to pass the email to the getUsersLikedMovies so we are using the localStorage where we have stored the email
    const email = localStorage.getItem("initial");

    useEffect(() => {
        if (email) {
            dispatch(getUsersLikedMovies(email))
        }
    }, [email, movies])


    return (
        <>
            <Navbar />
            <Container>
                {
                    movies?.map((movie, index) => (
                        <Card isNotRow={true} key={movie.key} index={index} movie={movie} isLiked={true} />
                    ))
                }
            </Container>
        </>
    )
}

export default MyList
