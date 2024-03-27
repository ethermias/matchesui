"use client";
import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Player } from "@/src/types/player";
import { Button } from "@/components/ui/button";

interface ShowPlayersProps {
  players: Player[];
  squads: Array<Player> 
  addSquads: Function
}
const ShowPlayers: React.FC<ShowPlayersProps> = ({ players, squads, addSquads }) => {
  
  function handleClick(e: any){
    const id = e.target.value
    const ss = players.find(obj => obj.id === id);
    addSquads(ss)
  }
  function checkSquad(player: Player): boolean {
    const playerExist = squads.find(obj => obj.id === player.id)
    if(!playerExist) {
      switch(player.position) {
        case "D":
          return squads.filter(obj => obj.position === "D").length  == 4;
        case "M":
          return squads.filter(obj => obj.position === "M").length  == 4;
        case "F":
          return squads.filter(obj => obj.position === "F").length  == 2;
        case "G":
          return squads.filter(obj => obj.position === "G").length == 1;
      }
    }
    return false
  }
  return (
    <div style={{ maxWidth: "300px", paddingLeft: '40px' }}>
      <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
      >
        <CarouselContent>
          {players.map((player, index) => (
            <CarouselItem key={index}>
                <Card >
                    <CardHeader>
                        <CardTitle>
                          <Button variant="outline" size='sm' value={player.id} onClick={handleClick} disabled={checkSquad(player)}>
                            {player.name}{player.position} (+500)
                            </Button>
                        </CardTitle>
                        <CardDescription>{player.position} {player.jersey} </CardDescription>
                        <CardDescription></CardDescription>
                    </CardHeader>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default ShowPlayers;
