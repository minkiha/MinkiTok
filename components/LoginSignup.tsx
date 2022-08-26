import React, { useState } from "react"
import { supabase } from '../utils/supabaseclient'

export const LoginSignup = ({props, props1, props2}: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, setSignup] = useState(false)
    const setshowLogin = props
    const setisLoggedin = props1
    const setUser = props2

    const handleLoginSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        const {user, session, error} = await supabase.auth.signIn({
            email: email,
            password: password,
        })
        if (user !== null) {
            setisLoggedin(true)
            setUser(user.id)
            console.log(user)
            console.log(session)
        }
        if (error !== null) {
            alert(error.message)
        }

        setshowLogin(false)
    }

    const handleSignupSubmit = async (event : React.FormEvent) => {
        event.preventDefault();
        const { user, session, error} = await supabase.auth.signUp({
            email: email,
            password : password,
        })
        console.log(user)
        console.log(session)
        console.log(error)
        setshowLogin(false)
    }


    if (!signup) {
        return (
            <div className="flex flex-col">
                <div className="flex flex-row-reverse">
                <button onClick={() => {setshowLogin(false)}} className='text-4xl border rounded-full w-10'>x</button>
                </div>
            <form className="flex flex-col bg-white rounded px-16 py-16 gap-2" onSubmit={handleLoginSubmit}>
                
                <div className="flex text-4xl justify-center items-top">Log in</div>
                Email:    
                <input className="rounded bg-slate-100" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                Password:
                <input className="rounded bg-slate-100" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="bg-red-500 rounded text-white py-2 my-4" type="submit" >Log in</button>
            </form>
            <div className="flex flex-row gap-2">
                Dont have an account? 
                <button className="text-red-500" onClick={() => {setSignup(true)}}>Sign up</button>
                {signup && <h1>signup === true</h1>} 
            </div>
        </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <div className="flex flex-row-reverse">
                    <button onClick={() => {setshowLogin(false)}} className='text-4xl border rounded-full w-10'>x</button>
                </div>
            <form className="flex flex-col bg-white rounded px-16 py-16 gap-2" onSubmit={handleSignupSubmit}>
                <div className="flex text-4xl justify-center items-top">Sign Up</div>
                Email:    
                <input className="rounded bg-slate-100" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                Password:
                <input className="rounded bg-slate-100" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="bg-red-500 rounded text-white py-2 my-4" value="submit" >Sign up</button>
            </form>
            <div className="flex flex-row gap-2">
                Already have an account? 
                <button className="text-red-500" onClick={() => {setSignup(false)}}>Log in</button>
            </div>
        </div>
        )
    }
}

//