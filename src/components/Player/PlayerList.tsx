import { Player } from "../../types/player";
import PlayerItem from "./PlayerItem";

interface PlayersProps {
  players: Player[];
}

export default function PlayerList({
  players,
}: PlayersProps) {
  return (
    <>
      <div className="space-y-2">
        {players.map((player) => (
          <PlayerItem {...player} key={player.id}/>
        ))}
      </div>
    </>
  );
}
