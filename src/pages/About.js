import { useState, useEffect } from "react"

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
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )

    //if data returned JSX in loaded, otherwise h1
    return about ? loaded() : <h1>Loading...</h1>
}

export default About 