import React from 'react'

const Display = ({activeSound}) => {
  return (
    
      <div id="display">
      {activeSound || "Ready"}
    </div>
   
  )
}

export default Display
