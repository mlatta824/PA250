"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
//import { Button } from "../components/Button";



export default function signup(){
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (ev: React.FormEvent) => {
        ev.preventDefault();
        console.log("Sign Up button clicked with:", {username, password});

    }

    return(
        <div className = "signup-page">
            <style jsx>{`
                .header-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 0.5px;
                    margin-bottom: 2rem;
                }
                .header-title {
                    font-size: 3rem;
                    font-weight: bold;
                    color: white;
                    text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black;
                }
                .header-subtext {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: white;
                    text-shadow: 0 0 5px black, 0 0 5px black;
                }
                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    max-width: 400px;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 2rem;
                    border-radius: 0.5rem;
                }
                .auth-input {
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.25rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    font-size: 1.1rem;
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                    margin-bottom: 0.5rem;
                }
                .auth-input::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .auth-input:focus {
                    outline: none;
                    background-color: rgba(255, 255, 255, 0.2);
                    border-color: #ffcc00;
                }
                .auth-button {
                    padding: 0.75rem 1rem;
                    border-radius: 0.25rem;
                    border: none;
                    background-color: #ffcc00;
                    color: black;
                    font-size: 1.1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.2s;
                    margin-top: 1rem;
                }
                .auth-button:hover {
                    background-color: #e6b800;
                }
            `}</style>
            <div 
                style={{
                    position: "relative", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    minHeight: "100vh", 
                    textAlign: "center", 
                    overflow: "hidden",
                    padding: "1rem"
                }}
            >    
        
            <Header
                headerText="Create an Account"
                subtext="Join to illuminate our history."
            />
            <form onSubmit = {handleSignup} className = "signup-form">
                <input
                    className = "auth-input"
                    type = "text"
                    placeholder = "Username"
                    value = {username}
                    onChange = {(ev) => setUsername(ev.target.value)}
                    required
                />
                <br />
                <input
                    className = "auth-input"
                    type = "password"
                    placeholder = "Password"
                    value = {password}
                    onChange = {(ev) => setPassword(ev.target.value)}
                    required
                />
                <br />
                <button type="submit" className = "auth-button" >Join Now!</button>
            </form>
        </div>
        </div>
    );
}