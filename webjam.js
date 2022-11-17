import React, {useState} from 'react'
import github from './Github Logo.png'
import './webjam.css'
import sound from './open.mp3'
import rmp from './rmp_ibrahim_preview.png'
import spotlight from './Spotlight.png'
import v from './Vignette.png'

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
    const handleClick = (image) => {
        var audio = new Audio(sound)
        audio.play()
        togglePop()

        if (pop) {
            // console.log(1)
            popUp(image)
            // togglePop()
        }

    }
    
    const [pop, setPop] = useState(false)

    const togglePop = () => {
        setPop(!pop)
    }

    const popUp = (image) => {
        return (
        <div className="pop">
            <img className='v' src={v}/>
            <img className='light' src={spotlight}/>
            <div className='background'>
                <img className='rmp' src={image}/>
            </div>
            <button className="exit">Exit</button>
        </div>
        )
    }

    return (
        <main className="main">
            <button className="card1" onClick={() => {handleClick({rmp})}}></button>
            <button className="card2" onClick={() => {handleClick("card2")}}></button>
            <button className="card3" onClick={() => {handleClick("card3")}}></button>
            <button className="card4" onClick={() => {handleClick("card4")}}></button>
            <button className="card5" onClick={() => {handleClick("card5")}}></button>
            <button className="card6" onClick={() => {handleClick("card6")}}></button>
            <button className="card7" onClick={() => {handleClick("card7")}}></button>
            <button className="card8" onClick={() => {handleClick("card8")}}></button>
            <button className="card9" onClick={() => {handleClick("card9")}}></button>
        </main>
    )
}


