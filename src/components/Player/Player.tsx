import { ReactNode } from "react";
import { TPlayer } from "./tyeps";

const Player: React.FC<TPlayer> = (player) => {
    return (
      <div className={`player ${player.postion}`}>
        {player.name}
      </div>
    );
  };
  
  export default Player;