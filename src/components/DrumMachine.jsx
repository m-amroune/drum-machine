import { React, useEffect, useState } from "react";
import { pads } from "../data/pads";
import DrumPad from "./DrumPad";
import Display from "./Display";


// Main comporent
const DrumMachine = () => {
  // States fo active sound, power status, volume and volume slider 
  const [activeSound, setActiveSound] = useState("");
  const [powerOn, setPowerOn] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isChangingVolume, setIsChangingVolume] = useState(false);
  useEffect(() => {
   // When keyboard press
    const handleKeyDown = (event) => {
      if (!powerOn) return;
    
      const key = event.key.toUpperCase();
    
      const audio = document.getElementById(key);
      const pad = document.getElementById(key)?.parentElement;
      const padData = pads.find((pad) => pad.key === key);
      // if sound exists
      if (!audio) {
        console.log("Audio introuvable pour la touche :", key);
      }

      if (audio) {
        audio.currentTime = 0; // reset audio
        audio.play(); // new play
        // temporary visual effect on the active pad
        pad.classList.add("active");
        setTimeout(() => pad.classList.remove("active"), 150);
        // Update displayed sound
        if (padData) {
          setActiveSound(padData.name);
        }
      }
    };
    // Add and clean up keyboard listener
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [powerOn]);

  return (
    <div id="drum-machine">
      {/* pads  */}
      <div id="left-panel">
        <div id="pads-container">
          {pads.map((pad) => (
            <DrumPad
              key={pad.id}
              keyPad={pad.key}
              soundName={pad.name}
              audioSrc={pad.src}
              setActiveSound={setActiveSound}
              powerOn={powerOn}
              volume={volume}
            />
          ))}
        </div>
      </div>
      <div id="right-panel">
        <div id="controls-container">
          {/* button on/off  */}
          <button
            id="power"
            className="btn"
            onClick={() => setPowerOn((power) => !power)}
          >
            {powerOn ? "Power ON" : "Power OFF"}
          </button>
          {/* display sound and volume*/}
          <Display
            activeSound={activeSound}
            volume={volume}
           
            isChangingVolume={isChangingVolume}

          />

          {/* slider volume  */}
          <input
            id="sound"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value)) }
             onMouseDown={() => setIsChangingVolume(true)}
            onMouseUp={() => setIsChangingVolume(false)}
            onTouchStart={() => setIsChangingVolume(true)}
            onTouchEnd={() => setIsChangingVolume(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
