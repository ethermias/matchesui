'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { URL } from "@/constants";

const USERNAME_REGEX = /^(?!.*@)[a-zA-Z][a-zA-Z\d]*[a-zA-Z][a-zA-Z\d]*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function UserSignUp() {
    const className = "px-4"
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [userError, setUserError] = useState(false);
    const [isUserNameValid, setIsUserNameValid] = useState(true);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;

        // Check userName
        if (!USERNAME_REGEX.test(userName)) {
            setIsUserNameValid(false);
            valid = false;
        }

        // Check email
        if (!EMAIL_REGEX.test(email)) {
            setIsEmailValid(false);
            valid = false;
        }

        // If both userName and email are valid, post the data to the server
        if (valid) {
            //localStorage.setItem("localtags", userName);
            try {
                const response = await fetch(`${URL}/api/user/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        userName: userName,
                        submittedAt: Date.now()
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    if (data.isValid) {
                        setUserName(data.user.userName)
                        setEmail(data.user.email)
                        router.push('/squad');
                    } else {
                        setUserError(true)
                    }

                    console.log('Data successfully posted to the server');
                } else {
                    console.error('Failed to post data to the server');
                }
            } catch (error) {
                console.error('Error while posting data to the server:', error);
            }
        }
    };

    const isSubmitDisabled = !isEmailValid || !isUserNameValid;

    return (
        <>
            <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
                <p>Please add yourself to ችቦ family</p>
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setIsEmailValid(EMAIL_REGEX.test(e.target.value))
                    }}
                    required
                />
                <Label htmlFor="userName">UserName</Label>
                <Input
                    id="userName"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                        setIsUserNameValid(USERNAME_REGEX.test(e.target.value))
                    }}
                    required
                />
                {!isEmailValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
                {!isUserNameValid && <><p style={{ color: 'red' }}>
                    Please enter a valid userName with the following criteria:</p>
                    <ul>
                        <li>* The username must contain at least two letters.</li>
                        <li>* The first letter of the username must be alphabetical.</li>
                        <li>* The username must not contain the @ symbol.</li>
                    </ul>
                </>
                }
                <Button type="submit" disabled={isSubmitDisabled}>Subscribe</Button>
            </form>
            {userError && <p style={{ color: 'red' }}> User Name or Email not found </p>}
            <Link href="/signin">
                <p> <a href="#">Already have an account? Sign In</a></p>
            </Link>

        </>
    );
}

export default UserSignUp;
