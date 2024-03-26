'use client'
import { useState } from "react";
import { Player } from "../types/player";
export default function usePlayers() {
  const [players, setplayers] = useState<Array<Player>>([]);

  function searchPlayers(player: Array<Player>) {
    setplayers(player);
  }

  return {
    players,
    searchPlayers
  };
}
