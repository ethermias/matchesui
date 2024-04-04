'use client'
import usePlayers from "../hooks/usePlayers"
import SearchPlayers from "../components/player/searchPlayers"
import ShowPlayers from "../components/player/showPlayers"
import AddSquad from "../components/squad/addSquad"
import SoccerField from "../components/soccerField/soccerField"
import useSquad from "@/hooks/useSquad"
import Leaders from "@/components/leader/leaders"
import { Label } from "@/components/ui/label"

const deployMode = process.env.DEPLOY_MODE || 'S2SS3';

export default function Home() {
  const { players, searchPlayers } = usePlayers()
  const { squad, addSquad, removeSquad, removeAllSquad } = useSquad()

  function runningMode() {
    if (deployMode !== 'S3') {
      return <>
        <div className="flex">
          <div className="w-1/2">
            <SearchPlayers onSubmit={searchPlayers} />
          </div>
          <div className="w-1/2">
            <ShowPlayers players={players} squad={squad} addSquad={addSquad} />
          </div>
        </div>
        <SoccerField squad={squad} removeSquad={removeSquad} />
        <AddSquad squad={squad} removeAllSquad={removeAllSquad} />
      </>
    } else {
      return <>
        <Label>📍 The next contest Matchday 32 📺 begin in Friday April 5, Score will be updated every 2 hr for Matchday 31🦮 </Label>
        <Leaders />
      </>
    }
  }

  return (
    <>
      {runningMode()}
    </>
  )
}
