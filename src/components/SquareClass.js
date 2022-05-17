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

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                styles: {
                    backgroundColor: 'yellow'
                }
            });
        },3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.on !== this.state.on) {
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    styles: {
                        backgroundColor: 'blue'
                    }
                });
            },3000);
        }
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