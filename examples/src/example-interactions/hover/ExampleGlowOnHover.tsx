import { GlowOnHover } from "interactive-illustrations";

const Example = () => (
    <svg width="230" height="329" viewBox="0 0 230 329" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="72.0862" y="0.874023" width="162.048" height="297" rx="10" transform="rotate(13.9139 72.0862 0.874023)" fill="#F2D14D"/>
        <path className="glow" d="M109.109 188.275C108.855 188.212 108.569 188.061 108.251 187.82C107.946 187.601 107.678 187.373 107.449 187.137C103.426 182.908 100.073 178.693 97.3914 174.491C94.714 170.273 92.8538 166.167 91.811 162.173C90.7892 158.167 90.7247 154.363 91.6174 150.759C92.1748 148.509 93.0399 146.542 94.2125 144.857C95.4063 143.16 96.8168 141.785 98.4439 140.734C100.071 139.683 101.833 138.997 103.728 138.676C105.624 138.356 107.571 138.443 109.571 138.939C112.061 139.556 114.09 140.732 115.656 142.466C117.223 144.201 118.316 146.25 118.935 148.612C120.607 146.799 122.539 145.5 124.729 144.714C126.924 143.911 129.259 143.816 131.733 144.429C133.732 144.924 135.495 145.756 137.022 146.924C138.566 148.097 139.803 149.526 140.735 151.211C141.683 152.9 142.28 154.772 142.526 156.826C142.794 158.868 142.649 161.013 142.092 163.263C141.199 166.867 139.357 170.199 136.567 173.261C133.797 176.31 130.244 179.074 125.907 181.555C121.591 184.023 116.667 186.188 111.134 188.05C110.821 188.152 110.47 188.226 110.081 188.274C109.704 188.342 109.381 188.343 109.109 188.275Z" fill="#F57F6D"/>
        <path className="glow" d="M86.9702 42.6797C86.8481 42.6494 86.7105 42.5766 86.5575 42.4613C86.4106 42.3561 86.2821 42.2468 86.1718 42.1334C84.2362 40.1052 82.6231 38.0837 81.3325 36.069C80.0439 34.0462 79.1483 32.0778 78.6455 30.1636C78.1529 28.2433 78.1205 26.4199 78.5482 24.6932C78.8153 23.615 79.2304 22.6725 79.7934 21.8655C80.3666 21.0525 81.0441 20.3943 81.8258 19.8911C82.6076 19.3878 83.454 19.0598 84.3651 18.9069C85.2762 18.754 86.2123 18.7967 87.1735 19.0348C88.371 19.3314 89.3465 19.8957 90.1 20.7277C90.8536 21.5597 91.3798 22.5418 91.6785 23.6741C92.4815 22.8062 93.4093 22.1842 94.4621 21.8084C95.5169 21.4244 96.639 21.3797 97.8283 21.6743C98.7895 21.9124 99.6373 22.3117 100.372 22.8722C101.114 23.4348 101.71 24.12 102.158 24.928C102.614 25.738 102.902 26.6352 103.021 27.6198C103.151 28.5983 103.082 29.6266 102.815 30.7048C102.387 32.4314 101.503 34.0279 100.163 35.4941C98.8327 36.9542 97.1258 38.278 95.042 39.4653C92.9683 40.6466 90.6022 41.6823 87.9435 42.5723C87.7931 42.6211 87.6244 42.6567 87.4372 42.6792C87.2562 42.7118 87.1006 42.712 86.9702 42.6797Z" fill="#F57F6D"/>
        <path className="glow" d="M139.133 309.331C139.011 309.301 138.874 309.228 138.721 309.113C138.574 309.007 138.445 308.898 138.335 308.785C136.399 306.756 134.786 304.735 133.496 302.72C132.207 300.697 131.311 298.729 130.809 296.815C130.316 294.895 130.284 293.071 130.711 291.344C130.978 290.266 131.393 289.324 131.956 288.517C132.53 287.704 133.207 287.046 133.989 286.542C134.771 286.039 135.617 285.711 136.528 285.558C137.439 285.405 138.375 285.448 139.337 285.686C140.534 285.983 141.51 286.547 142.263 287.379C143.017 288.211 143.543 289.193 143.842 290.325C144.645 289.457 145.572 288.835 146.625 288.46C147.68 288.076 148.802 288.031 149.991 288.326C150.953 288.564 151.8 288.963 152.535 289.523C153.277 290.086 153.873 290.771 154.321 291.579C154.777 292.389 155.065 293.286 155.184 294.271C155.314 295.25 155.245 296.278 154.978 297.356C154.55 299.083 153.666 300.679 152.326 302.145C150.996 303.605 149.289 304.929 147.205 306.117C145.131 307.298 142.765 308.334 140.107 309.224C139.956 309.272 139.787 309.308 139.6 309.33C139.419 309.363 139.264 309.363 139.133 309.331Z" fill="#F57F6D"/>
    </svg>
);

export default function ExampleGlowOnHover() {
  return (
    <GlowOnHover src={<Example/>} width={150} height={250} color={"#F57F6D"}/>
  );
}