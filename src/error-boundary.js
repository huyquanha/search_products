import React, {Component} from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false,
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError:true};
    }

    componentDidCatch(error,info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }
        return this.props.children; //if no error, return whatever is rendered inside error boundary
    }
}

export default ErrorBoundary;