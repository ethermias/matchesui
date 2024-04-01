const sch = [
  "Nottm Forest vs Fulham",
  "Newcastle vs Everton",
  "Burnley vs Wolves",
  "Bournemouth vs Crystal Palace",
  "West Ham vs Tottenham",
  "Arsenal vs Luton",
  "Brentford vs Brighton",
  "Man City vs Aston Villa",
  "Liverpool vs Sheff Utd",
  "Chelsea vs Man Utd"
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
