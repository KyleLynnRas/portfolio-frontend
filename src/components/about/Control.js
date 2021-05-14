
const Control= ({about, setDisplay, display}) => {

    //button click event/change content box content 
    const handleChange = () => {
        if (display.content === about.skills) {
            setDisplay((prevState) => ({
                content: about.bio,
                title: "Bio"
            }))
        } else {
            setDisplay((prevState) => ({
                content: about.skills, 
                title: "Skills"
            }))
        }
    }

    return (
       <div className="control-btn-box">
           <button className="control-btn-left" onClick={handleChange}></button>
           <button className="control-btn-right" onClick={handleChange}></button>
       </div>
    )
}

export default Control