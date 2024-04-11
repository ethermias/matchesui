'use client'
import React, { useState } from "react";
import Link from "next/link";
import AddSquad from "../components/squad/addSquad"
import Leaders from "@/components/leader/leaders"
import UserSignIn from "@/app/signin/page";
import UserSignUp from "@/app/signup/page";

const deployMode = process.env.DEPLOY_MODE || 'Ec2';


export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);
  const signed = localStorage.getItem("localtags33") || undefined
  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  function runningMode() {
    if (signed) {
      return <AddSquad />
    } else {
      return <>
        {showSignIn ? (
          <Link href="/signup">
            <p>  <a href="#" onClick={toggleForm}> Don't have an account? Sign Up</a> </p>
            </Link>
        ) : (
          <Link href="/signup">
           <p> <a href="#" onClick={toggleForm}>Already have an account? Sign In</a></p>
          </Link>
        )}
      </>
    }
  }

  return (
    <>
      {deployMode !== 'S3' && runningMode()}
      {deployMode === 'S3' && <Leaders />}
    </>
  )
}
