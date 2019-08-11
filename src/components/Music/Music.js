import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
    let oldNames = ["dima", "sveta", "lena"];
    let newNames = oldNames.map( () => "DIII" );

    return (
        <div>
            Page Music<br></br>
            {oldNames}<br></br>
            {newNames}
        </div>
    );
}

export default Music;