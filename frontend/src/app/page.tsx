"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { CustomImage } from "../components/Image";
import "./global.css";




export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/start");
    console.log("Button clicked");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Header
        headerText="Illuminating Our History"
        subtext="Look at the amazing history of our state light up!"
      />
      <div style={{ marginTop: "20px" }}>
        <Button onClick={handleGetStarted}>Get Started</Button>
      </div>
      <CustomImage
        src="/images/lightbug.png"
        alt="Lightbug"
        width={300}
        height={300}
        className="w-64 h-64 object-cover rounded-lg"
        priority={true}
        />
    </div>
  );
}



