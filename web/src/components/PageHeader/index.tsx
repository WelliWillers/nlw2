import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) =>  {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackIcon} alt=""/>
                </Link>
                <img src={logoImg} alt=""/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p>}

                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;