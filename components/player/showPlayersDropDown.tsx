"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Tplayers {
  i: number
  n: string
  p: string
  j: number
  s: number
}
interface ShowPlayersDropDownProps {
  players: Tplayers[];
  addToSquad: Function
}

const ShowPlayersDropDown: React.FC<ShowPlayersDropDownProps> = ({ players, addToSquad }) => {
  function handleSubmit(e: any) {
    addToSquad(e)
  }
  const keeper = players.filter(i => i.p == 'G')
  const defender = players.filter(i => i.p == 'D')
  const midfielder = players.filter(i => i.p == 'M')
  const forward = players.filter(i => i.p == 'F')
  return (
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
  );
};
export default ShowPlayersDropDown;
