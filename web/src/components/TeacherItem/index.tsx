import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    "id": number,
    "avatar": string,
    "bio": string,
    "cost": number,
    "name": string,
    "subject": string,
    "whatsapp": string
};

export interface TeacherItemProps {
    teacher: Teacher; 
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function criateNewConnection(){
        api.post("connections", {
            user_id: teacher.id,
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer> 
                <p>Preço por hore: <strong>R${teacher.cost},00</strong></p>
                <a target="_blank" onClick={criateNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entre em contato
                </a>
            </footer>

        </article>
    );
}

export default TeacherItem