import { Component } from 'react';
import './Display.css'

class Display extends Component {
    render() {
        const { value } = this.props
        return (
            <div className='display'>{value}</div>
        )
    }
}

export default Display;