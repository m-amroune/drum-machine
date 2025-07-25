import {React, useEffect, useState} from 'react'
import {pads} from '../data/pads'
import DrumPad from './DrumPad'
import Display from './Display'

const DrumMachine = () => {
    const [activeSound, setActiveSound] = useState('')
    const [powerOn, setPowerOn] = useState(true);
    useEffect(()=> {
      
      const handleKeyDown = (event) => {
        if(!powerOn) return;
        // if pad is on lowerCase
        const key = event.key.toUpperCase(); 
        console.log(key)
        const audio = document.getElementById(key);
        const pad = document.getElementById(key)?.parentElement;
       const padData = pads.find(pad => pad.key === key)
        if (!audio) {
  console.log("Audio introuvable pour la touche :", key);
}

       if(audio){
        audio.currentTime = 0;  // reset audio
        audio.play() // new play
        
         pad.classList.add("active");
         setTimeout(() => pad.classList.remove("active"),150);

         if(padData){
            setActiveSound(padData.name)
         } 
       }
      }

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown)
    },[powerOn])


  return (
    <div id="drum-machine">
        { /* pads  */}
        <div id="left-panel">
        <div id="pads-container"   >
                {pads.map(pad => (
  <DrumPad
    key={pad.id}
    keyPad={pad.key}
    soundName={pad.name}
    audioSrc={pad.src}
    setActiveSound = {setActiveSound}
     powerOn={powerOn}                
  />
))}


        </div>
        </div>
        <div id="right-panel" >
        <div id="controls-container">
            { /* button on/off  */}
        <button id="power" className='btn'  onClick={()=> setPowerOn(power => !power)  }  >{powerOn ? "Power ON" : "Power OFF"}</button>
        { /* display sound and volume*/}
       <Display activeSound={activeSound}/>
        { /* slider volume  */}
        <input id="sound" type="range" />

        </div>
        </div>
    </div>
  )
}

export default DrumMachine
