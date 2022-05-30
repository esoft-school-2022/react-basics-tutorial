import React, {useContext} from 'react';
import {BoxContext} from '../BoxContext';
import Square from './Square';

const BoxList = () => {
    const value = useContext(BoxContext);

    return (
        <div>
            <h1>Boxes</h1>
            {
                value.map((box, id) => {
                    return <Square key={box.id} box={box}/>
                })
            }
        </div>
    )
}

export default BoxList;