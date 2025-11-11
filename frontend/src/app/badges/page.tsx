// Sewickley Heights History Center, Western Pennsylvania Model Railroad Museum
"use client";
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import Image from "next/image";


const TOTAL_BADGES = 27

type Location = {
  id: string;
  name: string;
  description?: string;
  location?: string;
  latitude: string;
  longitude: string;
  imageUrl?: string;
};



export default function BadgesPage() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedBadge, setSelectedBadge] = useState<Location | null>(null);


    useEffect(() => {
        const fetchLocations = async () => {
            try {
                
                const response = await fetch('/api/locations');
                if (!response.ok) {

                    throw new Error('Failed to fetch locations');
                }

                const data: Location[] = await response.json();
                setLocations(data);

            } catch (err: any) {
            setError(err.message);
            } finally {

            setIsLoading(false);
            }
        };

        fetchLocations();
    }, []);

    const unlockedBadgeLen = locations.length;
    const lockedBadgeLen = TOTAL_BADGES - unlockedBadgeLen

    if(isLoading){

        return <div className = "text-center p-10">Loading Badges...</div>
    }

    if (error) {

        return <div className="text-center p-10 text-red-500">Error, failed to load badges: {error}</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <style jsx>{`
                .badge-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 1.5rem;
                    justify-items: center;
                }

                .badge-button {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    position: relative;
                    background-color: #f0f0f0;
                    border: 3px solid #ccc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .badge-button.unlocked {
                    border-color: #ffcc00;
                    background-color: white;
                }

                .badge-button.unlocked:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                }
                
                .badge-button.locked {
                    background-color: #333;
                    border-color: #555;
                    cursor: not-allowed;
                    opacity: 0.6;
                }
                
                .badge-placeholder-icon {
                    font-size: 2.5rem;
                    color: #aaa;
                }

                .badge-button.locked .badge-placeholder-icon {
                    color: #777;
                    font-size: 2rem;
                }
                
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 50;
                }
                
                .modal-content {
                    background-color: white;
                    color: #333;
                    padding: 2rem;
                    border-radius: 12px;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    position: relative;
                }
                
                .modal-close-button {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #888;
                    cursor: pointer;
                }
            `}
            </style>

            <div className = "mb-8 text-center">
                <h1 className = "text-4x1 font-bold text-outline">Unlocked Badges</h1>
                <p className="text-xl text-outline">{unlockedBadgeLen} out of {TOTAL_BADGES} Unlocked</p>
            </div>
 
        
            <div className="badge-grid">
                
                {locations.map((loc) => (
                <button
                    key={loc.id}
                    className="badge-button unlocked"
                    onClick={() => setSelectedBadge(loc)}
                    title={`View details for ${loc.name}`}
                >
                    {loc.imageUrl ? (
                        <Image
                            src = {loc.imageUrl}
                            alt = {loc.name}
                            layout = "fill"
                            objectFit = "cover"
                        />
                    ) : (
                        <span className = "badge-placeholder-icon">x</span>
                    )}
                </button>
                ))}
                
                {Array.from({ length: lockedBadgeLen > 0 ? lockedBadgeLen : 0 }).map((_, index) => (
                <button
                    key={`locked-${index}`}
                    className="badge-button locked"
                    disabled
                    title="Location not yet discovered"
                >
                    <span className="badge-placeholder-icon">?</span>
                </button>
                ))}
                
            </div>

            {selectedBadge && (
                <div 
                className="modal-overlay"
                onClick={() => setSelectedBadge(null)}
                >
                <div 
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                    className="modal-close-button"
                    onClick={() => setSelectedBadge(null)}
                    title="Close"
                    >
                    &times;
                    </button>
                    
                    <h2 className="text-2xl font-bold mb-4">{selectedBadge.name}</h2>
                    <p className="text-gray-700 mb-2">{selectedBadge.location}</p>
                    <p className="text-gray-800">{selectedBadge.description}</p>
                </div>
                </div>
            )}

            </div>
    );
}