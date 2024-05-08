// components/SearchPlayersServer.ts

import { URL } from "@/constants";

interface SearchPlayersServerProps {
  input: string;
}

export async function playersAPI(input: string) {
  try {
    const res = await fetch(`/roasters/${input}.json`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const SearchPlayersServer: React.FC<SearchPlayersServerProps> = ({ input }) => {
  // This component doesn't need to render anything, it just handles the server-side logic
  return null;
};

export default SearchPlayersServer;
