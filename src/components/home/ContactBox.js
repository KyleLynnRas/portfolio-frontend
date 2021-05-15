//components
import IconLink from "../about/IconLink"
//icons
import {GrLinkedin, GrGithub} from "react-icons/gr"
import {MdEmail} from "react-icons/md"

const ContactBox = (props) => {
    return (
        <div className="contact-container">
            <h4 className="connect">Let's connect:</h4>
            <address className="contact-box">
                <IconLink link="https://www.linkedin.com/in/kylelynn-ras/" icon={<GrLinkedin className="home-icon" />} />
                <IconLink link="https://github.com/KyleLynnRas" icon={<GrGithub className="home-icon"/>} />
                <IconLink link="mailto:kylelynn.ras@gmail.com" icon={<MdEmail className="home-icon"/>} />
            </address>
        </div>
    )
}

export default ContactBox
