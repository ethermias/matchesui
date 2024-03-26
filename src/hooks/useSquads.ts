'use client'
import { useState } from "react";
import { Player } from "../types/player";

export default function useSquads() {
  const [squads, setSquads] = useState<Array<Player>>([]);

  function addSquads(player: Player) {
    setSquads([...squads, player ]);
  }

  return {
    squads,
    addSquads
  };
}
