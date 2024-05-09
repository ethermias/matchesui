'use client'
import * as React from "react"
import { useState } from 'react';
import SearchPlayersServer, { playersAPI } from './searchPlayersServers';
import ToggleGroups from '../toggleGroups/toggleGroups';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { highTeamArr, midTeamArr, bottomTeamArr } from './teamsLable'
import ShowPlayersDropDown from "./showPlayersDropDown";
import ShowTeamsDropDown from "./showTeamsDropDown";

interface SearchPlayersProps {
  onSubmit: (player: any) => void;
}
type TTeamName= "WHU" | "NEW" | "BHA" | "AVL" | "BRE" | "BOU" | "CRY" | "EVE" | "FUL" | "WOL" | "LTN" | "NFO" | "SHU" | "BUR" | "ARS" | "CHE" | "LIV" | "MNC"
 
const SearchPlayers: React.FC<SearchPlayersProps> = ({ onSubmit }) => {
  const [teamShort, setTeamShort] = useState<TTeamName>('LTN');

  async function handleSubmit(e: any) {
    setTeamShort(e)
  }

  return (
    <div className="inline-flex gap-5">
      <ShowTeamsDropDown onSubmit={handleSubmit} />
      <ShowPlayersDropDown teamName={teamShort} addToSquad={(e) => console.log(e)}/>
    </div>
  );
};

export default SearchPlayers;
