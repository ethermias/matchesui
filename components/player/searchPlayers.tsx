'use client'
import * as React from "react"
import { useState } from 'react'
import { roasters } from "./roasters";
import ShowTeamsDropDown from "./showTeamsDropDown";
import ShowPlayersDropDown from "./showPlayersDropDown";
import { TTeamName, SearchPlayersProps } from './types'

const SearchPlayers: React.FC<SearchPlayersProps> = ({ onSubmit }) => {
  const [teamShort, setTeamShort] = useState<TTeamName>('NFO');
  const players = roasters[teamShort]
  
  function handleSubmit(e: any) {
    setTeamShort(e)
  }
  function handleToSquad(e: any) {
    onSubmit({
      id: e.i,
      name: e.n,
      jersey: e.j,
      position: e.p,
      salary: e.s
    })
  }
  return (
    <div className="inline-flex gap-5">
      <ShowTeamsDropDown onSubmit={handleSubmit} />
      {teamShort && <ShowPlayersDropDown players={players} addToSquad={handleToSquad}/>}
    </div>
  );
};

export default SearchPlayers;