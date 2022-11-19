import { Component } from 'react';
import './Button.css'

class Button extends Component {
    render() {
        const { label } = this.props
        return (
            <button className='btn'>{label}</button>
        )
    }
}

export default Button;