//icons
import {VscGithubInverted} from "react-icons/vsc"
import {AiFillPlayCircle} from "react-icons/ai"

const ButtonBox = ({display}) => {
    return (
        <div className="icon-buttons">
            <a href={display.git} className="gHub">
                <VscGithubInverted />
            </a>
            <a href={display.live} className="play">
                <AiFillPlayCircle />
            </a>
        </div>
    )
}

export default ButtonBox