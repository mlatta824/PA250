"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
// import { Button } from "../components/Button";



export default function login(){
    const router = useRouter();

    const handleLogin = () => {
        router.push("/start");
        console.log("Login button clicked");

    return(
        
        <div 
        style={{position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", textAlign: "center", overflow: "hidden",}}>
            
        
            <Header
                headerText="Login Page"
                subtext="Please enter your credentials to Login."
            />
        </div>
    );}
}