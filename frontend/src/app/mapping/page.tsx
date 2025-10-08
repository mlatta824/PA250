"user client";
import React from "react";
import { Map } from "../../components/Map";
import { Navbar } from "../../components/Navbar";

export default function MappingPage() {
    return (
    
    <div className="flex-row m-auto p-6 ">
        <h1 className="text-3xl font-bold mb-4">PA Turnpike Historical Map</h1>
      
        <Map />
      
    </div>

    );

}
