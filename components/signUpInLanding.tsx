import { ReactNode } from 'react';
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BasicCard from './basic/BasicCard';

export function SignUpInLanding() {
    return  <BasicCard title='🎈 Welcome back!' description='Enter your credentials and jump right back into the action.🎈'>
    <Link href="/signin">
      <p> <a href="#" className="button">🔑 👉 👉 : Already part of the party 💃💃?&nbsp;&nbsp;<Button>Sign In</Button></a></p>
    </Link>
    <p>🎈Let&apos;s make memories, share laughs, and create unforgettable experiences together!🎈</p>
    <Link href="/signup">
      <p> <a href="#">🚀 👉 👉 New to the party 💃💃? &nbsp;&nbsp;<Button>Sign Up</Button></a></p>
    </Link>
  </BasicCard>
}