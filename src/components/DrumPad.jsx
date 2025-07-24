import React from 'react';


const DrumPad = ({keyPad, audioSrc}) => {
  return (
    <div>
      
    <div className="drum-pad">
      {keyPad}
      <audio className="clip" id={keyPad} src={audioSrc}></audio>
    </div>

    </div>
  )
}

export default DrumPad
