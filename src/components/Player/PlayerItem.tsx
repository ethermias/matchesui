import { Player } from "../../types/player";

const PlayerItem: React.FC<Player> = (player) => {
    return (
      <div>
        {player.id} - {player.name}
      </div>
    );
  };
  
export default PlayerItem;