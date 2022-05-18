import React from 'react';

class SquareClass extends React.Component{
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

    handleOnAndOff = () => {
        this.setState(prevState => ({
            ...prevState,
            on: !prevState.on,
            styles: {backgroundColor: this.state.on ? 'white' : 'red'}
        }))
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

export default SquareClass;