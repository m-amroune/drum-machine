import React from 'react'

const Display = ({activeSound}) => {
  return (
    <div>
      <div id="display">
      {activeSound || "Ready"}
    </div>
    </div>
  )
}

export default Display
