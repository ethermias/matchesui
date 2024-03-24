'use client'
import { useEffect, useState } from "react";
import { dummyData } from "../data/players";
import { Player } from "../types/player";

export default function usePlayers() {
  const [players, setplayers] = useState(() => {
    const savedplayers: Player[] = JSON.parse(
      localStorage.getItem("players") || "[]"
    );
    return savedplayers.length > 0 ? savedplayers : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  function addPlayer(name: string) {
    setplayers((prevplayers) => [
      {
        id: 5,
        name: name,
        team: 'UNK',
        postion: 'md',
        salary: 0
      },
      ...prevplayers,
    ]);
  }

  return {
    players,
    addPlayer
  };
}
