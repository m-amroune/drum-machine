import {React, useState} from 'react'
import {pads} from '../data/pads'
import DrumPad from './DrumPad'
import Display from './Display'

const DrumMachine = () => {
    const [activeSound, setActiveSound] = useState('')
 
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
  />
))}


        </div>
        </div>
        <div id="right-panel" >
        <div id="controls-container">
            { /* button on/off  */}
        <button id="power" className='btn' >Power</button>
        { /* display sound and volume*/}
       <Display activeSound={activeSound}/>
        { /* slider volume  */}
        <input id="sound" type="range" />
        <button id="bank" className='btn' >Bank</button>
        </div>
        </div>
    </div>
  )
}

export default DrumMachine
