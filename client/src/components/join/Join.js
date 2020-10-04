import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-outer-container">
            <div className="join-inner-container">
                <h1 className="heading">Join</h1>
                <div><input className="join-input" type="text" placeholder="Name" onChange={e => setName(e.target.value)} ></input></div>
                <div><input className="join-input" type="text" placeholder="Room" onChange={e => setRoom(e.target.value)} ></input></div>

                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type="submit">Sign In</button>
                </Link>
            </div>

        </div>
    )
}

export default Join;