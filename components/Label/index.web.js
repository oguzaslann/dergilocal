import React from 'react';

export class Label extends React.Component {
    render() {
        return(
            <div>{this.props.children}</div>
        );
    }
}