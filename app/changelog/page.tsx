import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

type TVersion = {
  version: string,
  description: string,
  release: string
}
export default function Home() {
  const versions = [{
    "version": "v0.1.1",
    "description": "set up static site, adding dns ethermias.com",
    "release": "Mar 22, 2024"
  }, {
    "version": "v0.1.2",
    "description": "Chibo's first App !!, set up dynamic site, major upgrade ui, User able to submit 11 Players for Macthday 30 📺 weekend",
    "release": "Mar 29, 2024"
  }, {
    "version": "v0.1.3",
    "description": "soccer field updated. team selection dropdown, haeder and footer component",
    "release": "Apr 5, 2024"
  }, {
    "version": "v0.1.4",
    "description": "sign up and sign in pages, players salary 101 caculation added",
    "release": "Apr 12, 2024"
  }, {
    "version": "v0.1.5",
    "description": "ui pages updates, salary breakdown table added",
    "release": "Apr 19, 2024"
  }]
  return (
    <Table>
      <TableCaption>Score breaking will be available next Saturday on version v0.1.3</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-lef tw-[25px]">Version</TableHead>
          <TableHead className="w-[300px]">description</TableHead>
          <TableHead className="text-right w-[125px]">release date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {versions.map((version: TVersion) => (
          <TableRow key={version.version}>
            <TableCell className="font-small">{version.version}</TableCell>
            <TableCell className="font-small">{version.description}</TableCell>
            <TableCell className="text-right">{version.release}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
