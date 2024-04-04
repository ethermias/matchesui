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

interface SearchPlayersProps {
  onSubmit: (player: any) => void;
}


const SearchPlayers: React.FC<SearchPlayersProps> = ({ onSubmit }) => {
  const [input, setInput] = useState();

  async function handleSubmit(e: any) {
    setInput(e)
    const data = await playersAPI(e);
    onSubmit(data)
  }

  return (
    <div>

        <Select onValueChange={handleSubmit}>
          <SelectTrigger className="w-[230px]">
            <SelectValue placeholder="Select player team" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Popular</SelectLabel>
              {highTeamArr.map(team => <SelectItem value={team.value}>{team.label}</SelectItem>)}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Mid table</SelectLabel>
              {midTeamArr.map(team => <SelectItem value={team.value}>{team.label}</SelectItem>)}
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Bottom</SelectLabel>
              {bottomTeamArr.map(team => <SelectItem value={team.value}>{team.label}</SelectItem>)}
            </SelectGroup>
          </SelectContent>
        </Select>

        {input && <SearchPlayersServer input={input} />}

    </div>
  );
};

export default SearchPlayers;
