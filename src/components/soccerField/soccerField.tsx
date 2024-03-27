import { Player } from "@/src/types/player"
import "./soccer.css"
import f_4_4_2 from './formation-4-4-2'
interface SoccerFieldProps {
  squads: Player[]
}

const SoccerField = ( { squads }) => {

  const g = squads.find((obj: Player) => obj.position == 'G')
  const d = squads.filter((obj: Player) => obj.position == 'D')
  const m = squads.filter((obj: Player) => obj.position == 'M')
  const f = squads.filter((obj: Player) => obj.position == 'F')
  
  f_4_4_2[0]["value"] = g?.name

  for (let i = 0; i < 4; i++) {
    f_4_4_2[i+1]["value"] = d && d.length > i ? d[i].name : ''
  }
  for (let i = 0; i < 4; i++) {
    f_4_4_2[i + 5]["value"] = m && m.length > i ? m[i].name : ''
  }
  for (let i = 0; i < 2; i++) {
    f_4_4_2[i + 9]["value"] = f && f.length > i ? f[i].name : ''
  }


  console.log( f_4_4_2[6]["value"])
  console.log( f_4_4_2[10]["value"])
  return (
    <div className="soccer-field">
      {f_4_4_2.map(item => (
        <div
          key={item.index}
          className="circle"
          style={{ gridColumn: item.col, gridRow: item.row }}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default SoccerField;