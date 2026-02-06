import "./Input.css"
export const Input =(props)=>{
    const {type,value,onChange}=props

    return(<input type={type} value={value} onChange={onChange} className="input"/>)
}