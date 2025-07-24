


const DrumPad = ({keyPad, audioSrc, setActiveSound, soundName}) => {
   const playSound = () =>{
        const audio = document.getElementById(keyPad);
        if(audio){
          audio.currentTime = 0;
          audio.play();
          setActiveSound(soundName)
        }
    }
  return (
    <div>
      
    <div className="drum-pad"  onClick={playSound}   >
      {keyPad}
      <audio className="clip" id={keyPad} src={audioSrc}  ></audio>
    </div>

    </div>
  )
}

export default DrumPad
