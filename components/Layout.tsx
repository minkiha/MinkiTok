import { Navbar } from "./Navbar"
import { MenuPanel } from "./MenuPanel"
import {useState, useEffect} from 'react'
import { LoginSignup } from "./LoginSignup"
import {supabase} from '../utils/supabaseclient'

export const Layout = ({children} : any) => {
    const [showLogin, setshowLogin] = useState(false)
    const [isLoggedin, setisLoggedin] = useState(false)
    const [user, setUser] = useState('')
    const [session, setSession] = useState<any>(null)
    
    useEffect(() => {
        setSession(supabase.auth.session())
        
        if (session !== null) {
            setisLoggedin(true)
            setUser(session.user.id)
        }

        supabase.auth.onAuthStateChange((event,session) => {
            if (event == 'SIGNED_OUT') setisLoggedin(false), session
        })
        supabase.auth.onAuthStateChange((event,session) => {
            if (event == 'SIGNED_IN') setisLoggedin(true), session
        })
    }, [session])



    return (
        <div className="flex flex-col h-screen">
            <Navbar props={setshowLogin} props1={isLoggedin} props2={user} props3={setisLoggedin} props4={setUser}/>
            {showLogin && <div className='flex fixed h-screen justify-center items-center w-screen backdrop-brightness-50 z-10'>
                <LoginSignup props={setshowLogin} props1={setisLoggedin} props2={setUser}/>
            </div>}
            <div className="flex flex-row h-full">
                <MenuPanel props={setshowLogin}/>
                {children}
            </div>
        </div>
    )
}