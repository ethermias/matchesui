'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/showPlayers"
import AddSquad from "../components/squad/addSquad"
import SoccerField from "../components/soccerField/soccerField"
import useSquad from "../hooks/useSquad"

export default function Home() {
  const { players, searchPlayers } = usePlayers() 
  const { squad, addSquad, removeSquad } = useSquad() 
  
  return (<>
    <SearchPlayers onSubmit={searchPlayers}/>
    <ShowPlayers players={players} squad={squad} addSquad={addSquad}/>
    <SoccerField squad={squad} removeSquad={removeSquad}/>
    <AddSquad squad={squad}/>
  </>
  ) 
}
