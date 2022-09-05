import React from "react";

export const ElementDefault = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26.000000 26.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
        fill="#c4c4c4"
        stroke="none"
      >
        <path
          d="M85 241 c-45 -20 -70 -60 -70 -112 0 -42 5 -53 33 -81 28 -28 39 -33
          82 -33 43 0 54 5 82 33 28 28 33 39 33 82 0 42 -5 54 -31 81 -33 33 -92 46
          -129 30z m94 -25 c47 -25 63 -83 37 -135 -35 -66 -137 -66 -172 0 -47 91 44
          182 135 135z"
        />
        <path
          d="M117 162 l32 -28 -32 -32 c-29 -30 -30 -32 -10 -32 12 0 32 14 47 32
          l25 33 -26 27 c-15 16 -36 28 -47 28 -19 -1 -17 -4 11 -28z"
        />
      </g>
    </svg>
  );
};

export const AddElement = ({ x, y, colors }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={x}
      height={y}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={colors}
        stroke="none"
      >
        <path
          d="M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594
        -662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31
        -565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220
        412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 276 45
        498 116 745 237 269 132 460 269 681 489 220 221 357 412 489 681 88 179 132
        296 180 476 63 240 78 371 78 649 0 278 -15 409 -78 649 -48 180 -92 297 -180
        476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193
        -740 235 -147 23 -475 34 -615 20z m510 -374 c993 -134 1762 -903 1896 -1896
        29 -219 14 -536 -35 -757 -202 -899 -942 -1575 -1861 -1699 -135 -18 -425 -18
        -560 0 -993 134 -1762 903 -1896 1896 -18 135 -18 425 0 560 133 989 899 1758
        1886 1895 129 18 439 18 570 1z"
        />
        <path
          d="M2490 3764 c-45 -20 -68 -41 -91 -86 -18 -35 -19 -65 -19 -488 l0
          -450 -452 0 c-451 0 -453 0 -493 -23 -125 -71 -125 -243 0 -314 40 -23 42 -23
          493 -23 l452 0 0 -452 c0 -451 0 -453 23 -493 71 -125 243 -125 314 0 23 40
          23 42 23 493 l0 452 453 0 c450 0 452 0 492 23 125 71 125 243 0 314 -40 23
          -42 23 -492 23 l-453 0 0 450 c0 423 -1 453 -19 488 -23 46 -46 67 -94 87 -45
          19 -92 19 -137 -1z"
        />
      </g>
    </svg>
  );
};


export const EditElement = () => {
  return(
    <svg version="1.0" 
    xmlns="http://www.w3.org/2000/svg"
    width="24"    
    height="24" 
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#c4c4c4" 
      stroke="none">
    <path 
    d="M4253 5080 c-78 -20 -114 -37 -183 -83 -44 -29 -2323 -2296 -2361
    -2349 -21 -29 -329 -1122 -329 -1168 0 -56 65 -120 122 -120 44 0 1138 309
    1166 329 15 11 543 536 1174 1168 837 838 1157 1165 1187 1212 74 116 105 270
    82 407 -7 39 -30 105 -53 154 -36 76 -55 99 -182 226 -127 127 -150 145 -226
    182 -135 65 -260 78 -397 42z m290 -272 c55 -27 258 -231 288 -288 20 -38 24
    -60 24 -140 0 -121 -18 -160 -132 -279 l-82 -86 -303 303 -303 303 88 84 c49
    46 108 93 132 105 87 42 203 41 288 -2z m-383 -673 l295 -295 -933 -932 -932
    -933 -295 295 c-162 162 -295 299 -295 305 0 13 1842 1855 1855 1855 6 0 143
    -133 305 -295z m-1822 -2284 c-37 -12 -643 -179 -645 -178 -1 1 30 115 68 252
    38 138 79 285 91 329 l21 78 238 -238 c132 -132 233 -241 227 -243z"/>
    <path 
    d="M480 4584 c-209 -56 -370 -206 -444 -414 l-31 -85 0 -1775 c0 -1693
    1 -1778 18 -1834 37 -120 77 -187 167 -277 63 -63 104 -95 157 -121 146 -73 3
    -69 2113 -66 l1895 3 67 26 c197 77 336 218 401 409 22 64 22 74 25 710 3 579
    2 648 -13 676 -21 40 -64 64 -114 64 -33 0 -49 -7 -79 -34 l-37 -34 -5 -634
    c-5 -631 -5 -633 -28 -690 -41 -102 -118 -179 -220 -220 l-57 -23 -1834 -3
    c-1211 -1 -1853 1 -1890 8 -120 22 -227 104 -277 213 l-29 62 0 1760 0 1760
    29 63 c37 80 122 161 203 194 l58 23 630 5 c704 6 664 1 700 77 23 48 13 95
    -31 138 l-35 35 -642 -1 c-533 0 -651 -3 -697 -15z"/>
    </g>
</svg>
  );
};

export const DeleteElement = () => {
  return(
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="24" 
    height="24" 
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#c4c4c4" 
      stroke="none">
    <path 
    d="M2125 4786 c-57 -18 -82 -33 -132 -79 -65 -60 -95 -125 -101 -219
    l-5 -78 82 0 81 0 0 48 c1 61 29 123 71 153 l34 24 405 0 405 0 34 -24 c42
    -30 70 -92 71 -153 l0 -48 81 0 82 0 -5 73 c-8 129 -70 226 -181 285 l-52 27
    -415 2 c-315 2 -425 -1 -455 -11z"/>
    <path 
    d="M947 4236 c-58 -21 -103 -61 -131 -118 -26 -52 -26 -53 -26 -292 0
    -139 5 -257 11 -279 13 -47 69 -111 123 -140 l41 -22 1595 0 1595 0 41 22 c55
    29 111 93 124 143 7 26 10 130 8 289 l-3 248 -30 49 c-19 30 -49 60 -79 79
    l-49 30 -1591 2 c-1312 2 -1598 0 -1629 -11z"/>
    <path  
    d="M1040 3202 c0 -131 123 -2558 131 -2587 32 -116 109 -207 217 -258
    l67 -32 1105 0 1105 0 67 32 c108 51 185 143 217 258 8 29 131 2457 131 2587
    0 17 -76 18 -1520 18 -1457 0 -1520 -1 -1520 -18z m805 -465 l27 -23 44 -933
    c41 -856 43 -936 29 -958 -34 -51 -102 -52 -133 -3 -8 13 -24 291 -51 867 -53
    1118 -51 1016 -22 1047 31 32 71 34 106 3z m770 -2 l25 -24 0 -935 0 -935 -23
    -27 c-33 -37 -81 -37 -114 0 l-23 27 0 935 0 935 25 24 c15 16 36 25 55 25 19
    0 40 -9 55 -25z m762 1 c34 -29 36 84 -18 -1051 l-40 -850 -24 -24 c-33 -34
    -81 -33 -112 3 -12 15 -23 35 -23 44 0 9 20 431 44 937 l44 919 27 23 c34 30
    67 29 102 -1z"/>
    </g>
</svg>
  );
};