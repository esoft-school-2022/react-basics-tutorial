import React, { useState } from 'react';
import boxes from './boxes';
import Index from '../src/components/Index';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

// const client = new W3CWebSocket('ws://127.0.0.1:8000');
export default function App() {

  const [component, setComponent] = useState('hooks');

  const setNewComponent = (c) => {
    setComponent(c);
  }

  return (
    <div className='navigation'>
        <div className='changeButtons'>
          <button className='buttonSelect' value='hooks' onClick={(e) => setNewComponent(e.target.value)}>Hooks</button>
          <button className='buttonSelect' value='square' onClick={(e) => setNewComponent(e.target.value)}>Square</button>
          <button className='buttonSelect' value='squareClass' onClick={(e) => setNewComponent(e.target.value)}>SquareClass</button>
          <button className='buttonSelect' value='boxes' onClick={(e) => setNewComponent(e.target.value)}>Boxes</button>
          <button className='buttonSelect' value='chatState' onClick={(e) => setNewComponent(e.target.value)}>ChatState</button>
          <button className='buttonSelect' value='chatMobx' onClick={(e) => setNewComponent(e.target.value)}>ChatMobx</button>
        </div>
        <Index component={component} boxes={boxes}/>
    </div>
  )
}
