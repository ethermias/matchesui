'use client'
import { useState } from "react";
import { Player } from "../types/player";
export default function usePlayers() {
  const [players, setPlayers] = useState<Array<Player>>([]);

  function searchPlayers(player: Array<Player>) {
    setPlayers(player);
  }

  return {
    players,
    searchPlayers
  };
}
