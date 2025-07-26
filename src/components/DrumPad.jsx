
// component for each pad
const DrumPad = ({keyPad, audioSrc, setActiveSound, soundName, powerOn, volume}) => {
   const playSound = () =>{
    if (!powerOn) return;
        const audio = document.getElementById(keyPad);
        if(audio){
         
          audio.currentTime = 0;  // reset audio 
          audio.volume = volume;
          audio.play();
          setActiveSound(soundName) // Update the currently active sound
        }
    }
  return (
    <div>
        { /* replace methode for delete space  */}
    <div className="drum-pad" id={soundName.replace(/\s/g, '')}  onClick={playSound}   >
      {keyPad}
      <audio className="clip" id={keyPad} src={audioSrc}  ></audio>
    </div>

    </div>
  )
}

export default DrumPad
