import Link from "next/link"
import { supabase } from '../utils/supabaseclient'
import Image from "next/image"


export const Navbar = ({props, props1, props2, props3, props4}: any) => {
    const setshowLogin = props
    const isLoggedin = props1
    const user = props2
    const setisLoggedin = props3
    const setUser = props4

    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        setisLoggedin(false)
        setUser('')
    }

    return (
        <div className="flex flex-row h-16 items-center shadow ">
            <div className="flex w-1/3 px-4 text-2xl">
                <a href='http://localhost:3000'>🪀 MinkiTok</a>
            </div>
            <div className="flex w-1/3 justify-center">
                {isLoggedin && <h1>User ID: {user}</h1>}
            </div>
            <div className="flex w-1/3 justify-end px-4 gap-2">
                {!isLoggedin && <button className="rounded border px-3 py-1 hover:bg-slate-100" onClick={() => {setshowLogin(true)}}>+ Upload</button>}
                {isLoggedin && <button className="rounded bg-red-500 px-6 py-1 text-white hover:bg-red-600" onClick={signOut}>Log out</button>}
                {isLoggedin && <Link href="/upload"><a className="flex items-center rounded border px-3 py-1 hover:bg-slate-100">+ Upload</a></Link>}
                {!isLoggedin && <button className="rounded bg-red-500 px-6 py-1 text-white hover:bg-red-600" onClick={() => {setshowLogin(true)}}>Log in</button>}
                {isLoggedin && <button className="flex items-center" onClick={() => alert("Clicked PFP")}><Image className="rounded-full" src={`https://kzkagpjvzvxypraqrraz.supabase.co/storage/v1/object/public/pfp/${user}.png`} layout="fixed" width={40} height={40}/></button>}
            </div>
        </div>
    )
}