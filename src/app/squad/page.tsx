import PlayerItem from "@/src/components/Player/PlayerItem";
import { dummyData } from "@/src/data/players";

export default function Squad() {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto max-w-2xl">
      {dummyData.map((p) => { return <PlayerItem {...p} />})}
    </div>
    );
}

