import * as React from "react";

const FirebaseSvg = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
        preserveAspectRatio="xMidYMid"
        viewBox="-47.5 0 351 351"
    >
        <defs>
            <filter
                id="filter-2"
                width="200%"
                height="200%"
                x="-50%"
                y="-50%"
                filterUnits="objectBoundingBox"
            >
                <feGaussianBlur
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                    stdDeviation="17.5"
                ></feGaussianBlur>
                <feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                    result="shadowInnerInner1"
                ></feComposite>
                <feColorMatrix
                    in="shadowInnerInner1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                ></feColorMatrix>
            </filter>
            <filter
                id="filter-4"
                width="200%"
                height="200%"
                x="-50%"
                y="-50%"
                filterUnits="objectBoundingBox"
            >
                <feGaussianBlur
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                    stdDeviation="3.5"
                ></feGaussianBlur>
                <feOffset
                    dx="1"
                    dy="-9"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                ></feOffset>
                <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                    result="shadowInnerInner1"
                ></feComposite>
                <feColorMatrix
                    in="shadowInnerInner1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                ></feColorMatrix>
            </filter>
            <path
                id="path-1"
                d="m1.253 280.732 1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
            ></path>
            <path
                id="path-3"
                d="m134.417 148.974 32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744z"
            ></path>
        </defs>
        <path
            fill="#FFC24A"
            d="m0 282.998 2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
        ></path>
        <use xlinkHref="#path-1" fill="#FFA712" fillRule="evenodd"></use>
        <use xlinkHref="#path-1" filter="url(#filter-2)"></use>
        <path
            fill="#F4BD62"
            d="m135.005 150.38 32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
        ></path>
        <use xlinkHref="#path-3" fill="#FFA50E" fillRule="evenodd"></use>
        <use xlinkHref="#path-3" filter="url(#filter-4)"></use>
        <path
            fill="#F6820C"
            d="m0 282.998.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
        ></path>
        <path
            fill="#FDE068"
            d="m139.121 347.551 116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"
        ></path>
        <path
            fill="#FCCA3F"
            d="M254.354 282.16 221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"
        ></path>
        <path
            fill="#EEAB37"
            d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847-.285-1.752z"
        ></path>
    </svg>
);

export default FirebaseSvg;
