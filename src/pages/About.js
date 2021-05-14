import { useState, useEffect } from "react"
//components 
import LinkBox from "../components/about/LinkBox"
import AboutBox from "../components/about/AboutBox"

const About = (props) => {
    //state for data
    const [about, setAbout] = useState(null)

    //api call 
    const getAboutData = async () => {
        //add "about" to end url 
        const response = await fetch(props.URL + "about")
        //response to js obj
        const data = await response.json()
        //set state
        setAbout(data)
    }

    //inital data call 
    useEffect(() => getAboutData(), [])

    const loaded = () => (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <img src={about.headshot} alt={about.name} className="headshot"/>
            <LinkBox about={about} />
            <AboutBox about={about} />
        </div>
    )

    //if data returned JSX in loaded, otherwise h1
    return about ? loaded() : <h1>Loading...</h1>
}

export default About 