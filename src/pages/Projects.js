import { useState, useEffect } from "react"
//Bulma 
import "bulma/css/bulma.min.css"
//components
import ProjCard from "../components/projects/ProjCard"
import Console from "../components/projects/Console"
import FooterComp from "../components/FooterComp"

const Projects = (props) => {
    //state projects api
    const [projects, setProjects] = useState(null)
    //state for project dispay
    const [display, setDisplay] = useState(
        {
            "id": 1,
            "name": "TroupeLoop",
            "live": "https://unit2projectkr.herokuapp.com/",
            "git": "https://github.com/KyleLynnRas/unit2project",
            "image": "https://i.imgur.com/fOqrwyk.mp4", 
            "summary": "This app is a message board for performance troupes to help keep everyone in the loop on performances, practices and everything else. Users are able to create an account and log into the shared team’s message board. There they can create posts and comments. Authorization is used to ensure users can only view pages if logged in and only edit/delete comments that they created. Users also have the ability to favorite posts and comments, and view them on a personalized favorites page. All photos in the app are by Rob Klug.",
            "tech": "HTML5, CSS3, JavaScript, jQuery, Express, NodeJS, EJS, MongoDB, Mongoose, Bcrypt, Session, Bootstrap, Font awesome, Dav.js, Google fonts, Merced Logger"
          }
    )

    //api call
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects")
        //data to js obj
        const data = await response.json()
        setProjects(data)
    }

    //initial api call for starter video/info 
    useEffect(() => getProjectsData(), [])

    //button click
    const handleChange = (e) => {
        const arrLength = projects.length -1
        const nextProj = display.id + 1
        //if last in arr, reset to beginning  
        e.target.id == arrLength ? setDisplay(projects[0]) : setDisplay(projects[nextProj]) 
    }
    
    const loaded = () => {
    //    console.log(display.image)
        return (
            <>
                <div className="proj-container">
                    <h1>Projects</h1>
                    <Console display={display} handleChange={handleChange} />
                    <section className="proj-card-info">
                        <ProjCard class="summ" title="Summary" par={display.summary}/>
                        <ProjCard class="tech" title="Tech" par={display.tech}/>
                    </section>
                </div>
                <FooterComp />
            </>
        )
    }

    //if data returned loaded, otherwise h1
    return projects ? loaded() : <h1>Loading...</h1>
     
    
}

export default Projects 