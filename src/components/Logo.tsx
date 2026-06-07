import React from "react";

export default function Logo() {
  return (
    <svg
      width="120"
      height="27"
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            flood-color="#1A1A1A"
            flood-opacity="0.08"
          />
        </filter>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4A154B" />
          <stop offset="50%" stop-color="#5C1A5E" />
          <stop offset="100%" stop-color="#3D0F3E" />
        </linearGradient>
      </defs>
      <g filter="url(#logoShadow)">
        {/* <!-- Monogram N in square --> */}
        <rect
          x="0"
          y="0"
          width="36"
          height="36"
          rx="8"
          // fill="#0C0A09"
          className="fill-secondary"
        />
        <path
          d="M12 10V26M24 10V26M12 10L24 26M12 26L24 10"
          stroke="url(#logoGradient)"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        {/* Text with dark mode inversion */}
        <text
          x="46"
          y="25"
          font-family="'Inter', 'Segoe UI', system-ui, sans-serif"
          font-size="22"
          font-weight="400"
          letter-spacing="3"
          className="fill-primary"
        >
          NEXORA
        </text>
      </g>
    </svg>
  );
}
