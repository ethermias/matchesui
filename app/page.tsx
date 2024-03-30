'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/showPlayers"
import AddSquad from "../components/squad/addSquad"
import SoccerField from "../components/soccerField/soccerField"
import useSquad from "@/hooks/useSquad"
import LeaderServers from "@/components/leaders/leadersServers"
import { Label } from "@/components/ui/label"

export default function Home() {
  const { players, searchPlayers } = usePlayers() 
  const { squad, addSquad, removeSquad } = useSquad() 
  
  return (
  <>
    <Label>📍 Score will be updated every 2 hr for Matchday 30 📺, See you Monday afternoon for Matchday 31 🦮 </Label>
    <LeaderServers />
    {/* {<SearchPlayers onSubmit={searchPlayers}/>
    <ShowPlayers players={players} squad={squad} addSquad={addSquad}/>
    <SoccerField squad={squad} removeSquad={removeSquad}/>
    <AddSquad squad={squad}/>} */}
  </>
  ) 
}
