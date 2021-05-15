import ContactBox from "../components/home/ContactBox"
import InfoContainer from "../components/home/TitleBox"
//Bulma components 
import "bulma/css/bulma.min.css"
import { Container } from "react-bulma-components"

const Home = (props) => {

    return(
       <Container className="home-container">
           <InfoContainer />
           <img src="https://i.imgur.com/LiSfGVJ.png" alt="technology icons" className="icon-banner" />
           <ContactBox />
       </Container>
        )

}

export default Home 