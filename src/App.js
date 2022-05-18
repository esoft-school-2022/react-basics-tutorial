import React, { useState } from 'react';
import Square from './components/Square'
import boxes from './boxes'
import SquareClass from "./components/SquareClass";
import Hooks from './components/Hooks';
import Index from './components/Index';

export default function App() {

  const [component, setComponent] = useState('hooks');

  const setNewComponent = (c) => {
    setComponent(c);
  }

  return (
    <div className='main'>
        <div className='changeButtons'>
          <button value='hooks' onClick={(e) => setNewComponent(e.target.value)}>Hooks</button>
          <button value='square' onClick={(e) => setNewComponent(e.target.value)}>Square</button>
          <button value='squareClass' onClick={(e) => setNewComponent(e.target.value)}>SquareClass</button>
          <button value='ticTacField' onClick={(e) => setNewComponent(e.target.value)}>Tic Tac Toe</button>
        </div>
        <Index component={component} boxes={boxes}/>
    </div>
  )
}
