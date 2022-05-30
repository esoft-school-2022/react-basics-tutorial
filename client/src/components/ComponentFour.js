import React, {Component} from 'react';
import ComponentFive from './ComponentFive';
import {BoxProvider} from '../BoxContext';

class ComponentFour extends Component {

    render() {
        return (
            <BoxProvider>
                <div>
                    <ComponentFive />
                </div>
            </BoxProvider>
        );
    }
}

export default ComponentFour;