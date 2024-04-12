'use client'
import React, { useState } from "react";
import Link from "next/link";
import Leaders from "@/components/leader/leaders"

const deployMode = process.env.DEPLOY_MODE || 'Ec2';


export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  function runningMode() {
    return <>
      <p> 🎈 Welcome back! Enter your credentials and jump right back into the action.🎈 </p>
      <Link href="/signin">
        <p> <a href="#" onClick={toggleForm}  className="button">🔑 👉 👉 Sign In: Already part of the party 💃💃? 👈</a></p>
      </Link>
      <p>🎈Let&apos;s make memories, share laughs, and create unforgettable experiences together!🎈</p>
      <Link href="/signup">
        <p> <a href="#" onClick={toggleForm}>🚀 👉 👉Sign Up: New to the party 💃💃? 👈 </a> </p>
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