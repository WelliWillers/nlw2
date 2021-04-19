import React, { Component, FormEvent, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import './styles.css';

import viewPass from '../../assets/images/ver-senha.svg';
import heartIcon from '../../assets/images/icons/heart.svg';

function SingIn() {
    return (
        <div id="page-login">
            <div id="page-login-content">
                <div className="grid-header">
                    <Header title="Sua plataforma de estudos online."/>
                </div>
                <div className="grid-login">
                    <form className="login-form">
                        
                        <h1>Fazer login</h1>
                        <div className="input">
                            <input 
                                name="email" 
                                required
                                type="text"
                            />
                            <label htmlFor="login">E-mail</label>
                        </div>
                        <div className="input">
                            <input 
                                name="password"
                                required 
                                type="password"
                            />
                            <label htmlFor="pass">Senha</label>
                            <span><img src={viewPass} alt=""/></span>
                        </div>
                        <div className="acesses">
                            <input type="checkbox" /><span className="label-lembrar">Lembrar-me</span>
                            <Link to="/forgot"><p>Esqueci minha senha</p></Link>
                        </div>

                        <button type="submit" className="button-login">Entrar</button>

                        <div className="cadastre-se">
                            <p>Não tem conta<br/>
                                <Link to="/signup">Cadastre-se</Link>
                            </p>
                            <p>É de graça <img src={heartIcon} alt=""/></p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div> 
    );
    
}

export default SingIn;