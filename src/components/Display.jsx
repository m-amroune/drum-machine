import React from 'react'

// Dynamic display
const Display = ({activeSound, volume, isChangingVolume}) => {
  // Display volume while adjusting,  otherwhise show active sound
    const message = isChangingVolume
    ? `Volume: ${Math.round(volume * 100)}`
    : activeSound || "Ready";

  return (
    
      <div id="display">
      {message}
    </div>
   
  )
}

export default Display
