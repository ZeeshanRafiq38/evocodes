import React from "react";

function MoonSvg({ size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M512 1024q-139 0-257-68.5T68.5 769 0 512q0-104 40.5-199t109-163.5T313 40.5 512 0t199 40.5 163.5 109 109 163.5 40.5 199-40.5 199-109 163.5-163.5 109-199 40.5zm0-960q-91 0-174 35.5T195 195 99.5 338 64 512t35.5 174T195 829t143 95.5T512 960q61 0 122-72t97.5-176.5T768 512t-36.5-199.5T634 136 512 64z"
      ></path>
    </svg>
  );
}

export default MoonSvg;