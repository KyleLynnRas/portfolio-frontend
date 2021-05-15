import { Link } from "react-router-dom"

const Header = (props) => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    }

    return(
        <header style={{backgroundColor: "#000"}}>
            <nav style={navStyle}>
                <Link to="/" className="nav-link">
                    <div>HOME</div>
                </Link>
                <Link to="/about" className="nav-link">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects" className="nav-link">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
        
        )
}

export default Header