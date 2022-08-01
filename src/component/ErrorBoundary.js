
import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return<h2>oops... wrong detais</h2>
        }return this.state.children
    }
}




export default ErrorBoundary;