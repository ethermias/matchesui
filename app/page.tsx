import React from "react";
import Leaders from "@/components/leader/leaders"
import { deployMode } from "@/constants";
import { SignUpInLanding } from "@/components/signUpInLanding";
import Rules from "@/components/static/rules";
import Schedule from "@/components/static/schedule";
import Winner from "@/components/static/winner";

export default function Home() {
  return (
    <>
      
      {deployMode !== 'S3' ? <SignUpInLanding/> : <Leaders />}
      <Winner/>
      <Schedule/>
      <Rules/>
    </>
  )
}