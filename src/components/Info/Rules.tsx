export default function Rules() {

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-0">
        <div>
          <h1 className="text-sm font-bold mb-1">The Player</h1>
          <div className="border p-0">+7 score a goal</div>
          <div className="border p-0">+3 assist a goal</div>
          <div className="border p-0">+7 saved a penalty</div>
          <div className="border p-0">-3 missed a penalty</div>
          <div className="border p-0">-1 GK conceded a goal</div>
          <div className="p-0">-2 red card</div>
        </div>
        <div>
          <h1 className="text-sm font-bold mb-1">Player's Team</h1>
          <div className="border p-0">+2 win the game</div>
          <div className="border p-0">-1 lost the game</div>
          <div className="border p-0">+1 score a goal</div>
          <div className="border p-0">-1 conceded a goal</div>
          <div className="border p-0">-1 red card</div>
        </div>
      </div>
      <h3 className="text-xs mb-0">*Formation 4-4-2 (The rule will be different for formation)</h3>
    </div>
  );
}
