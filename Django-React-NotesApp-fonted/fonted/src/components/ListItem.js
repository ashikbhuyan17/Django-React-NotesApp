import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/NoteListPage'
const ListItem = ({ note }) => {
    console.log("dsdsf", note);
    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <div className='notes-list-item'>
                    <h3>{note.body}</h3>
                </div>
            </Link>
        </div>
    );
};

export default ListItem;