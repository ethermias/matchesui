'use client'
import { useState } from "react";
import { Player } from "@/types/player";

export default function useSquad() {
  const [squad, setSquad] = useState<Array<Player>>([]);

  function addSquad(player: Player) {
    const playerExist = squad.find((p)=> p.id == player.id)
    if(squad.length < 11 && playerExist == undefined){
      setSquad([...squad, player ]);
    }
  }

  function removeSquad(player: Player) {
    setSquad(squad.filter((p) => p.id !== player.id));
  }

  function removeAllSquad() {
    setSquad([]);
  }

  return {
    squad,
    addSquad,
    removeSquad,
    removeAllSquad
  };
}
