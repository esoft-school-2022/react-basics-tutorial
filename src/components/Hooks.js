import React, { useEffect, useRef, useState} from 'react';

function Hooks() {

    const [name, setName] = useState('');
    const prevName = useRef();

    useEffect(() => {
        prevName.current = name
    });

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <div>My name was: {prevName.current}</div>
        </div>
    )
}

export default Hooks;