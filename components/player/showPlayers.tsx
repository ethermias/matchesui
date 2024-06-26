"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from "../ui/carousel";
import { Player } from "@/types/player";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

interface ShowPlayersProps {
  players: Player[];
  squad: Array<Player>
  addSquad: Function
}

const fullPosition = (pos: string) => {
  switch(pos) {
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
const ShowPlayers: React.FC<ShowPlayersProps> = ({ players, squad, addSquad }) => {
  
  function handleClick(e: any) {
    const id = e.target.value
    const selectedPlayer = players.find(obj => obj.id === id);
    if(selectedPlayer){
      const playerExist = squad.find((p)=> p.id == selectedPlayer.id)
      const sq = squad.map(i => i.salary).reduce((a, c) => a + c, 0) + selectedPlayer.salary
      if(sq < 55000){
        if(squad.length < 11 && playerExist == undefined) {
          addSquad(selectedPlayer)
        }
      } else{
        toast({
          title: "You have salary cap limit of 55000",
          description: "Remove player with high salary and try again",
        })
      }

    }
  }

  function checkSquad(player: Player): boolean {
    const playerExist = squad.find(obj => obj.id === player.id)
    if (!playerExist) {
      switch (player.position) {
        case "G":
          return squad.filter(obj => obj.position === "G").length > 0;
        case "D":
          return squad.filter(obj => obj.position === "D").length > 3;
        case "M":
          return squad.filter(obj => obj.position === "M").length > 3;
        case "F":
          return squad.filter(obj => obj.position === "F").length > 1;
      }
    }
    return false
  }
  return (
    <div style={{ maxWidth: "200px" }}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {players.map((player, index) => (
            <CarouselItem key={index}>
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {player.jersey} {player.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {fullPosition(player.position)} 
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Player Salary: ${player.salary}
                  </p>
                  <Button variant="outline" size='sm' value={player.id} onClick={handleClick} disabled={checkSquad(player)}>
                    Add To your Squad
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default ShowPlayers;
