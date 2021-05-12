//Bulma components 
import "bulma/css/bulma.min.css"
import { Card } from "react-bulma-components"

const SummaryCard = (props) => {
    return (
        <>
          <Card className={props.class}>
            <Card.Content >
                <h3>{props.title}</h3>
                <p>{props.par}</p>
            </Card.Content>
          </Card>
        </>
    )
}

export default SummaryCard