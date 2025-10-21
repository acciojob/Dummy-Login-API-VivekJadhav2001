import React, { useState } from 'react'
import user from "./Data"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    function handleSubmit(e) {
        e.preventDefault()

        setUserError("");
        setPasswordError("");

        setTimeout(() => {
            const foundUser = user.find((u) => u.email === email);

            if (!foundUser) {
                console.log("User not found");
                setUserError("User not found");
                return;
            }

            if (foundUser.password !== password) {
                console.log("Password Incorrect");
                setPasswordError("Password Incorrect");
                return;
            }

            console.log(foundUser); // Successful login
        }, 3000);

    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="input-email">Email: </label>
                <input
                    type="email"
                    id="input-email"
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                /><br /><br />
                <p id="user-error" className='text-red-600'>{userError}</p>
                <label htmlFor="input-password">Password: </label>
                <input
                    type="password"
                    id="input-password"
                    placeholder='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                /><br /><br />
                <p id="password-error" className='text-red-600'>{passwordError}</p>
                <button id="submit-form-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login