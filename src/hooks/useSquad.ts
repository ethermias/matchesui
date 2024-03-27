'use client'
import { useState } from "react";
import { Player } from "../types/player";

export default function useSquad() {
  const [squad, setSquad] = useState<Array<Player>>([]);

  function addSquad(player: Player) {
    setSquad([...squad, player ]);
  }

  function removeSquad(player: Player) {
    setSquad(squad.filter((p) => p.id !== player.id));
  }

  return {
    squad,
    addSquad,
    removeSquad,
  };
}
