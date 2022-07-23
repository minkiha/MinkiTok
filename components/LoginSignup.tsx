import React, { useState } from "react"

export const LoginSignup = ({props}: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, setSignup] = useState(false)
    const setshowLogin = props

    const handleLoginSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        console.log({
            email : email,
            password : password,
        })
        setshowLogin(false)

    }

    const handleSignupSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        console.log({
            email : email,
            password : password,
        })
    }


    return (
        <div className="flex flex-col">
            <form className="flex flex-col bg-white rounded px-16 py-16 gap-2" onSubmit={handleLoginSubmit}>
                <button onClick={() => {setshowLogin(false)}} className='text-4xl border rounded-full'>x</button>
                <div className="flex text-4xl justify-center items-top">Log in</div>
                Email:    
                <input className="rounded bg-slate-100" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                Password:
                <input className="rounded bg-slate-100" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="bg-red-500 rounded text-white py-2 my-4" value="submit" >Log in</button>
            </form>
            <div className="flex flex-row gap-2">
                Don't have an account? 
                <button className='text-red-500' onClick={() => {setSignup(true)}}>Sign up</button>
                {signup && <h1>signup === true</h1>} 
            </div>
        </div>
    )
}

//