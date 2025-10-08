
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CustomImage } from "./Image";
import "./Navbar.css";


export function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => router.push("/")}>
        <CustomImage
          src="/images/lightbug.png"
          alt="Lightbug Logo"
          width={60}
          height={60}
          className="navbar-logo"
          priority={true}
        />
      </div>

      <div className="navbar-right">
        <button onClick={() => router.push("/")} className="nav-button">Home</button>
        <button onClick={() => router.push("/about")} className="nav-button">About</button>
        <button onClick={() => router.push("/mapping")} className="nav-button">Map</button>
        <button onClick={() => router.push("/login")} className="nav-button">Login</button>
        <button onClick={() => router.push("/signup")} className="nav-button">Sign Up</button>
      </div>
    </nav>
  );
}
