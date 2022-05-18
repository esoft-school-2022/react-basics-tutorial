import React, { Component } from 'react';
import Hooks from './Hooks';
import SquareClass from './SquareClass';
import Square from './Square';

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
            </div>
        )
    }
}

export default Index;