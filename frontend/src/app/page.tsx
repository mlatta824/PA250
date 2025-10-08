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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
     
      <CustomImage
        src="/images/lightbug.png"
        alt="Lightbug"
<<<<<<< Updated upstream
        width={500}
        height={500}
=======
        width={450}
        height={450}
>>>>>>> Stashed changes
        position="absolute"
        top={0}
        right={555}
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
