'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/ShowPlayers"
import useSquads from "../hooks/useSquads"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { players, searchPlayers } = usePlayers() 
  const { squads, addSquads } = useSquads() 

  function submitPlayers(){
    console.log(squads)
  }
  return (<>
    <SearchPlayers onSubmit={searchPlayers}/>
    <ShowPlayers players={players} squads={squads} addSquads={addSquads}/>

    <div>
        {squads.length !== 0 && squads.map((p) => <div key={p.id}> {p.name} </div>)}
    </div> 
    <Button  onClick={submitPlayers}>Like</Button>
  </>
  ) 
}
