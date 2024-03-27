'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/showPlayers"
import useSquads from "../hooks/useSquads"
import AddSquad from "../components/squad/addSquad"
import SoccerField from "../components/soccerField/soccerField"

export default function Home() {
  const { players, searchPlayers } = usePlayers() 
  const { squads, addSquads } = useSquads() 
  
  return (<>
    <SearchPlayers onSubmit={searchPlayers}/>
    <ShowPlayers players={players} squads={squads} addSquads={addSquads}/>
    <SoccerField squads={squads}/>
    <AddSquad squads={squads}/>
  </>
  ) 
}
