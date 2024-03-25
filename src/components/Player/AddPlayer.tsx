'use client'
import { useState } from 'react';
import { URL } from '../../constants'

interface AddPlayerProps {
  onSubmit: (title: string) => void;
}

export default function AddPlayer({ onSubmit }: AddPlayerProps) {
  const [input, setInput] = useState("");
  const playersAPI = async () => {
    try {
      const res = await fetch(`${URL}/api/teams/${input}`);
      const data = await res.json();
      console.log(data)
    } catch(err){
      console.log(err)
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    playersAPI()
    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="search a player"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
       +
      </button>
    </form>
  );
}
