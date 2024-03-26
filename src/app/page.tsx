'use client'

import { useEffect } from "react" 
import AddPlayer from "../components/player/AddPlayer" 
import PlayerList from "../components/player/PlayerList" 
import usePlayers from "../hooks/usePlayers" 
import "./soccer.css"
import ToggleGroups from "../components/ToggleGroups"

export default function Home() {
  const {
    players,
    addPlayer
  } = usePlayers() 
  return (<>
    <ToggleGroups />
      <div className="soccer-field">
        <div className="circle" style={{ gridColumn: '6 / 9', gridRow: '1 / 2' }}>Raya</div>
        <div className="circle" style={{ gridColumn: '1 / 4', gridRow: '5 / 6' }}>white</div>  
        <div className="circle" style={{ gridColumn: '4 / 7', gridRow: '4 / 5' }}>Saliba</div>
        <div className="circle" style={{ gridColumn: '8 / 11', gridRow: '4 / 5' }}>Gb</div>
        <div className="circle" style={{ gridColumn: '11 / 14', gridRow: '5 / 6' }}>kiyor</div>
        <div className="circle" style={{ gridColumn: '1 / 4', gridRow: '8 / 9' }}>Saka</div>
        <div className="circle" style={{ gridColumn: '11 / 14', gridRow: '8 / 9' }}>Mart</div>
        <div className="circle" style={{ gridColumn: '4 / 7', gridRow: '7 / 8' }}>partey</div>
        <div className="circle" style={{ gridColumn: '3 / 6', gridRow: '10 / 11' }}>Jus</div>     
        <div className="circle" style={{ gridColumn: '8 / 11', gridRow: '7 / 8' }}>Odi</div>
        <div className="circle" style={{ gridColumn: '9 / 12', gridRow: '10 / 11' }}>Mart</div>
    </div>
  </>
  ) 
}
