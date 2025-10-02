// Home Page for PA250 web app

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {Header} from "../components/Header"
import { Button } from "../components/Button";




export default function Home(){
    const router = useRouter();

    const handleGetStarted = () => {
        // navigate to the start page (change path as needed)
        router.push('/start');
        console.log("Button clicked")
    }

    

    return(
        <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-6 flex-grow">
            <Header 
                headerText="Welcome to Name"
                subtext="Look at the amazing history of our state light up!"
            />
            <Button onClick={handleGetStarted}>Get Started</Button>
        </div>
        </main>
    );
      
}