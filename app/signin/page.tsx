import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function UserSignIn({}: React.ComponentProps<"form">) {
    const className = "px-4"
    const [userInput, setUserInput] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bodyData  = userInput.includes('@') ? { email: userInput } : { userName: userInput } 
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
                console.log('Data successfully posted to the server');
            } else {
                console.error('Failed to post data to the server');
            }
        } catch (error) {
            console.error('Error while posting data to the server:', error);
        }
    };

    return (
        <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
        
                <Label htmlFor="userInput">userInput or Email</Label>
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
    );
}

export default UserSignIn;
