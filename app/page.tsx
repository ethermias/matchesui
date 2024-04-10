'use client'
import AddSquad from "../components/squad/addSquad"
import Leaders from "@/components/leader/leaders"

const deployMode = process.env.DEPLOY_MODE || 'Ec2';

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
