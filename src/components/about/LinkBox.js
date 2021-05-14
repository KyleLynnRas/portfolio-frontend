//components
import IconLink from "./IconLink"
//icons
import {GrLinkedin, GrGithub} from "react-icons/gr"
import {MdEmail} from "react-icons/md"

const LinkBox = ({about}) => {
    return (
        <address className="link-box">
         <IconLink link="https://www.linkedin.com/in/kylelynn-ras/" icon={<GrLinkedin className="icon-link" />} />
         <IconLink link="https://github.com/KyleLynnRas" icon={<GrGithub className="icon-link"/>} />
         <IconLink link={"mailto:" + about.email} icon={<MdEmail className="icon-link"/>} />
        </address>
    )
}

export default LinkBox