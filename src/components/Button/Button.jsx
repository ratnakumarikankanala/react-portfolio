import "./Button.css"
export const Button = (props) => {
    let { label, onClick } = props
    return (<button onClick={onClick} className="btn">
        {label}
    </button>)
}