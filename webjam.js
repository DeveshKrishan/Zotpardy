import React from 'react'
import github from './Github Logo.png'
import './webjam.css'


export default function App() {
    return (
        <div className="wrap">
            <NavBar />
            <Main />
            <BottomBar />
        </div>
    )
}


function NavBar() {
    return (
        <nav className="navbar--body">
            <h1 className="navbar--zotpardy">Zotpardy</h1>
        </nav>
    )
}


function BottomBar() {
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


function Main() {
    return (
        <main className="main">
            <button className="card1"></button>
            <button className="card2"></button>
            <button className="card3"></button>
            <button className="card4"></button>
            <button className="card5"></button>
            <button className="card6"></button>
            <button className="card7"></button>
            <button className="card8"></button>
            <button className="card9"></button>
        </main>
    )
}