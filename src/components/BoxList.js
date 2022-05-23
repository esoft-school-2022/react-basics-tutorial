import React, {useContext} from 'react';
import {BoxContext, BoxProvider} from '../BoxContext';

const BoxList = () => {
    const value = useContext(BoxContext);

    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}

export default BoxList;