import React from "react";

export default function ProgressBar({ statName, width }) {

  return (
    <div className="bar">
      <p className="bar-name">{statName}</p>
      <div className="bar-wrap">
        <div
          className="points"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <span>{width}</span>
    </div>
  );
}
