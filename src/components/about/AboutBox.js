import {useState} from "react"
//Bulma components 
import "bulma/css/bulma.min.css"
import { Box } from "react-bulma-components"
//components 
import Control from "./Control"

const AboutBox = ({about}) => {
    
    //state for box content 
    const [display, setDisplay] = useState({
        content: about.bio, 
        title: "Bio"
    })

    return (
       <Box className="about-box-container">
           <h1>{display.title}</h1>
           <p>{display.content}</p>
           <Control setDisplay={setDisplay} about={about} display={display}/>
       </Box>
    )
}

export default AboutBox