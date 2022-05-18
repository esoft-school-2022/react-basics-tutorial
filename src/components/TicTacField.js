import React, { Component } from 'react';
import cells from '../boxes';
import Cell from './Cell';

class TicTacField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe Field</h1>
                <div className='fieldArea'>
                    {
                        cells.map(({cell}, id) => (
                            <Cell key={id} value={cell} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default TicTacField;