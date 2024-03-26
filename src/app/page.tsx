'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"

export default function Home() {
  const {
    players,
    searchPlayers
  } = usePlayers() 
  console.log(players)
  return (<>
    <SearchPlayers onSubmit={searchPlayers}/>
       {players.length !== 0 && players.map((p) => <div key={p.id}> {p.name} </div>)}
    
      <div >
   add grop here 
    </div>
  </>
  ) 
}
