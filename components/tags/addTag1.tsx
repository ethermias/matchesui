'use client'

import { useState } from "react";

interface AddTagFormProps {
  onSubmit: (title: string) => void;
  disabled: boolean
}

export default function AddTag({ onSubmit, disabled = false }: AddTagFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input + " 🤷‍♂️");
    setInput("");
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add your tag?"
        className="rounded-s-md grow border border-gray-400 p-2"
        disabled = {disabled}
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
        disabled = {disabled}
      >
        Add
      </button>
    </form>
  );
}
