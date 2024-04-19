import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BasicCard from './basic/basicCard';

export function SignUpInLanding() {
    return  <BasicCard title='🎈 Welcome back!' description='Enter your credentials and jump right back into the action.🎈'>
    <Link href="/signin">
      <p> 🔑 👉 👉 : Already part of the party 💃💃?&nbsp;&nbsp;<Button>Sign In</Button></p>
    </Link>
    <p>🎈Let&apos;s make memories, share laughs, and create unforgettable experiences together!🎈</p>
    <Link href="/signup">
      <p> 🚀 👉 👉 New to the party 💃💃? &nbsp;&nbsp;<Button>Sign Up</Button></p>
    </Link>
  </BasicCard>
}