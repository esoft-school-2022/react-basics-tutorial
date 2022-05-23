import React, { useEffect, useRef, useState} from 'react';

function Hooks() {

    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef('');

    function focus() {
        inputRef.current.focus();
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        prevName.current = name;
    });

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}></input>
            <div>My name is {name}</div>
            <div>My name was {prevName.current}</div>
            <div>My name was rendered: {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default Hooks;