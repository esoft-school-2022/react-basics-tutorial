import React, {Component, useContext} from 'react';
import {BoxContext, BoxProvider} from "../BoxContext";
import Square from "./Square";
import ComponentFour from "./ComponentFour";

class ComponentThree extends Component {

    render() {
        return (
            <div>
                <ComponentFour />
            </div>
        );
    }
}

export default ComponentThree;