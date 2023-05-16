import React, { useRef, useEffect } from "react";
import "./Cover.css";

export default function Cover() {
  const page = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "auto";
      page.current.style.display = "none";
    }, 2400);
  }, []);
  return (
    <div id="cover-page" ref={page}>
      <svg
        id="cover"
        width="192"
        height="192"
        viewBox="0 0 192 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="box">
          <g id="Container" filter="url(#filter0_d_0_1)">
            <rect
              id="bgBox"
              x="51"
              y="33"
              width="85"
              height="117"
              fill="#ECE8E3"
            />
            <rect
              id="Rectangle 3"
              x="70"
              y="55"
              width="71"
              height="49"
              fill="#497BDB"
            />
            <rect
              id="Rectangle 4"
              x="70"
              y="110"
              width="71"
              height="49"
              fill="#D76B6B"
            />
          </g>
          <g id="Lines">
            <g id="Bar1" filter="url(#filter1_d_0_1)">
              <rect x="79" y="64" width="53" height="7" fill="#FCFCFC" />
              <rect x="79" y="64" width="53" height="7" fill="#FCFCFC" />
              <rect x="79" y="64" width="53" height="7" fill="#FCFCFC" />
            </g>
            <g id="Bar2" filter="url(#filter2_d_0_1)">
              <rect x="79" y="76" width="53" height="7" fill="#FCFCFC" />
              <rect x="79" y="76" width="53" height="7" fill="#FCFCFC" />
              <rect x="79" y="76" width="53" height="7" fill="#FCFCFC" />
            </g>
            <g id="Bar3" filter="url(#filter3_d_0_1)">
              <rect x="79" y="88" width="53" height="7" fill="#FCFCFC" />
              <rect x="79" y="88" width="53" height="7" fill="#FCFCFC" />
              <rect x="79" y="88" width="53" height="7" fill="#FCFCFC" />
            </g>
          </g>
          <g id="NewBar" filter="url(#filter4_d_0_1)">
            <rect x="79" y="131" width="53" height="7" fill="#FCFCFC" />
            <rect x="79" y="131" width="53" height="7" fill="#FCFCFC" />
            <rect x="79" y="131" width="53" height="7" fill="#FCFCFC" />
          </g>
          <g id="Text" filter="url(#filter5_d_0_1)">
            <path
              id="P"
              d="M67.0568 176V167.273H70.0057C70.6903 167.273 71.25 167.396 71.6847 167.643C72.1222 167.888 72.446 168.219 72.6562 168.636C72.8665 169.054 72.9716 169.52 72.9716 170.034C72.9716 170.548 72.8665 171.016 72.6562 171.436C72.4489 171.857 72.1278 172.192 71.6932 172.442C71.2585 172.689 70.7017 172.812 70.0227 172.812H67.9091V171.875H69.9886C70.4574 171.875 70.8338 171.794 71.1179 171.632C71.402 171.47 71.608 171.251 71.7358 170.976C71.8665 170.697 71.9318 170.384 71.9318 170.034C71.9318 169.685 71.8665 169.372 71.7358 169.097C71.608 168.821 71.4006 168.605 71.1136 168.449C70.8267 168.29 70.446 168.21 69.9716 168.21H68.1136V176H67.0568Z"
              fill="#E7E7E7"
            />
            <path
              id="L"
              d="M75.0568 176V167.273H76.1136V175.062H80.1705V176H75.0568Z"
              fill="#E7E7E7"
            />
            <path
              id="A"
              d="M82.4148 176H81.3068L84.5114 167.273H85.6023L88.8068 176H87.6989L85.0909 168.653H85.0227L82.4148 176ZM82.8239 172.591H87.2898V173.528H82.8239V172.591Z"
              fill="#E7E7E7"
            />
            <path
              id="N"
              d="M97.9773 167.273V176H96.9545L92.1989 169.148H92.1136V176H91.0568V167.273H92.0795L96.8523 174.142H96.9375V167.273H97.9773Z"
              fill="#E7E7E7"
            />
            <path
              id="N_2"
              d="M107.977 167.273V176H106.955L102.199 169.148H102.114V176H101.057V167.273H102.08L106.852 174.142H106.938V167.273H107.977Z"
              fill="#E7E7E7"
            />
            <path
              id="E"
              d="M110.057 176V167.273H115.324V168.21H111.114V171.159H115.051V172.097H111.114V175.062H115.392V176H110.057Z"
              fill="#E7E7E7"
            />
            <path
              id="D"
              d="M120.75 176H118.057V167.273H120.869C121.716 167.273 122.44 167.447 123.043 167.797C123.645 168.143 124.107 168.642 124.428 169.293C124.749 169.94 124.909 170.716 124.909 171.619C124.909 172.528 124.747 173.311 124.423 173.967C124.099 174.621 123.628 175.124 123.009 175.476C122.389 175.825 121.636 176 120.75 176ZM119.114 175.062H120.682C121.403 175.062 122.001 174.923 122.476 174.645C122.95 174.366 123.304 173.97 123.537 173.456C123.77 172.942 123.886 172.33 123.886 171.619C123.886 170.915 123.771 170.308 123.541 169.8C123.311 169.288 122.967 168.896 122.51 168.624C122.053 168.348 121.483 168.21 120.801 168.21H119.114V175.062Z"
              fill="#E7E7E7"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_0_1"
            x="47"
            y="33"
            width="98"
            height="134"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_0_1"
            x="75"
            y="64"
            width="61"
            height="15"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_0_1"
            x="75"
            y="76"
            width="61"
            height="15"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_0_1"
            x="75"
            y="88"
            width="61"
            height="15"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_0_1"
            x="75"
            y="131"
            width="61"
            height="15"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_0_1"
            x="63.0568"
            y="167.273"
            width="65.8523"
            height="16.7273"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
