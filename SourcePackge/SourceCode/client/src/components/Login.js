import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.props.onLogin}>Login to facebook</button>
            </div>
        );
    }
}

export default Login;