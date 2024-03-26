'use client'
import usePlayers from "../hooks/usePlayers" 
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/ShowPlayers"
import { useState } from "react";
import { Player } from "../types/player";

export default function Home() {
  // const [players, setplayers] = useState<Array<Player>>([]);
  const {
    players,
    searchPlayers
  } = usePlayers() 
  return (<>
    <SearchPlayers onSubmit={searchPlayers}/>
    <ShowPlayers players={players}/>
    {/* <div>
        {players.length !== 0 && players.map((p) => <div key={p.id}> {p.name} </div>)}
    </div> */}
  </>
  ) 
}
