import { useState } from "react"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button";
import "../Button/Button.css"

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = () => {
        console.log(username, username.length)
        if (username || username.length === 0) {
            setUsernameError("please enter username")
        } if (password || password.length === 0) {
            setPasswordError("please enter password")
        }
        if (username && username.length > 0 && password && password.length > 0) {
            setUsernameError("")
            setPasswordError("")

            alert('form submitted sucessfully')
        }
    }
    return (<div>
        <h3>Please Login</h3>
        <div className="mt-2">
            <label>Username</label>
            <Input type="text" value={username} onChange={(e) => handleUsername(e)} />
            {usernameError && usernameError.length > 0 && <p className="text-danger" lass>{usernameError}</p>}
        </div>
        <div className="mt-2">
            <label>Password</label>
            <Input type="passowrd" value={password} onChange={(e) => handlePassword(e)} />
            {passwordError && passwordError.length > 0 && <p className="text-danger" lass>{passwordError}</p>}
        </div>
        <Button label="Login" onClick={handleSubmit} />
    </div>)
}