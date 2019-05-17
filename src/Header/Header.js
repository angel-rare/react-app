import React from 'react';
import { changeExt } from 'upath';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}
