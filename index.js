import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import './share.js'
import {NavBar, BottomBar} from './share.js'

  function PlayButton(){ 
    return (<button className="home"> Play </button>)}

  function AboutButton(){ return <button className="about">About</button>}

  function Highscores(){return <button className="highScores">Leaderboard</button>}

  function Main(){
    return(
        //React Fragment allows mutiples divs
        <> 
        <NavBar/>
        <div className="mainContent">
         <div className="centerPlay">
              <div className="playButtonBG">
              
              <PlayButton/>
              </div>
            </div>
            <div className="centerAbout">
              <div className="aboutButtonBG">
                  <AboutButton/>
              </div>
            </div>
          
            <div className="centerHigh">
              <div className="highScoresBG">
                <Highscores/>
                </div>
            </div>
            <BottomBar/>
          </div>
        </>
    )
  }

  function App() {
    return (<Main/>);
  }


  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <App />;
  root.render(element);