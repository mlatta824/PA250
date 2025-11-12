"use client";
import React from "react";
import dynamic from "next/dynamic"

const DynamicMap = dynamic (
    () => import("../../components/Map").then((mod) => mod.Map),
    {
        ssr: false,
        loading: () => (
            <p className = "text-center p-10"> Loading Map...</p>
        ),

    }
);



export default function MappingPage() {
    return (
    
    <div className="flex-row m-auto p-6 ">
        <h1 className="text-3xl font-bold mb-4">PA Turnpike Historical Map</h1>
      
        <DynamicMap />
      
    </div>

    );

}
