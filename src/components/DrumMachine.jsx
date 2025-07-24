import React from 'react'
import {pads} from '../data/pads'

const DrumMachine = () => {
  return (
    <div id="drum-machine">
        { /* pads  */}
        <div id="left-panel">
        <div id="pads-container" className='pad-container'>Pads</div>
        </div>
        <div id="right-panel" >
        <div id="controls-container">
            { /* button on/off  */}
        <button id="power" className='btn' >Power</button>
        { /* display sound and volume*/}
        <div id="display">Heater</div>
        { /* slider volume  */}
        <input id="sound" type="range" />
        <button id="bank" className='btn' >Bank</button>
        </div>
        </div>
    </div>
  )
}

export default DrumMachine
