import React, {useState} from 'react'
import github from './Github Logo.png'
import './webjam.css'
import sound from './open.mp3'
import rmp from './rmp_ibrahim_preview.png'
import spotlight from './Spotlight.png'
import v from './Vignette.png'
import close from './close.mp3'
import wongma from './wongma.png'
import kahoot from './kahoot.mp3'
import {motion} from "framer-motion"
import zottie from './zottie_thottie.gif'
import zotted from './bust_a_zot.gif'


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

var image;

function Main() {
    const handleClick = (pic) => {
        togglePop()
        // image = pic
        image = pic

    }
    
    const [pop, setPop] = useState(false)
    // const [image, setImage] = useState("")

    const togglePop = () => {
        setPop(!pop)
        if (pop) {
            var audio = new Audio(sound)
            audio.play()
            
        }
        else {
            var audio = new Audio(close)
            audio.play()
        }
    }

    return (
        <main className="main">

            <motion.button whileHover={{scale: 1.25}} className="card1" onClick={() => {handleClick(rmp)}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card2" onClick={() => {handleClick(wongma)}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card3" onClick={() => {handleClick()}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card4" onClick={() => {handleClick()}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card5" onClick={() => {handleClick()}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card6" onClick={() => {handleClick()}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card7" onClick={() => {handleClick()}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card8" onClick={() => {handleClick()}}></motion.button>
            <motion.button whileHover={{scale: 1.25}} className="card9" onClick={() => {handleClick()}}></motion.button>
            <div className="ad1"><img src={zottie} className="zottie"/></div>
            <div className="ad2"><img src={zotted} className="bust"/></div>
            {pop && (
                <div className="pop">
                <img className='v' src={v}></img>
                <div className='background'>
                    <img className='rmp' src={image}/>
                    <img className='light' src={spotlight}/>
                    <button className="exit" onClick={togglePop}>Exit</button>
                </div>
            </div>
            )}
        </main>
    )
}


