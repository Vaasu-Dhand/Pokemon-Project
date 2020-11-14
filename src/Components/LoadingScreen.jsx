import React from 'react'
import pickachu from '../Images/pikachu.gif'

export default function LoadingScreen() {
  return (
    <div className="loading-background">
      <img src={pickachu} alt="pickachu" width="200px" className="pikachu"></img>
    </div>
  )
}
