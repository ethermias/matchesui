import leaders from './tags_result_short.json'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import Moment from 'react-moment'
import { Label } from '../ui/label'


interface TLeader  {
    tag: string,
    score: number,
    submittedAt: string
}
const sortLeaders = (theLeaders: Array<TLeader>) => {
  if(theLeaders && theLeaders.length !== 0){
    return theLeaders.sort((a, b) => b.score - a.score) 
  }
 return []
}

const Leaders= () => {
const title = "Top leader for Matchday 31 📺"

const sortedLeaders = sortLeaders(leaders)
  return (<>
    <Label>📍 The next contest Matchday 33 📺 begin in Friday April 5, Score will be updated every 2 hr for Matchday 32🦮 </Label>
    
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableCaption>📍 Score breaking will be available on version v0.1.3 </TableCaption>  
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Tags</TableHead>
          <TableHead className="w-[200px]">Submitted</TableHead>
          <TableHead className="text-right">score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedLeaders.map((leader: TLeader ) => (
          <TableRow key={leader.tag}>
            <TableCell className="font-small">{leader.tag}</TableCell>
            <TableCell className="font-small"><Moment>{new Date(parseInt(leader.submittedAt))}</Moment></TableCell>
            <TableCell className="text-right">{leader.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default Leaders;
