import React from 'react'

const Display = ({activeSound, volume}) => {
  return (
    
      <div id="display">
      {activeSound || "Ready"} Volume: {Math.round(volume * 100)}
    </div>
   
  )
}

export default Display
