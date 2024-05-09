"use client";
import * as React from "react";
import { roasters } from "./roasters";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ShowPlayersDropDownProps {
  teamName: "WHU" | "NEW" | "BHA" | "AVL" | "BRE" | "BOU" | "CRY" | "EVE" | "FUL" | "WOL" | "LTN" | "NFO" | "SHU" | "BUR" | "ARS" | "CHE" | "LIV" | "MNC"
  addToSquad: Function
}
type TPlayerDisplay = {
  i: number
  n: string
  p: string
  j: number
  s: number
}

const ShowPlayersDropDown: React.FC<ShowPlayersDropDownProps> = ({ teamName, addToSquad }) => {
  const playerDisplay = roasters[teamName]

  function handleSubmit(e: any) {
    addToSquad(e)
  }
  const keeper = playerDisplay.filter(i => i.p == 'G')
  const defender = playerDisplay.filter(i => i.p == 'D')
  const midfielder = playerDisplay.filter(i => i.p == 'M')
  const forward = playerDisplay.filter(i => i.p == 'F')
  return (
    <div>
      <Select onValueChange={handleSubmit}>
        <SelectTrigger className="w-[210px]">
          <SelectValue placeholder="Select player" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Keeper</SelectLabel>
            {keeper.map(player => <SelectItem value={player.i.toString()} key={player.i}>{player.n} {player.s}</SelectItem>)}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Defender</SelectLabel>
            {defender.map(player => <SelectItem value={player.i.toString()} key={player.i}>{player.n} {player.s}</SelectItem>)}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Midfielder</SelectLabel>
            {midfielder.map(player => <SelectItem value={player.i.toString()} key={player.i}>{player.n} {player.s}</SelectItem>)}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Forward</SelectLabel>
            {forward.map(player => <SelectItem value={player.i.toString()} key={player.i}>{player.n} {player.s}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default ShowPlayersDropDown;
