

const DrumPad = ({keyPad, audioSrc, setActiveSound, soundName, powerOn, volume}) => {
   const playSound = () =>{
    if (!powerOn) return;
        const audio = document.getElementById(keyPad);
        if(audio){
          audio.currentTime = 0;
          audio.volume = volume;
          audio.play();
          setActiveSound(soundName)
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
