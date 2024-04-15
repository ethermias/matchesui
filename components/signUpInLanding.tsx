import { ReactNode } from 'react';
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SignUpInLanding() {
    return  <>
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