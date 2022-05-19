import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';

const NoteListPage = () => {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log("////////", data)
        setNotes(data)
    }

    return (
        <div>
            <div className="notes-list">
                {
                    notes.map((note, index) => (
                        // <h3 key={index}>{note.body}</h3>
                        <ListItem key={index} note={note} />
                    ))
                }
            </div>
        </div>
    );
};

export default NoteListPage;