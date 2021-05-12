
const Plus = ({display, handleChange}) => {
    return (
        <div className="plus-btn">
            <button onClick={handleChange} id={display.id} className="plus-btn"></button>
        </div>
    )
}

export default Plus