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

interface ShowPlayersProps {
  players: Player[];
}
const ShowPlayers: React.FC<ShowPlayersProps> = ({ players }) => {
  console.log(players);
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
                        <CardTitle>{player.jersey} {player.name}</CardTitle>
                        <CardDescription>Arsenal $500</CardDescription>
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
