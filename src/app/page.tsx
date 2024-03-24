'use client'

import AddPlayer from "../components/Player/AddPlayer";
import PlayerList from "../components/Player/PlayerList";
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
