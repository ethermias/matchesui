// components/SquadsServer.ts
import { URL } from '../../constants';
import { Player } from '../../types/player';

interface SquadsServerProps {
  payload: Array<Player>
  tag: string
}

export async function playersAPI() {
  try {
    const res = await fetch(`${URL}/api/squads`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const SquadsServer: React.FC<SquadsServerProps> = ({ payload, tag }) => {
  // This component doesn't need to render anything, it just handles the server-side logic
  return null;
};

export default SquadsServer;
