import { useState } from "react"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button";
import "../Button/Button.css"

export const Login=()=>{
    const [username,setUsername]=useState("");
    const {password,setPassword}=useState("")

    const handleUsername= (e)=>{
        setUsername(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    return(<div>
        <h3>Please Login</h3>
        <div className="mt-2">
        <label>Username</label>
        <Input type="text"  value={username} onChange={(e)=>handleUsername(e)}/>
        </div>
        <div className="mt-2">
        <label>Password</label>
        <Input type="passowrd"  value={password} onChange={(e)=>handlePassword(e)}/>
        </div>
        <Button label="Login"/>
    </div>)
}