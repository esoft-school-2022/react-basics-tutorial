import React from 'react';

export default class SquareClass extends React.Component{
    constructor(props) {
        super(props);

        const {
            box
        } = props;

        this.state = {
            on: box.on,
            styles: {
                backgroundColor: 'white'
            }
        };
    }

    changeStyles = () => {
        this.setState({
            ...this.state.on,
            styles: {
                backgroundColor: this.state.on ? 'white' : 'red'
            }
        })
    }

    handleOnAndOff = () => {
        this.setState(prevState => ({on: !prevState.on}))
        this.changeStyles();
    }

    render() {
        return (
            <div
                onClick={this.handleOnAndOff}
                className='box'
                style={this.state.styles}>
            </div>
        )
    }
}