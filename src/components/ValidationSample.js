import React, { Component } from 'react';
import '../style/ValidationSample.css';

class ValidationSample extends Component {

    handleFocus = () => {
        this.input.focus();
    }

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = e => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.handleFocus();
    }

    render() {
        return (
            <div>
                <h1>유효성 검증</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 240
                }}>
                    <input
                        ref={ref => this.input = ref}
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    />
                    <button onClick={this.handleButtonClick}>검증하기</button>
                </div>
            </div>
        );
    }
}

export default ValidationSample;