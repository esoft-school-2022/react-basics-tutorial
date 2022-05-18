import React, { useEffect, useRef, useState} from 'react';

function Hooks(props) {

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const inputRef = useRef();

    const changeName = (name) => {
        setName(name);
        setCount(prevCount => prevCount + 1);
    }

    function focus() {
            inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(() => changeName(e.target.value))}></input>
            <div>My name is {name}</div>
            <div>I rendered {count} times</div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default Hooks;