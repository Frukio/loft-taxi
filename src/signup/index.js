import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Signup extends Component {
    
    state = { inputReg: '', inputPass: '', inputMail: '', };

    handleSubmit = event => {
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { inputReg, inputPass, inputName } = this.state;
        return (
            
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Регистрация</h1>
                </div>
                <div>
                    <label>
                        Логин:
                        <input
                            type="text"
                            value={inputReg}
                            name="inputReg"
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Пароль:
                        <input
                            type="text"
                            name="inputPass"
                            value={inputPass}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Почта:
                        <input
                            type="text"
                            name="inputName"
                            value={inputName}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Войти" onClick='location.href="/map"' />    
                </div>
            </form>
        );
    }
}