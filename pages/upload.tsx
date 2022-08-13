import type { NextPage } from 'next'
import { supabase } from '../utils/supabaseclient'
import React, {useState} from 'react'

const Upload : NextPage = () => {
    const [file, setFile] = useState<any>()
    const [fileName, setfileName] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const user = supabase.auth.user()

        const {data, error} = await supabase
        .storage
        .from('videos')
        .upload('dog.mp4', file)
        alert('clicked')

        if (user !== null) {
            const {data, error} = await supabase
            .from('videos')
            .insert([
                {created_by: user.id, filename: fileName }
            ])
        }
    }


    return (
        <div className='flex flex-col items-center h-full w-full'>
            <form className='flex flex-col h-96 w-96 border-2 border-dashed rounded hover:border-red-400 justify-center items-center gap-4' onSubmit={handleSubmit}>
                File Name:
                <input type='text' value={fileName} onChange={(e) => setfileName(e.target.value)}/>
                Select video to upload
                <input type="file" onChange={(e) => setFile(e.target.files)}/>
                <input className="bg-red-500 text-white px-2 px-2 rounded" type='submit' />
            </form>
        </div>
    )
}

export default Upload