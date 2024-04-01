'use client'

import { useState } from "react";
import { Player } from "@/types/player";
import { useToast } from "@/components/ui/use-toast"


interface AddSquadProps {
    squad: Array<Player>
    removeAllSquad: Function
  }

export default function AddSquad({ squad, removeAllSquad }: AddSquadProps) {
    const [input, setInput] = useState("");
    const { toast } = useToast()
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submittedAt = Date.now()
      try {
        const URL = `http://127.0.0.1:8000`
        const response = await fetch(`${URL}/api/lineup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ tag: input, squad: squad.map((s) => parseInt(s.id) ), submittedAt: submittedAt }),
        });
  
        if (response.ok) {
          console.log('Request sent successfully');
          removeAllSquad()
          toast({
            title: `${input} sent successfully`,
            description: `${submittedAt}`,
          })
          
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
          disabled = {squad.length !== 11}
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
  