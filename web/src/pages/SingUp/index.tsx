import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import viewPass from '../../assets/images/ver-senha.svg';
import BackIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function SingUp() {
    
    return (
        <div id="page-login">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackIcon} alt=""/>
                </Link>
            </div>
            <div id="page-login-content">
                <div className="grid-login">
                    <form className="login-form">
                        <h1>Cadastro</h1>
                        <p>Preencha os dados abaixo<br/>
                        para começar.</p>

                        <div className="input">
                            <input 
                                name="name" 
                                required
                            />
                            <label htmlFor="name">Nome</label>
                        </div>
                        <div className="input">
                            <input
                                name="email" 
                                required
                            />
                            <label htmlFor="login">E-mail</label>
                        </div>
                        <div className="input">
                            <input 
                                name="Password" 
                                required
                                type="password"
                            />
                            <label htmlFor="pass">Senha</label>
                            <span><img src={viewPass} alt=""/></span>
                        </div>
                        

                        <button type="submit" className="button-login">Cadastrar</button>
                        
                    </form>
                </div>
                <div className="grid-header">
                    <Header title="Faça o seu cadastro gratuitamente."/>
                </div>
            </div>
        </div> 
    );
}

export default SingUp;