import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ note }) => {
    console.log("dsdsf", note);
    return (
        <div>
            <Link to={`/note/${note.id}`}>
                <h3>{note.body}</h3>
            </Link>
        </div>
    );
};

export default ListItem;