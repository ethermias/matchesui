"use client";
import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Player } from "@/types/player";
import { Button } from "../ui/button";

interface ShowPlayersProps {
  players: Player[];
  squad: Array<Player> 
  addSquad: Function
}
const ShowPlayers: React.FC<ShowPlayersProps> = ({ players, squad, addSquad }) => {
  
  function handleClick(e: any){
    const id = e.target.value
    const ss = players.find(obj => obj.id === id);
    addSquad(ss)
  }
  function checkSquad(player: Player): boolean {
    const playerExist = squad.find(obj => obj.id === player.id)
    if(!playerExist) {
      switch(player.position) {
        case "G":
          return squad.filter(obj => obj.position === "G").length > 0;
        case "D":
          return squad.filter(obj => obj.position === "D").length  > 3;
        case "M":
          return squad.filter(obj => obj.position === "M").length  > 3;
        case "F":
          return squad.filter(obj => obj.position === "F").length  > 2;
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
