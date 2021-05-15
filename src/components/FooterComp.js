//Bulma components 
import "bulma/css/bulma.min.css"
import { Footer } from "react-bulma-components"

const FooterComp = (props) => {
    return(
        <Footer className="footer-container">
             <img src="https://i.imgur.com/d8rUKWq.png" alt="technology icons" className="footer-img" />
             <p>2021</p>
        </Footer>
    ) 
}

export default FooterComp