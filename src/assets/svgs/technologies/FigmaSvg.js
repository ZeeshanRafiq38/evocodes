import * as React from "react";

const Figma = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
    >
        <g fill="none" fillRule="evenodd" transform="translate(4)">
            <circle cx="12" cy="12" r="4" fill="#19BCFE"></circle>
            <path fill="#09CF83" d="M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8"></path>
            <path fill="#A259FF" d="M4 16h4V8H4a4 4 0 1 0 0 8"></path>
            <path fill="#F24E1E" d="M4 8h4V0H4a4 4 0 1 0 0 8"></path>
            <path fill="#FF7262" d="M12 8H8V0h4a4 4 0 1 1 0 8"></path>
        </g>
    </svg>
);

export default Figma;
