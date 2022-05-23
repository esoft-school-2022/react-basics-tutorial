import React, {createContext, useState} from 'react';
import boxes from './boxes';

const BoxContext = createContext();

const BoxProvider = (props) => {
    const [boxesAll, setBoxes] = useState(boxes);

    return (
        <BoxContext.Provider value={'Hello'}>
            {props.children}
        </BoxContext.Provider>
    )
}

export {
    BoxContext,
    BoxProvider
}