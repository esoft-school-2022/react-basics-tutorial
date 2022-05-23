import React, {createContext, useState} from 'react';
import boxes from './boxes';

const BoxContext = createContext();

const BoxProvider = (props) => {

    return (
        <BoxContext.Provider value={boxes}>
            {props.children}
        </BoxContext.Provider>
    )
}

export {
    BoxContext,
    BoxProvider
}