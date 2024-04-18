import React from "react";
import Leaders from "@/components/leader/leaders"
import { deployMode } from "@/constants";
import { SignUpInLanding } from "@/components/signUpInLanding";

export default function Home() {
  return (
    <>
      {deployMode !== 'S3' ? <SignUpInLanding/> : <Leaders />}
    </>
  )
}