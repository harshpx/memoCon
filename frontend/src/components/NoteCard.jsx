import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NoteCard({note}) {

    const {dark} = useSelector(state=>state.theme);
    const navigate = useNavigate();

    return (
        <div className={`${dark ? "dark" : ""} cursor-pointer`} onClick={(e)=>navigate(`/dashboard/${note._id}`)}>
            <div className={`p-4 my-3 inline-flex flex-col rounded-lg`} style={{backgroundColor:note.color}}>
                <div className='text-2xl mb-2'>{note.title}</div>
                <div>{note.text}</div>
            </div>
        </div>
    )
}

export default NoteCard;