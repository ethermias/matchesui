import React from "react";
import Link from "next/link";
import Leaders from "@/components/leader/leaders"
import { Button } from "@/components/ui/button";
import { deployMode } from "@/constants";

export default function Home() {
  function runningMode() {
    if( deployMode !== 'S3') {
    return <>
      <p> 🎈 Welcome back! Enter your credentials and jump right back into the action.🎈 </p>
      <Link href="/signin">
        <p> <a href="#" className="button">🔑 👉 👉 : Already part of the party 💃💃?<Button>Sign In</Button> 👈</a></p>
      </Link>
      <p>🎈Let&apos;s make memories, share laughs, and create unforgettable experiences together!🎈</p>
      <Link href="/signup">
        <p> <a href="#">🚀 👉 👉 New to the party 💃💃? <Button>Sign Up</Button> 👈</a></p>
      </Link>
    </>
    }   
    return <Leaders />
  }

  return (
    <>
      {runningMode()}
    </>
  )
}