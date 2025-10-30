import React, { useState } from "react";

const Badge: React.FC<{
  color?: string;
  children: React.ReactNode;
}> = ({ color, children }) => {
  return (
    <span
      style={{
        display: "inline",
        backgroundColor: color,
        borderRadius: "4px",
        color: "#fff",
        padding: "0.2rem 0.3rem",
        fontSize: "0.75rem",
        fontWeight: "600",
        lineHeight: "1",
        textTransform: "uppercase",
        verticalAlign: "middle",
        marginRight: "0.25rem",
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
