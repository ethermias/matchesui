'use client'
import usePlayers from "@/src/hooks/usePlayers";

const ShowPlayers: React.FC = () => {
    const {
        players
      } = usePlayers() 
    return (
      <div>
        {players.length !== 0 && players.map((p) => <div key={p.id}> {p.name} </div>)}
      </div>
    );
  };
  
export default ShowPlayers;