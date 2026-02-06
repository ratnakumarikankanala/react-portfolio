import { useNavigate } from "react-router-dom"
import { Button } from "./Button/Button"

export const Home = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        navigate("/login")
    }
    
    return (<div>
        <h2>welcome to my profile</h2>
        <p>Hello, <span className="text-success fs-6">I'm a Ratnakumari Kankanala,</span>a React.js Developer with 2 years of frontend experience </p>
      <Button  label="Logout" onClick={handleLogout} />
    </div>)
}