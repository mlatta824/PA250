import React from "react";

type HeaderParams = {
    headerText: string;
    subtext?: string;
}

export function Header({ headerText, subtext }: { headerText: string; subtext: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2">
      <h1 className="text-4xl font-bold">{headerText}</h1>
      <p className="text-lg">{subtext}</p>
    </div>
  );
}