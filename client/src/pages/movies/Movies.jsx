import { useEffect } from 'react';
import { Card, Navbar } from '../../components/index'
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../../store/store';
import { Box } from '@mui/material';


// movies page 
const Movies = () => {

    const dispatch = useDispatch()
    const actions = useSelector((state) => state.netflix.netflixAction)

    useEffect(() => {
        dispatch(fetchAction())
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <h2>Movies</h2>
                <Box>
                    {
                        actions.map((movie) => (
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

export default Movies
