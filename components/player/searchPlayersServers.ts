// components/SearchPlayersServer.ts

interface SearchPlayersServerProps {
  input: string;
}

export async function playersAPI(input: string) {
  try {
    const URL = `http://127.0.0.1:8000`
    const res = await fetch(`${URL}/api/teams/${input}`);
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
