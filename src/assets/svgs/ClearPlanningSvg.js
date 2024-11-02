import * as React from "react";

const ClearPlanningSvg = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 25 25"
    >
        <path
            fill="purple"
            d="M19.707 3.981h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2m0 16h-14v-14h14z"
        ></path>
        <path
            fill="purple"
            d="M9.707 12.981h-2v5h2zM17.707 7.981h-2v10h2zM13.707 14.981h-2v3h2zM13.707 10.981h-2v2h2z"
        ></path>
    </svg>
);

export default ClearPlanningSvg;
