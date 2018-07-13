import React from 'react';
import style from './Title.css'

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>To do list</h1>
                <h2>Number of added tasks:
                    <span>{this.props.data.length}</span>
                </h2>
            </div>
        )
    }
}

export default Title;