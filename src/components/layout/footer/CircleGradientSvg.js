import * as React from "react";

const CircleGradientSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="856"
        height="502"
        fill="none"
        viewBox="0 0 856 502"
    >
        <g filter="url(#filter0_f_6484_656)" opacity="0.71">
            <circle
                cx="38"
                cy="499.543"
                r="193"
                fill="#02C6F7"
                transform="rotate(180 38 499.543)"
            ></circle>
        </g>
        <g filter="url(#filter1_f_6484_656)" opacity="0.71">
            <circle
                cx="300.5"
                cy="367.043"
                r="155.5"
                fill="#5832CE"
                transform="rotate(180 300.5 367.043)"
            ></circle>
        </g>
        <defs>
            <filter
                id="filter0_f_6484_656"
                width="1186"
                height="1186"
                x="-555"
                y="-93.457"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                ></feBlend>
                <feGaussianBlur
                    result="effect1_foregroundBlur_6484_656"
                    stdDeviation="200"
                ></feGaussianBlur>
            </filter>
            <filter
                id="filter1_f_6484_656"
                width="1111"
                height="1111"
                x="-255"
                y="-188.457"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                ></feBlend>
                <feGaussianBlur
                    result="effect1_foregroundBlur_6484_656"
                    stdDeviation="200"
                ></feGaussianBlur>
            </filter>
        </defs>
    </svg>
);

export default CircleGradientSvg;
