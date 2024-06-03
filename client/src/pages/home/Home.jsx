/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { verifyUser } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Container } from "./styles"
import { Banner, Navbar, Row } from '../../components/index'
import { useGlobalContext } from "../../context/context"
import { useDispatch, useSelector } from "react-redux"
import { fetchAction, fetchComedy, fetchDocumentaries, fetchHorror, fetchOriginals, fetchRomance, fetchTopRated, fetchTrendings } from "../../store/store"
import { useCookies } from "react-cookie"


const Home = () => {


    const [cookies, setCookies] = useCookies(["access_token"])

    useEffect(() => {
        if (!cookies.access_token) {
            navigate("/")
        }
    }, [])

    const { setAccount } = useGlobalContext();


    const navigate = useNavigate()
    const dispatch = useDispatch();
    const original = useSelector((state) => state.netflix.netflixOriginal);
    const trending = useSelector((state) => state.netflix.netflixTrending);
    const topRated = useSelector((state) => state.netflix.netflixTopRated);
    const action = useSelector((state) => state.netflix.netflixAction);
    const comedy = useSelector((state) => state.netflix.netflixComedy);
    const horror = useSelector((state) => state.netflix.netflixHorror);
    const romance = useSelector((state) => state.netflix.netflixRomance);
    const documentaries = useSelector((state) => state.netflix.netflixDocumentaries)


    useEffect(() => {
        dispatch(fetchOriginals())
        dispatch(fetchTrendings())
        dispatch(fetchTopRated())
        dispatch(fetchAction())
        dispatch(fetchComedy());
        dispatch(fetchHorror());
        dispatch(fetchRomance());
        dispatch(fetchDocumentaries());
    }, [])





    // if the user is verified then it will redirect to home or else to login page 
    useEffect(() => {
        const verify = async () => {
            const response = await verifyUser()
            if (!response.data.message === "User verified") {
                toast.error("User not verified")
                navigate("/")
            } else {
                const character = localStorage.getItem("initial")
                setAccount(character)
            }
        }
        verify()
    }, [])


    return (

        <>
            <Container>
                <Navbar />
                <Banner movies={action} />
                <Row title="NETFLIX ORIGINALS" movies={original} isLargeRow />
                <Row title="Trending Now" movies={trending} />
                <Row title="Top Rated" movies={topRated} />
                <Row title="Action Movies" movies={action} />
                <Row title="Comedy Movies" movies={comedy} />
                <Row title="Horror Movies" movies={horror} />
                <Row title="Romance Movies" movies={romance} />
                <Row title="Documentaries" movies={documentaries} />
            </Container>
        </>

    )
}

export default Home
