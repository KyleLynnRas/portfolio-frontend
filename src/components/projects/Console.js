//Bulma components 
import "bulma/css/bulma.min.css"
import { Card } from "react-bulma-components"
//components
import Plus from "./Plus"
import ButtonBox from "./ButtonBox"

const Console = ({display, handleChange}) => {
    return (
        <>
           <Card className="proj-card">
                <Card.Content className="proj-card-content">
                    <video key={display.id} className="proj-video" controls >
                        <source src={display.image} type="video/mp4" className="video"/>
                    </video>
                    <h1 className="proj-title">{display.name}</h1>
                    <div className="button-container">
                        <Plus handleChange={handleChange} display={display} />
                        <ButtonBox display={display}/>
                    </div>
                </Card.Content>
            </Card>
        </>
    )
}

export default Console