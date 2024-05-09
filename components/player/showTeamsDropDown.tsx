'use client'
import * as React from "react"
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

interface ShowTeamsDropDownProps {
  onSubmit: (player: any) => void;
}

const ShowTeamsDropDown: React.FC<ShowTeamsDropDownProps> = ({ onSubmit }) => {

  function handleSubmit(e: any) {
    onSubmit(e)
  }

  return (
      <Select onValueChange={handleSubmit}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Select team" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Bottom</SelectLabel>
            {bottomTeamArr.map(team => <SelectItem value={team.value} key={team.value}>{team.label}</SelectItem>)}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Top</SelectLabel>
            {highTeamArr.map(team => <SelectItem value={team.value} key={team.value}>{team.label}</SelectItem>)}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Mid </SelectLabel>
            {midTeamArr.map(team => <SelectItem value={team.value} key={team.value}>{team.label}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
  );
};

export default ShowTeamsDropDown;
