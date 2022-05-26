import React, {Component} from 'react';
import ComponentThree from "./ComponentThree";
import {BoxContext, BoxProvider} from "../BoxContext";

class ComponentTwo extends Component {

    render() {
        return (
           <div>
               <ComponentThree />
           </div>
        );
    }
}

export default ComponentTwo;