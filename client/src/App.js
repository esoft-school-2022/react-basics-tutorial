import React, { useState } from 'react';
import boxes from './boxes';
import Index from '../src/components/Index';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8000');
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
          <button value='boxes' onClick={(e) => setNewComponent(e.target.value)}>Boxes</button>
          <button value='chat' onClick={(e) => setNewComponent(e.target.value)}>Chat</button>
        </div>
        <Index component={component} boxes={boxes}/>
    </div>
  )
}
