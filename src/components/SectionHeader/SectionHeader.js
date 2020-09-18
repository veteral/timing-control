import React from 'react';
import s from './SectionHeader.module.css';
import logo from '../../img/logo1.png';
import { NavLink } from 'react-router-dom';

const HeaderSection = () => {
    return (
        <nav className={`navbar navbar-dark navbar-expand-lg bg-primary ${s.navSection}`}>
            <div className="navbar-brand">
                <img src={logo} className={s.logo} alt="logotip App" />
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to={'/'} className="nav-link">Контроль</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/all'} className="nav-link">Список документов</NavLink>                  
                </li>
                <li className="nav-item">
                    <NavLink to={'/type'} className="nav-link">Виды документов</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/executor'} className="nav-link">Исполнители</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/about'} className="nav-link">Информация</NavLink>                    
                </li>
            </ul>
        </nav>
    );

}

export default HeaderSection;
