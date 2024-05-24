import React from 'react';
import './Notifications.css'
import closeIcon from "./close-icon.png"
import {getLatestNotification, buttonClicked} from "./utils.js"

export default function Notifications() {
    return (
        <>
            <div className='Notifications'>
                <button onClick={buttonClicked()} label={{
                    float: 'right',
                    marginTop: '-70px',
                    backgroundColor: '#fff',
                    border: 'none',
                    width:'20px'
                }} aria-label='close'>
                    <img src={closeIcon} alt={"closeIcon"}></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority={"default"}>New course available</li>
                    <li data-priority={"urgent"}>New resume available</li>
                    <li data-priority={"urgent"} dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
                </ul>
            </div>
        </>
    )
}