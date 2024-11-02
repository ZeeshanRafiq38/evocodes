import * as React from "react";

const ArrowLeftSvg = ({ size = 24 }) => (


    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 16 17"
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 8.543h14M8 1.543l7 7-7 7"
        ></path>
    </svg>
);

export default ArrowLeftSvg;
