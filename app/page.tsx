'use client'
import React, { useState } from "react";
import Link from "next/link";
import AddSquad from "../components/squad/addSquad"
import Leaders from "@/components/leader/leaders"

const deployMode = process.env.DEPLOY_MODE || 'Ec2';


export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  function runningMode() {
    return <>

        <Link href="/signin">
          <p> <a href="#" onClick={toggleForm}>Already have an account? Sign In</a></p>
        </Link>
        Chipo
        <Link href="/signup">
          <p>  <a href="#" onClick={toggleForm}> Don&apos;t have an account? Sign Up</a> </p>
        </Link>
    </>
  }

  return (
    <>
      {deployMode !== 'S3' && runningMode()}
      {deployMode === 'S3' && <Leaders />}
    </>
  )
}
