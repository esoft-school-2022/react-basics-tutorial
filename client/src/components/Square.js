import React, {useEffect, useRef, useState} from 'react';

export default function Square(props) {
    const {
        box
    } = props;

    const [on, setOn] = React.useState(box.on);

    let styles = {
        backgroundColor: on ? 'white' : 'red'
    }

    const handleOnAndOff = () => {
        setOn(prevOn => !prevOn)
    }

    return (
        <div
            onClick={handleOnAndOff}
            className='box'
            style={styles}>
        </div>
    )
}