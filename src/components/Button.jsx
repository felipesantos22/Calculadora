import { Component } from 'react';
import './Button.css'

class Button extends Component {
    render() {
        const { label, click, triple, double, operation } = this.props
        return (
            <button className={`btn 
            ${operation ? 'operation' : ''}  
            ${double ? 'double' : ''} 
            ${triple ? "triple" : ''}`}
                onClick={e => click(e.target.innerHTML)}>{label}</button>
        )
    }
}

export default Button;