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


interface TLeader  {
    username: string,
    tags: string,
    formation: string,
    submited: string,
    score: number
}
// const URL = 'http://127.0.0.1:8000'
// export async function getData() {
//     const res = await fetch(`${URL}/api/leaders`);

//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
// }

export default async function LeaderServers() {
 // const { leaders, matchday, total } = await getData()
 const title = "Top leader for Matchday 30 📺"

 const y = [ 'jermi', 'Abc', 'Abx', 'smelly cat', 'the office', 'My best eleven ... All Arsenal', 'Best 11', 'Abel xI', 'koyen kayen' ]
 const leaders =  y.map((p) => ({ 'username': '', 'tags': p, 'formation': '4-4-2', 'submited': 'Mar 29 2024', 'score': 0  }) )
  return (

    <Table>
      <TableCaption>{title}</TableCaption>
      <TableCaption>📍 Score breaking will be available on version v0.1.3 </TableCaption>  
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">User</TableHead>
          <TableHead>Formation</TableHead> */}
          <TableHead className="text-left">Tags</TableHead>
          <TableHead className="w-[200px]">Submitted</TableHead>
          <TableHead className="text-right">score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaders.map((leader: TLeader ) => (
          <TableRow key={leader.tags}>
            {/* <TableCell className="font-small">{leader.username}</TableCell>
            <TableCell>{leader.formation}</TableCell> */}
            <TableCell className="font-small">{leader.tags}</TableCell>
            <TableCell className="font-small">{leader.submited}</TableCell>
            <TableCell className="text-right">{leader.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
