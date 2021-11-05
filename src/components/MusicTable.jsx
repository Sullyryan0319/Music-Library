import React from 'react';
import App from './App';

import './MusicTable.css'

const MusicTable = ({music}) => {
    return(
        <div>
            <ul>
                {music.map((e, i) => 
                    <li key={i} className="no-dotz"></li>

                )}
            </ul>
        </div>
    );
};



export default MusicTable;