'use client'

import { useState } from "react";
import { Player } from "@/src/types/player";


interface AddSquadProps {
    squads: Array<Player>
  }

export default function AddSquad({ squads }: AddSquadProps) {
    const [input, setInput] = useState("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const response = await fetch('YOUR_SERVICE_URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: { [input]: squads } }),
        });
  
        if (response.ok) {
          console.log('Request sent successfully');
          // Handle success as needed
        } else {
          console.error('Failed to send request:', response.statusText);
          // Handle error as needed
        }
      } catch (error) {
        console.error('Failed to send request:', error);
        // Handle error as needed
      }
      setInput("");
    }
  
    return (
      <form className="flex" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="pick your best 11, add your tag and save"
          className="rounded-s-md grow border border-gray-400 p-2"
          disabled = {squads.length !== 11}
        />
        <button
          type="submit"
          className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
          disabled = {input === ''}
        >
          Save
        </button>
      </form>
    );
  }
  