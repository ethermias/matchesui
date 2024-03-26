'use client'
import { useEffect, useState } from "react";
import { dummyData } from "../data/players";
import { Player } from "../types/player";

export default function usePlayers() {
  const [players, setplayers] = useState([]);

  function searchPlayers(data: any) {
    setplayers(data);
  }

  return {
    players,
    searchPlayers
  };
}
