const sch = [
  "Newcastle vs West Ham",
  "Bournemouth vs Everton",
  "Chelsea vs Burnley",
  "Nott'm Forest vs Crystal Palace",
  "Sheffield Utd vs Fulham",
  "Spurs vs Luton",
  "Aston Villa vs Wolves",
  "Brentford vs Man Utd",
  "Liverpool vs Brighton",
  "Man City vs Arsenal"
]
export default function Schedule() {
  return (
    <div className="space-y-2">
    <h2 className="text-sm font-bold mb-0">30 ሳምንት</h2>
    <div className="grid grid-cols-2">
        { sch.map((p) => <div className="border p-0" key={p}>{p}</div>) }
    </div>
</div> 
  );
}
