import { useState, useEffect } from "react"

const Projects = (props) => {
    //state projects
    const [projects, setProjects] = useState(null)
    
    //api call
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects")
        //data to js obj
        const data = await response.json()
        setProjects(data)
    }

    //initial api call 
    useEffect(() => getProjectsData(), [])

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{projects.name}</h1>
                <img src={project.image} alt={project.name}/>
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }

    //if data returned JSX in loaded, otherwise h1
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects 