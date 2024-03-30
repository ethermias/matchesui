
'use client'
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
    },{
        "version": "v0.1.2",
        "description": "Chibo's first App !!, set up dynamic site, major upgrade ui, User able to submit 11 Players for Macthday 30 📺 weekend",
        "release": "Mar 29, 2024"
    }]
    return (
        <Table>
        <TableCaption>Score breaking will be available next Saturday on version v0.1.3</TableCaption>     
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Version</TableHead>
            <TableHead className="w-[200px]">description</TableHead>
            <TableHead className="text-right">release date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {versions.map((version: TVersion ) => (
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
