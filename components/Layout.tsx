import { Navbar } from "./Navbar"
import { MenuPanel } from "./MenuPanel"
import {useState} from 'react'
import { LoginSignup } from "./LoginSignup"


export const Layout = ({children} : any) => {
    const [showLogin, setshowLogin] = useState(false)

    return (
        <div className="flex flex-col h-screen">
            <Navbar props={setshowLogin}/>
            {showLogin && <div className='flex fixed h-screen justify-center items-center w-screen backdrop-brightness-50'><LoginSignup props={setshowLogin}/></div>}
            <div className="flex flex-row h-full">
                <MenuPanel props={setshowLogin}/>
                {children}
            </div>
        </div>
    )
}