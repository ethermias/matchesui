import { Player } from "@/src/types/player"
import "./soccer.css"
import fourFourTwo from './fourFourTwo'
import { Label } from "@/components/ui/label";

interface SoccerFieldProps {
  squad: Player[]
  removeSquad: Function
}

const SoccerField: React.FC<SoccerFieldProps> = ( { squad, removeSquad }) => {

  const g = squad.find((obj: Player) => obj.position == 'G')
  const d = squad.filter((obj: Player) => obj.position == 'D')
  const m = squad.filter((obj: Player) => obj.position == 'M')
  const f = squad.filter((obj: Player) => obj.position == 'F')
  
  function handleRemove(str: string){
    const player = squad.find((obj: Player) => obj.name == str)
    removeSquad(player)
  }

  function removeSpace(str: string) {
    return str && str.charAt(1) === ' ' ?  str.substring(2) : str
  }
  
  fourFourTwo[0]["value"] = g ? g.name : ''

  for (let i = 0; i < 4; i++) {
    fourFourTwo[i+1]["value"] = d && d.length > i ? d[i].name : ''
  }
  for (let i = 0; i < 4; i++) {
    fourFourTwo[i + 5]["value"] = m && m.length > i ? m[i].name : ''
  }
  for (let i = 0; i < 2; i++) {
    fourFourTwo[i + 9]["value"] = f && f.length > i ? f[i].name : ''
  }
  
  return (
    <div className="soccer-field">
      {fourFourTwo.map(item => (
        <div
          key={item.index}
          style={{ gridColumn: item.col, gridRow: item.row }}
        >
          {item.value && <Label>{removeSpace(item.value)}<span onClick={() => handleRemove(item.value)}> X</span></Label>}
        </div>
      ))}
    </div>
  );
};

export default SoccerField;