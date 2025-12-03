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
    router.push("/login");
    console.log("Button clicked");
  };

  



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
     
      <CustomImage
        src="images/lightbug.png"
        alt="Lightbug"
        width={300}
        height={300}
        
        priority={true}
        className="lightbug-image"
      />

      
      <Header
        headerText="Illuminating Our History"
        subtext="Look at the amazing history of our state light up!"
      />
      <div style={{ marginTop: "20px" }}>
        <Button onClick={handleGetStarted}>Get Started</Button>
      </div>
      
    </div>
  );
}
