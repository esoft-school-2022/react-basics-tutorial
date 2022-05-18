import React, { useState } from 'react';
import Square from './components/Square'
import boxes from './boxes'
import SquareClass from "./components/SquareClass";
import Hooks from './components/Hooks';
import Index from './components';

export default function App() {

  const [component, setComponent] = useState('hooks');

  const setNewComponent = (c) => {
    console.log(c);
    setComponent(c);
  }

  return (
    <div>
        <Index component={component} boxes={boxes}/>
        <button value='hooks' onClick={(e) => setNewComponent(e.target.value)}>Hooks</button>
        <button value='square' onClick={(e) => setNewComponent(e.target.value)}>Square</button>
        <button value='squareClass' onClick={(e) => setNewComponent(e.target.value)}>SquareClass</button>
    </div>
  )
}
