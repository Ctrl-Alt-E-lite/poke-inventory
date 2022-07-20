// Link Button Template
import React from 'react'
import { Link } from "react-router-dom"

function LinkButton({text, to, bgColor, textColor}) {

    const btnStyle = {
        backgroundColor: bgColor,
        color: textColor
    }

  return (
      <Link tp={to} className='link-btn' style={btnStyle}>
      {text}
      </Link>
    
  )
}

export default LinkButton