'use client'
import AddSquad from "../components/squad/addSquad"
import Leaders from "@/components/leader/leaders"
import { Label } from "@/components/ui/label"

const deployMode = process.env.DEPLOY_MODE || 'S3';

export default function Home() {
  function runningMode() {
    if (deployMode !== 'S3') {
      return <>
        <AddSquad />
      </>
    } else {
      return <>
        <Leaders />
      </>
    }
  }

  return (
    <>
      {runningMode()}
    </>
  )
}
