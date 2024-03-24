import Player from "@/src/components/Player/Player"
import { TPlayer } from "@/src/components/Player/tyeps";

const arr: Array<TPlayer> = [{ 
  id: 7,
  name: 'Saka',
  team:'Ars',
  salary: 5,
  postion: 'fd'
},
{ 
  id: 8,
  name: 'Odi',
  team:'Ars',
  salary: 5,
  postion: 'fd'
}]
export default function Squad() {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-2xl">
      {arr.map((p) => { return <Player {...p} />})}
    </div>
    );
}

