import React from 'react';

export const Login = ({ setPage }) => {
    return (
        <div className="contact">
           <h1>Логин</h1>

           <div className="contact__wrapper">
                <input className="contact__input" type="login" name="login" placeholder="Иван Петров" onfocus="this.placeholder='';"></input>
                <input className="contact__input" type="password" name="password" placeholder="*********" onfocus="this.placeholder='';"></input>
                <button type="submit">Войти</button>

           </div>
        </div>
    );
};