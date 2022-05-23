import React, {Component} from 'react';
import ComponentTwo from "./ComponentTwo";
import {BoxContext} from "../BoxContext";
import Square from "./Square";

class ComponentFive extends Component {

    static contextType = BoxContext;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BoxContext.Consumer>
                {(value) => {
                    return (
                        <div>
                            <h1>Boxes</h1>
                            {
                                value.map((box, id) => {
                                    return <Square key={box.id} box={box}/>
                                })
                            }
                        </div>
                    )
                }}
            </BoxContext.Consumer>
        );
    }
}

export default ComponentFive;