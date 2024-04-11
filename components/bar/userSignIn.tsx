import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UserSignIn({ className }: React.ComponentProps<"form">) {
    const [username, setUsername] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('YOUR_SERVER_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
    };

    return (
        <>
            <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <Label htmlFor="username">Username or Email</Label>
                    <Input
                        id="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        required
                    />
                </div>
                <Button type="submit" disabled={username.length < 4}>sign in </Button>
            </form>
        </>
    );
}

export default UserSignIn;
