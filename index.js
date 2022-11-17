import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import './share.js'
import {NavBar, BottomBar} from './share.js'

  function PlayButton(){
    return <button className="home">Play</button>
  }

  function AboutButton(){
    return <button className="about">About</button>
  }

  function Highscores(){
    return <button className="highScores">Highscores</button>
  }

  function MainContent(){
    return <div className="mainContent">

    </div>
  }

  function ButtonsBackgrounds(){
    return(
        //React Fragment allows mutiples divs
         <> 
            <div className="playButtonBG"></div>
            <PlayButton/>
            <div className="aboutButtonBG"></div>
            <AboutButton/>
            <div className="highScoresBG"></div>
            <Highscores/>
        </>
    )
  }

  export default function App() {
    return (
      <div >
        <MainContent/>
        <NavBar/>
        <ButtonsBackgrounds/>
        <BottomBar/>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <App />;
  root.render(element);