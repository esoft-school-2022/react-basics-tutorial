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
        console.log('constructor');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => {
            this.setState(prevState => ({
                ...prevState,
                styles: {backgroundColor: 'yellow'}
            }));
        }, 3000);
    }

    handleOnAndOff = () => {
        this.setState(prevState => ({
            ...prevState,
            on: !prevState.on,
            styles: {backgroundColor: this.state.on ? 'white' : 'red'}
        }))
    }

    render() {
        console.log('render');
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