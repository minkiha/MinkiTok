import Link from "next/link"

export const MenuPanel = ({props} : any) => {
    const setshowLogin = props
    return (
        <div className="flex flex-col w-1/3 px-4 py-4 gap-2">
            <Link href='/'>
                <button className="text-xl rounded hover:bg-slate-100 py-2 text-start px-2">🏠 For You</button>
            </Link>
            <Link href='/following'>
                <button className="text-xl rounded hover:bg-slate-100 py-2 text-start px-2">👋 Following</button>
            </Link>
            <button className="text-xl rounded hover:bg-slate-100 py-2 text-start px-2">📺 LIVE</button>
            <div className="flex flex-col border-y h-32">
                <p className='text-sm text-slate-400 py-4'>Log in to follow creators, like videos, and view comments.</p>
                <button className='border rounded border-red-500 py-2 text-red-500 hover:bg-red-100' onClick={() => {setshowLogin(true)}}>Log in</button>
            </div>
        </div>
    )
}