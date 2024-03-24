'use client'

import AddPlayer from "../components/player/AddPlayer";
import PlayerList from "../components/player/PlayerList";
import usePlayers from "../hooks/usePlayers";

export default function Home() {
  const {
    players,
    addPlayer
  } = usePlayers();
  return (
    <div>
      <AddPlayer onSubmit={addPlayer} />
      <PlayerList
        players={players}
      />
    </div>
  );
}
