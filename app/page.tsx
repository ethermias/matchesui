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
      <p> 🎈 Hey there! Ready to join the fun? Sign in or sign up below to unlock exclusive access to our exciting world of entertainment, games, and surprises!🎈</p>
      <Link href="/signin">
        <p> <a href="#" onClick={toggleForm}>🔑 Sign In: Already part of the party? Welcome back! Enter your credentials and jump right back into the action.</a></p>
      </Link>
      <Link href="/signup">
        <p>  <a href="#" onClick={toggleForm}>🚀 Sign Up: New to the party? Get ready for an adventure! Join us now to create your own account and start exploring all the amazing features we have to offer.</a> </p>
      </Link>
      <p>🎈Let&apos;s make memories, share laughs, and create unforgettable experiences together! Don&apos;t miss out on the fun - sign in or sign up today! 🎈</p>
    </>
  }

  return (
    <>
      {deployMode !== 'S3' && runningMode()}
      {deployMode === 'S3' && <Leaders />}
    </>
  )
}