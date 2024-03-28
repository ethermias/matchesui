// components/SearchPlayers.tsx
import { useState } from 'react';
import SearchPlayersServer, { playersAPI } from './searchPlayersServers';
import ToggleGroups from '../toggleGroups/toggleGroups';

interface SearchPlayersProps {
  onSubmit: (player: any) => void;
}

const arr = [
  "BOU",
  "ARS",
  "AVL",
  "BRE",
  "BHA",
  "BUR",
  "CHE",
  "CRY",
  "EVE",
  "FUL",
  "LIV",
  "LTN",
  "MNC",
  "MAN",
  "NEW",
  "NFO",
  "SHU",
  "TOT",
  "WHU",
  "WOL"
]

const SearchPlayers: React.FC<SearchPlayersProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("ARS");

  async function handleSubmit(e: any) {
    setInput(e)
    const data = await playersAPI(e);
    onSubmit(data)
  }

  return (
    <>
      <ToggleGroups onChange={handleSubmit} value={input} values={arr}/>
      <SearchPlayersServer input={input} />
    </>
  );
};

export default SearchPlayers;
