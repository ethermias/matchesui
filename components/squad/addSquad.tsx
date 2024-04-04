'use client'

import { useState } from "react";
import { Player } from "@/types/player";
import { useToast } from "@/components/ui/use-toast"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SoccerField from "../soccerField/soccerField";
import useSquad from "@/hooks/useSquad";
import { Label } from "../ui/label";
import SearchPlayers from "../player/searchPlayers";
import ShowPlayers from "../player/showPlayers";
import usePlayers from "@/hooks/usePlayers";

export default function AddSquad() {
  const { toast } = useToast()
  const { players, searchPlayers } = usePlayers()
  const { squad, addSquad, removeSquad, removeAllSquad } = useSquad()
  const [ input, setInput ] = useState("");
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedAt = Date.now()
    try {
      const URL = `http://127.0.0.1:8000`
      const response = await fetch(`${URL}/api/lineup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tag: input, squad: squad.map((s) => parseInt(s.id)), submittedAt: submittedAt }),
      });

      if (response.ok) {
        console.log('Request sent successfully');
        removeAllSquad()
        toast({
          title: `${input} sent successfully`,
          description: `${submittedAt}`,
        })

      } else {
        console.error('Failed to send request:', response.statusText);
        // Handle error as needed
      }
    } catch (error) {
      console.error('Failed to send request:', error);
      // Handle error as needed
    }
    setInput("");
  }


  return (<>
    <Label>📍 Select your best 11 for MatchDay 32</Label>
    <div className="flex">
      <div className="w-1/2">
        <SearchPlayers onSubmit={searchPlayers} />
      </div>
      <div className="w-1/2">
        <ShowPlayers players={players} squad={squad} addSquad={addSquad} />
      </div>
    </div>
    <SoccerField squad={squad} removeSquad={removeSquad} />
    <form className="flex" onSubmit={handleSubmit}>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="pick your best 11, add your tag and save"
        className="rounded-s-md grow border border-gray-400 p-2"
        disabled={squad.length !== 11}
      />
      <Button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
        disabled={input === ''}
      >
        Save
      </Button>
    </form>
  </>
  );
}