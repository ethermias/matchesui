'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/ShowPlayers"

export default function Home() {
  const {
    players,
    searchPlayers
  } = usePlayers() 
  return (<>
    <SearchPlayers onSubmit={searchPlayers}/>
    <ShowPlayers />
    <div>
        {players.length !== 0 && players.map((p) => <div key={p.id}> {p.name} </div>)}
    </div>
  </>
  ) 
}
