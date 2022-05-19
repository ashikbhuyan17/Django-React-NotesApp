import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NotePage() {
    let { id } = useParams();
    const [note, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        console.log("////////", data)
        setNotes(data)
    }
    return (
        <div className='note'>
            <textarea defaultValue={note?.body}></textarea>
        </div>
    );
}

export default NotePage;