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
import { useAppContext } from "../app-provider";
import { URL, matchweek } from "@/constants";
import BasicCard from "../basic/basicCard";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { CardContent } from "../ui/card";
import { Content } from "../basic/content";

export default function AddSquad() {
  const { toast } = useToast()
  const { players, searchPlayers } = usePlayers()
  const { squad, addSquad, removeSquad, removeAllSquad } = useSquad()
  const [input, setInput] = useState("");
  const { userName, email } = useAppContext()

  const fullPosition = (pos: string) => {
    switch (pos) {
      case 'G':
        return "Keeper";
      case 'D':
        return "Defender";
      case 'M':
        return "Midfielder";
      case 'F':
        return "Forward";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedAt = Date.now()
    try {
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

  const sq = squad.map(i => i.salary).reduce((a, c) => a + c, 0)
  return (<>
    <BasicCard
      title={`You have used $${sq} out of $55,000`}
      description={
        <>
          <p>📍 Loged in as {userName} - {email}</p>
        </>
      }
    >
      <BasicCard
        description='📍 The sum of the total allocated salary cap for 11 players should be no more than $55,000. Please select best 11'
        title={
          <div className="flex">
            <div className="w-1/2">
              <SearchPlayers onSubmit={searchPlayers} />
            </div>
          </div>
        }>
        <ShowPlayers players={players} squad={squad} addSquad={addSquad} />
      </BasicCard>
      <Content>
        <CardContent>
          {
            <Table>
              <TableCaption>Total ${sq}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lef tw-[300px]">Name</TableHead>
                  <TableHead className="w-[25px]">Postion</TableHead>
                  <TableHead className="text-right w-[125px]">Salary</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {squad.map((player: Player) => (
                  <TableRow key={player.id}>
                    <TableCell className="font-small">{player.displayName}</TableCell>
                    <TableCell className="font-small">{fullPosition(player.position)}</TableCell>
                    <TableCell className="text-right">${player.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          }
        </CardContent>
      </Content>
      <SoccerField squad={squad} removeSquad={removeSquad} />

      <BasicCard>
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
      </BasicCard>

    </BasicCard>
  </>
  );
}