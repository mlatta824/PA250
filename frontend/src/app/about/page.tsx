"use client";
import React from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
// import { Header } from "../components/Header";
// import { Button } from "../components/Button";
import "../global.css";

export default function About(){
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative">
            {/* Lightbug image on the center left */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
                <Image
                    src="/images/lightbug.png"
                    alt="Lightning Bug Mascot"
                    width={200}
                    height={200}
                    className="lightbug-image"
                    priority
                />
            </div>

            {/* Centered About header */}
            <h1 className="text-5xl font-bold mb-8 text-center relative z-20">About</h1>

            {/* Text box with centered content */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto relative z-20">
                <p className="text-2xl leading-relaxed text-center" style={{ color: '#000000' }}>
                    We are going to be creating a web application for a PA250 project that will use an innovative technology of NCF tags that users will be able to scan. The NFC tag will have a URL embedded into the tag, and it bring up a this website that will give people the ability to access information about the history of the PA turnpike. The mascot that is being used is a lightning bug.
                </p>
            </div>
        </div>
    );
}
