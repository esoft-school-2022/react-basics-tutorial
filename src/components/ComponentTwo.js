import React, {Component} from 'react';
import ComponentThree from "./ComponentThree";
import {BoxContext, BoxProvider} from "../BoxContext";

class ComponentTwo extends Component {

    render() {
        return (
            <BoxProvider>
                <div>
                    <ComponentThree />
                </div>
            </BoxProvider>
        );
    }
}

export default ComponentTwo;