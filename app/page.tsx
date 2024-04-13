'use client'
import React, { useState } from "react";
import Link from "next/link";
import Leaders from "@/components/leader/leaders"
import { Button } from "@/components/ui/button";
import { deployMode } from "@/constants";

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  function runningMode() {
    return <>
      <p> 🎈 Welcome back! Enter your credentials and jump right back into the action.🎈 </p>
      <Link href="/signin">
        <p> <a href="#" onClick={toggleForm}  className="button">🔑 👉 👉 : Already part of the party 💃💃?<Button>Sign In</Button> 👈</a></p>
      </Link>
      <p>🎈Let&apos;s make memories, share laughs, and create unforgettable experiences together!🎈</p>
      <Link href="/signup">
        <p> <a href="#" onClick={toggleForm}>🚀 👉 👉 New to the party 💃💃? <Button>Sign Up</Button> 👈</a></p>
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