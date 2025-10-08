import React from "react";
import "./Header.css"; // Import your new CSS file

type HeaderParams = {
  headerText: string;
  subtext?: string;
};

export function Header({ headerText, subtext }: HeaderParams) {
  return (
    <div className="header-container">
      <h1 className="header-title">{headerText}</h1>
      <p className="header-subtext">{subtext}</p>
    </div>
  );
}
