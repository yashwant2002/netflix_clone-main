import background from '../../assets/Login.jpg'
import { Container } from './styles'


// background image for the login signup 
const BackgroundImage = () => {
    return (
        <Container>
            <img src={background} alt="bg image" />
        </Container>
    )
}

export default BackgroundImage
