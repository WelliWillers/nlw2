import React, { InputHTMLAttributes } from 'react';

import './styles.css';

import LogoProffy from '../../assets/images/logo.svg';
import backgroundProffy from '../../assets/images/background.svg';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (Props) => {
    return (
        <div id="header-config">
            <div id="img-background">
                <img className="logo-header" src={LogoProffy} alt=""/>
                <p>{Props.title}</p>
            </div>
        </div>
    );
}

export default Header;