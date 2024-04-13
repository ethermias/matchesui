import leaders31 from './tags.json'
import { matchweek } from "@/constants";
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
const title = `Top leader for Matchday ${matchweek} 📺`

const sortedLeaders31 = sortLeaders(leaders31)
  return (<>
     <Label>📍 Winner Matchday ${matchweek} 📺 </Label>
    
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
        {sortedLeaders31.map((leader: TLeader ) => (
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
