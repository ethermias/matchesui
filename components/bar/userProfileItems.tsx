import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z\d]*[a-zA-Z][a-zA-Z\d]*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function UserProfileItems({ className }: React.ComponentProps<"form">) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid = true;

        // Check username
        if (!USERNAME_REGEX.test(username)) {
            setIsUsernameValid(false);
            valid = false;
        }

        // Check email
        if (!EMAIL_REGEX.test(email)) {
            setIsEmailValid(false);
            valid = false;
        }

        // If both username and email are valid, post the data to the server
        if (valid) {
            try {
                const response = await fetch('YOUR_SERVER_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        username: username
                    })
                });
                if (response.ok) {
                    console.log('Data successfully posted to the server');
                } else {
                    console.error('Failed to post data to the server');
                }
            } catch (error) {
                console.error('Error while posting data to the server:', error);
            }
        }
    };

    const isSubmitDisabled = !isEmailValid || !isUsernameValid;

    return (
        <>
            <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
                <p>Please add yourself to ችቦ family</p>
                <div className="grid gap-2">
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
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            setIsUsernameValid(USERNAME_REGEX.test(e.target.value))
                        }}
                        required
                    />
                </div>
                {!isEmailValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
                {!isUsernameValid && <p style={{ color: 'red' }}>Please enter a valid username with at least two letters and the first letter should be alphabetical</p>}
                <Button type="submit" disabled={isSubmitDisabled}>Subscribe</Button>
            </form>
        </>
    );
}

export default UserProfileItems;
