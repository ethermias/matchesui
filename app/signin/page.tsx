'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/components/app-provider";

function UserSignIn() {
    const className = "px-4"
    const router = useRouter();
    const [userInput, setUserInput] = useState('');
    const { setUserName, setEmail } = useAppContext()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const bodyData = userInput.includes('@') ? { email: userInput, submittedAt: Date.now() } : { userName: userInput, submittedAt: Date.now() }
        try {
            const URL = `http://127.0.0.1:8000`
            const response = await fetch(`${URL}/api/user/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if(data.isValid){
                    setUserName(data.user.userName)
                    setEmail(data.user.email)
                }
                router.push('/squad');
                console.log('Data successfully posted to the server');
            } else {
                console.error('Failed to post data to the server');
            }
        } catch (error) {
            console.error('Error while posting data to the server:', error);
        }
    };

    return (<>
        <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>

            <Label htmlFor="userInput">User Name or Email</Label>
            <Input
                id="userInput"
                value={userInput}
                onChange={(e) => {
                    setUserInput(e.target.value)
                }}
                required
            />

            <Button type="submit" disabled={userInput.length < 4}>sign in </Button>
        </form>
        <Link href="/signup">
            <p>  <a href="#"> Don&apos;t have an account? Sign Up</a> </p>
        </Link>
    </>
    );
}

export default UserSignIn;
