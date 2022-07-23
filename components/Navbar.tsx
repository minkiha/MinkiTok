
export const Navbar = ({props}: any) => {
    const setshowLogin = props
    return (
        <div className="flex flex-row h-16 items-center shadow ">
            <div className="flex w-1/3 px-4 text-2xl">
                <a href='http://localhost:3000'>🪀 MinkiTok</a>
            </div>
            <div className="flex w-1/3 justify-center">

            </div>
            <div className="flex w-1/3 justify-end px-4 gap-2">
                <button className="rounded border px-3 py-1 hover:bg-slate-100">+ Upload</button>
                <button className="rounded bg-red-500 px-6 py-1 text-white hover:bg-red-600" onClick={() => {setshowLogin(true)}}>Log in</button>
            </div>
        </div>
    )
}