import ReactDOM from 'react-dom';
import React, { Component } from 'react';



export class Login extends Component {
    
        state = { inputLogin: '', inputPassword: '' };

        handleSubmit = event => {
            event.preventDefault();
        };

        handleChange = event => {
            this.setState({ [event.target.name]: event.target.value });
        };

        render() {
            const { inputLogin, inputPassword } = this.state;
            return (
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1>Логин</h1>
                    </div>
                    <div>
                        <label>
                            Логин:
                            <input
                                type="text"
                                value={inputLogin}
                                name="inputLogin"
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Пароль:
                            <input
                                type="text"
                                name="inputPassword"
                                value={inputPassword}
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
      
    
