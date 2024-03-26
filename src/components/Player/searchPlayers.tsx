// components/SearchPlayers.tsx
import { useState } from 'react';
import SearchPlayersServer, { playersAPI } from './searchPlayersServers';
import ToggleGroups from '../toggleGroups/toggleGroups';

interface SearchPlayersProps {
  onSubmit: (player: any) => void;
}

const SearchPlayers: React.FC<SearchPlayersProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("ARS");

  async function handleSubmit(e: any) {
    setInput(e)
    const data = await playersAPI(e);

    onSubmit(data)
    console.log(data)
  }
  const arr = ["ARS", "MAN", "FUL", "LIV"]
  return (
    <>
      <ToggleGroups onChange={handleSubmit} value={input} values={arr}/>
      <SearchPlayersServer input={input} />
      
    </>
  );
};

export default SearchPlayers;
