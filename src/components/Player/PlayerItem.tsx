import { Player } from "../../types/player";

const PlayerItem: React.FC<Player> = (player) => {
    return (
      <div className={`player ${player.postion}`}>
        {player.id} - {player.name} - {player.team} - {player.salary}
      </div>
    );
  };
  
export default PlayerItem;