import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import github from './assets/Github Logo.png'


export function NavBar() {
    return (
        <nav className="navbar--body">
            <h1 className="navbar--zotpardy">Zotpardy</h1>
        </nav>
    )
}


export function BottomBar() {
    return (
        <footer className="bottom">
            <img src={github} className="github1"/>
            <a href="https://github.com/DeveshKrishan" className="devesh">/DeveshKrishan</a>
            <img src={github} className="github2"/>
            <a href="https://github.com/AndyNguwin" className="andy">/AndyNguwin</a>
            <img src={github} className="github3"/>
            <a href="https://github.com/hwuialnlg" className="will">/hwuialnlg</a>
        </footer>
    )
}

