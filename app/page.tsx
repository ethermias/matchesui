'use client'
import UserProfileItems from "@/components/bar/userProfileItems";
import AddSquad from "../components/squad/addSquad"
import Leaders from "@/components/leader/leaders"
import UserSignIn from "@/components/bar/userSignIn";
import UserSignUp from "@/components/bar/userSignUp";

const deployMode = process.env.DEPLOY_MODE || 'Ec2';

export default function Home() {
  function runningMode() {
    if (deployMode !== 'S3') {
      return <>
        <UserSignIn className="px-4" />
        <UserSignUp className="px-4" />
        {/* <AddSquad /> */}
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
