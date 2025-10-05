// Home Page for PA250 web app

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/start");
    console.log("Button clicked");
  };

  return (
     <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-4">
      <Header headerText="Illuminating Our History"
      subtext="Look at the amazing history of our state light up!" />
      <Button onClick={handleGetStarted}>Get Started</Button>
    </main>
  );
}


