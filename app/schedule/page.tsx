const matchweek31 = [
  "Crystal Palace vs Man City",
"Aston Villa vs Brentford",
"Everton vs Burnley",
"Fulham vs Newcastle",
"Luton vs Bournemouth",
"Wolves vs West Ham",
"Brighton vs Arsenal",
"Man Utd vs Liverpool",
"Sheffield Utd vs Chelsea",
"Spurs vs Nott'm Forest"
]

export default function Schedule() {
  return (
    <div className="space-y-2">
    <h2 className="text-sm font-bold mb-0">33 ሳምንት</h2>
    <div className="grid grid-cols-2">
        { matchweek31.map((p) => <div className="border p-0" key={p}>{p}</div>) }
    </div>
</div> 
  );
}

const matchweek32 = [
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