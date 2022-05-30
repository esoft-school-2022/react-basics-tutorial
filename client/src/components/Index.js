import React, { Component } from 'react';
import Hooks from './Hooks';
import SquareClass from './SquareClass';
import Square from './Square';
import ChatState from './ChatState';
import ComponentOne from "./ComponentOne";
import ChatMobx from "./ChatMobx";
import { observer } from 'mobx-react';


class Index extends Component {
    render() {
        const {
            component,
            boxes
        } = this.props;

        return (
            <div>
                {
                    component === 'hooks' && (
                        <Hooks />
                    )
                }
                {
                    component === 'squareClass' && (
                        boxes.map((box) => {
                            return (
                            <SquareClass key={box.id} box={box} />
                            )
                        })
                    )
                }
                {
                    component === 'square' && (
                        boxes.map((box) => {
                            return (
                            <Square key={box.id} box={box} />
                            )
                        })
                    )
                }
                {
                    component === 'boxes' && (
                        <ComponentOne />
                    )
                }
                {
                    component === 'chatState' && (
                        <ChatState />
                    )
                }
                {
                    component === 'chatMobx' && (
                        <ChatMobx />
                    )
                }
            </div>
        )
    }
}

export default observer(Index);