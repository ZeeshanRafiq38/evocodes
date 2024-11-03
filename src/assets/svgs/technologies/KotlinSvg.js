import * as React from "react";

const KotlinSvg = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 256"
    >
        <defs>
            <linearGradient
                id="linearGradient-1"
                x1="26.599%"
                x2="73.845%"
                y1="146.559%"
                y2="52.381%"
            >
                <stop offset="9.677%" stopColor="#0095D5"></stop>
                <stop offset="30.07%" stopColor="#238AD9"></stop>
                <stop offset="62.11%" stopColor="#557BDE"></stop>
                <stop offset="86.43%" stopColor="#7472E2"></stop>
                <stop offset="100%" stopColor="#806EE3"></stop>
            </linearGradient>
            <linearGradient
                id="linearGradient-2"
                x1="13.984%"
                x2="68.682%"
                y1="37.105%"
                y2="-13.554%"
            >
                <stop offset="11.83%" stopColor="#0095D5"></stop>
                <stop offset="41.78%" stopColor="#3C83DC"></stop>
                <stop offset="69.62%" stopColor="#6D74E1"></stop>
                <stop offset="83.33%" stopColor="#806EE3"></stop>
            </linearGradient>
            <linearGradient
                id="linearGradient-3"
                x1="-16.836%"
                x2="76.219%"
                y1="91.94%"
                y2="-1.116%"
            >
                <stop offset="10.75%" stopColor="#C757BC"></stop>
                <stop offset="21.38%" stopColor="#D0609A"></stop>
                <stop offset="42.54%" stopColor="#E1725C"></stop>
                <stop offset="60.48%" stopColor="#EE7E2F"></stop>
                <stop offset="74.3%" stopColor="#F58613"></stop>
                <stop offset="82.32%" stopColor="#F88909"></stop>
            </linearGradient>
        </defs>
        <path
            fill="url(#linearGradient-1)"
            d="m0 256 128.427-128.427L256 256z"
        ></path>
        <path fill="url(#linearGradient-2)" d="M0 0h128.427L0 138.667z"></path>
        <path
            fill="url(#linearGradient-3)"
            d="M128.427 0 0 135.253V256l128.427-128.427L256 0z"
        ></path>
    </svg>
);

export default KotlinSvg;
