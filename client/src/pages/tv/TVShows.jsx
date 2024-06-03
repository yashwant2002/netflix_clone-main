import { useEffect } from 'react';
import { Card, Navbar } from '../../components/index'
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTVShows } from '../../store/store';
import { Box } from '@mui/material';


// tv shows page 
const TVShows = () => {

    const dispatch = useDispatch()
    const tv = useSelector((state) => state.netflix.tvShows)
    useEffect(() => {
        dispatch(fetchTVShows())
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <h2>TV Shows</h2>
                <Box>
                    {
                        tv.map((movie) => (
                            <>
                                <Card isNotRow={true} key={movie.id} movie={movie} />
                            </>
                        ))
                    }
                </Box>
            </Container>
        </>
    )
}

export default TVShows
