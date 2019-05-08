import React from "react";

const TestVG = () => {
  return (
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect
          x="-1"
          y="-1"
          width="402"
          height="402"
          id="canvas_background"
          fill="none"
        />
        <g id="canvasGrid" display="none">
          <rect
            id="svg_1"
            width="100%"
            height="100%"
            x="0"
            y="0"
            strokeWidth="0"
            fill="url(#gridpattern)"
          />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          id="svg_3"
          d="m135.5,132.4375c0,-1 1.42267,-3.69437 -4,-13c-3.22386,-5.53234 -10.23541,-10.73579 -17,-17c-4.15056,-3.84354 -9.21167,-6.71412 -12,-9c-2.18735,-1.79319 -9.96599,-5.49949 -21,-6c-3.9959,-0.18126 -9.16911,1.00698 -12,2c-6.04218,2.11948 -8.89189,6.1216 -19,15c-6.92693,6.08422 -19,16 -24,21c-4,4 -9.7926,8.79176 -11,15c-3.06045,15.73637 2.42824,30.42336 7,36c10.75916,13.12405 19.59332,17.94736 35,24c30.31735,11.91043 40.89345,11.99748 55,13c0.99748,0.07089 2,0 2,0c0,0 -1.05653,-0.15587 -4,1c-11.24695,4.41656 -18.55739,7.63727 -28,20c-4.89374,6.40714 -10.49904,27.95332 -11,36c-1.4913,23.95361 -1.45428,35.15778 1,51c1.26245,8.14899 4.49278,15.32239 11,25c2.78995,4.14923 14.87085,10.44 21,12c27.56412,7.01566 43.15335,7.36703 67,4c10.09787,-1.42578 27.10745,-10.09677 31,-16c11.85794,-17.98303 9.79358,-36.09 6,-66c-1.65497,-13.0484 -4,-30 -4,-34c0,-4 0,-5 0,-6c0,0 0,0 0,0c0,2 -0.9454,7.06413 0,14c2.52313,18.51038 9.85077,28.21005 14,31c4.83881,3.2536 23.05615,4.67145 39,3c61.32431,-6.4288 80.39734,-12.88568 107,-23c7.11862,-2.7065 14.56561,-6.56226 16,-9c3.69196,-6.27452 2.7587,-13.05516 1,-32c-1.3988,-15.06796 -7.84525,-42.4915 -13,-53c-9.89676,-20.17558 -19,-26 -30,-37c-2,-2 -3.88495,-3.27431 -6,-4c-4.82303,-1.65482 -34.10275,-6.8105 -50,-5c-13.25598,1.5097 -15.5582,5.51929 -19,8c-1.814,1.30745 -3.86325,5.14681 -6,7c-3.77728,3.27602 -6.22272,3.72398 -10,7c-1.06836,0.92659 -1,1 -1,1c2,0 9,0 31,0c16,0 48.87329,-5.75943 55,-11c9.73178,-8.32422 9.43762,-16.31508 7,-24c-5.13992,-16.20435 -15.34891,-26.70673 -37,-46c-11.66211,-10.39209 -35.63992,-27.70923 -43,-31c-11.54745,-5.16298 -15,-5 -21,-5c-4,0 -17.00824,0.68551 -23,1c-19.0787,1.00138 -26.16824,2.58481 -34,6c-4.09933,1.78759 -9.39154,4.29772 -17,9c-8.5065,5.25731 -11.11096,8.84282 -14,11c-6.25818,4.67282 -9.17044,8.92617 -13,18c-2.09393,4.9614 -4,12 -4,15c0,6 0,9 0,13c0,3 0,5 0,8c0,2 0,7 0,9c0,0 0,0 0,0c0,1 -0.4588,0.69344 -1,2c-0.38269,0.92388 0,1 0,1c0,0 0,1 0,1l1,1l1,1l1,0"
        />
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          id="svg_4"
          d="m212.5,140.4375c-1,0 -3.03748,-0.61092 -8,0c-4.09222,0.50377 -7.23273,2.73325 -13,8c-2.08856,1.90732 -5.32703,4.10973 -11,14c-2.67941,4.67128 -7.38803,19.12134 -6,27c2.03079,11.52718 7.42401,17.96326 18,20c4.90979,0.94554 21.15692,0.48445 28,-2c9.2576,-3.36107 12.45978,-6.84235 15,-15c1.22583,-3.93666 -0.45294,-25.30388 -6,-33c-5.84711,-8.11243 -11,-8 -16,-9c-5,-1 -13,-2 -16,-2c-2,0 -4,1 -5,1l0,0l0,0l0,0"
        />
      </g>
    </svg>
  );
};

export default TestVG;