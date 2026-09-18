import {
  useEffect,
  useRef,
} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Services.css';


gsap.registerPlugin(ScrollTrigger);



function AiIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="aiGradient"
          x1="42"
          y1="33"
          x2="137"
          y2="132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#70E3FF" />

          <stop
            offset="0.5"
            stopColor="#6D72FF"
          />

          <stop
            offset="1"
            stopColor="#BC57EB"
          />
        </linearGradient>

        <filter
          id="aiGlow"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <circle
        cx="91"
        cy="80"
        r="48"
        fill="#655CFF"
        opacity="0.2"
        filter="url(#aiGlow)"
      />

      <path
        d="M90 35C72 28 53 39 52 58C38 64 35 85 47 95C44 113 60 126 76 122C83 137 104 137 112 123C132 124 143 104 133 90C144 73 134 53 117 51C112 36 99 31 90 35Z"
        stroke="url(#aiGradient)"
        strokeWidth="3"
      />

      <path
        d="M90 36V124"
        stroke="#BDEEFF"
        strokeOpacity="0.45"
      />

      <path
        d="M64 53L90 67L116 52"
        stroke="#A4B9FF"
        strokeOpacity="0.7"
      />

      <path
        d="M51 82L76 82L90 67L106 83L133 81"
        stroke="#C5A3FF"
      />

      <path
        d="M61 108L77 95L90 106L106 94L123 110"
        stroke="#8FDFFF"
      />

      <circle cx="64" cy="53" r="5" fill="#84E9FF" />
      <circle cx="116" cy="52" r="5" fill="#9A8BFF" />
      <circle cx="51" cy="82" r="4" fill="#FFFFFF" />
      <circle cx="76" cy="82" r="5" fill="#6FD9FF" />
      <circle cx="90" cy="67" r="6" fill="#FFFFFF" />
      <circle cx="106" cy="83" r="5" fill="#A66EFF" />
      <circle cx="133" cy="81" r="4" fill="#FFFFFF" />
      <circle cx="61" cy="108" r="4" fill="#7FE8FF" />
      <circle cx="90" cy="106" r="6" fill="#FFFFFF" />
      <circle cx="123" cy="110" r="4" fill="#BD6CFF" />
    </svg>
  );
}



function CustomSoftwareIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="softwareScreen"
          x1="31"
          y1="35"
          x2="134"
          y2="125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8D7CFF" />

          <stop
            offset="0.5"
            stopColor="#5652E7"
          />

          <stop
            offset="1"
            stopColor="#C546E3"
          />
        </linearGradient>

        <linearGradient
          id="softwareGear"
          x1="102"
          y1="91"
          x2="153"
          y2="142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E69AFF" />

          <stop
            offset="1"
            stopColor="#5B65FF"
          />
        </linearGradient>

        <filter
          id="softwareGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse
        cx="88"
        cy="127"
        rx="57"
        ry="15"
        fill="#7651FF"
        opacity="0.24"
        filter="url(#softwareGlow)"
      />

      <rect
        x="29"
        y="31"
        width="104"
        height="81"
        rx="10"
        fill="url(#softwareScreen)"
      />

      <rect
        x="37"
        y="40"
        width="88"
        height="63"
        rx="6"
        fill="#11132B"
      />

      <circle cx="45" cy="47" r="2.5" fill="#FF6B9E" />
      <circle cx="53" cy="47" r="2.5" fill="#9A75FF" />
      <circle cx="61" cy="47" r="2.5" fill="#71DDFF" />

      <path
        d="M66 66L53 78L66 90"
        stroke="#B4D8FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M95 66L108 78L95 90"
        stroke="#B4D8FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M87 61L75 95"
        stroke="#E1C5FF"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M63 112H100L109 125H53L63 112Z"
        fill="#745DFF"
      />

      <circle
        cx="125"
        cy="112"
        r="23"
        fill="url(#softwareGear)"
      />

      <circle
        cx="125"
        cy="112"
        r="10"
        fill="#17162F"
      />

      <path
        d="M125 82V91M125 133V142M95 112H104M146 112H155M104 91L110 97M140 127L146 133M104 133L110 127M140 97L146 91"
        stroke="#BD9CFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}



function SaasIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="saasCloud"
          x1="43"
          y1="38"
          x2="140"
          y2="124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2FAFF" />

          <stop
            offset="0.45"
            stopColor="#78A7FF"
          />

          <stop
            offset="1"
            stopColor="#7757E9"
          />
        </linearGradient>

        <linearGradient
          id="saasPanel"
          x1="61"
          y1="83"
          x2="121"
          y2="133"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#77E5FF" />

          <stop
            offset="1"
            stopColor="#9165FF"
          />
        </linearGradient>

        <filter
          id="saasGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse
        cx="90"
        cy="128"
        rx="54"
        ry="15"
        fill="#655CFF"
        opacity="0.22"
        filter="url(#saasGlow)"
      />

      <path
        d="M55 91C42 91 34 82 35 70C36 60 44 52 55 50C59 36 72 28 86 29C101 30 112 40 116 54C130 52 143 62 144 76C145 90 134 101 119 101H55C44 101 36 97 32 90"
        fill="url(#saasCloud)"
      />

      <rect
        x="59"
        y="82"
        width="62"
        height="49"
        rx="9"
        fill="#11142B"
        stroke="#C7E5FF"
        strokeOpacity="0.65"
      />

      <rect
        x="69"
        y="92"
        width="42"
        height="7"
        rx="3.5"
        fill="url(#saasPanel)"
      />

      <rect
        x="69"
        y="106"
        width="28"
        height="6"
        rx="3"
        fill="#8DA8FF"
      />

      <rect
        x="69"
        y="118"
        width="35"
        height="6"
        rx="3"
        fill="#A377FF"
        opacity="0.82"
      />

      <circle cx="111" cy="109" r="4" fill="#70E6FF" />
      <circle cx="111" cy="121" r="4" fill="#BB76FF" />
    </svg>
  );
}



function WebAppIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="webAppFrame"
          x1="29"
          y1="30"
          x2="148"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8DEAFF" />

          <stop
            offset="0.5"
            stopColor="#6878FF"
          />

          <stop
            offset="1"
            stopColor="#B760E9"
          />
        </linearGradient>

        <filter
          id="webAppGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse
        cx="90"
        cy="130"
        rx="58"
        ry="15"
        fill="#5F61FF"
        opacity="0.22"
        filter="url(#webAppGlow)"
      />

      <rect
        x="27"
        y="30"
        width="126"
        height="91"
        rx="12"
        fill="url(#webAppFrame)"
      />

      <rect
        x="36"
        y="40"
        width="108"
        height="72"
        rx="7"
        fill="#101328"
      />

      <circle cx="45" cy="49" r="3" fill="#FF6A9A" />
      <circle cx="55" cy="49" r="3" fill="#A07BFF" />
      <circle cx="65" cy="49" r="3" fill="#72DFFF" />

      <rect
        x="46"
        y="64"
        width="37"
        height="34"
        rx="7"
        fill="#262D5A"
        stroke="#81E6FF"
        strokeOpacity="0.72"
      />

      <path
        d="M55 82L63 90L76 73"
        stroke="#DFFAFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect
        x="92"
        y="64"
        width="39"
        height="8"
        rx="4"
        fill="#7A70FF"
      />

      <rect
        x="92"
        y="80"
        width="29"
        height="6"
        rx="3"
        fill="#C07CFF"
      />

      <rect
        x="92"
        y="93"
        width="37"
        height="6"
        rx="3"
        fill="#72DFFF"
        opacity="0.8"
      />
    </svg>
  );
}



function MobileIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="mobileShell"
          x1="55"
          y1="17"
          x2="127"
          y2="145"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDFBFF" />
          <stop offset="0.38" stopColor="#829CFF" />
          <stop offset="0.7" stopColor="#7061EB" />
          <stop offset="1" stopColor="#B45FE5" />
        </linearGradient>

        <linearGradient
          id="mobileScreen"
          x1="68"
          y1="34"
          x2="116"
          y2="126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2853" />
          <stop offset="1" stopColor="#101225" />
        </linearGradient>

        <linearGradient
          id="mobileUiCard"
          x1="72"
          y1="51"
          x2="112"
          y2="92"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#78E8FF" />
          <stop offset="0.5" stopColor="#7781FF" />
          <stop offset="1" stopColor="#B66CFF" />
        </linearGradient>

        <linearGradient
          id="mobileFloatCard"
          x1="116"
          y1="42"
          x2="151"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8FBFF" />
          <stop offset="1" stopColor="#8174FF" />
        </linearGradient>

        <filter
          id="mobilePremiumGlow"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <ellipse
        cx="89"
        cy="135"
        rx="52"
        ry="14"
        fill="#625AFF"
        opacity="0.22"
        filter="url(#mobilePremiumGlow)"
      />

      <circle
        cx="92"
        cy="77"
        r="53"
        fill="#625AFF"
        opacity="0.09"
        filter="url(#mobilePremiumGlow)"
      />

      <path
        d="M60 20C60 13.4 65.4 8 72 8H111C117.6 8 123 13.4 123 20V139C123 145.6 117.6 151 111 151H72C65.4 151 60 145.6 60 139V20Z"
        fill="url(#mobileShell)"
      />

      <rect
        x="66"
        y="15"
        width="51"
        height="128"
        rx="12"
        fill="url(#mobileScreen)"
      />

      <rect
        x="81"
        y="21"
        width="21"
        height="4"
        rx="2"
        fill="#F5FBFF"
        opacity="0.82"
      />

      <circle
        cx="108"
        cy="23"
        r="2.3"
        fill="#7CEBFF"
      />

      <rect
        x="73"
        y="39"
        width="37"
        height="36"
        rx="10"
        fill="url(#mobileUiCard)"
      />

      <circle
        cx="91.5"
        cy="55"
        r="8"
        fill="#F7FCFF"
        opacity="0.96"
      />

      <path
        d="M78 68C83 62 100 62 105 68"
        stroke="#E8F8FF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />

      <rect
        x="73"
        y="84"
        width="16"
        height="16"
        rx="5"
        fill="#765FFF"
      />

      <rect
        x="94"
        y="84"
        width="16"
        height="16"
        rx="5"
        fill="#56D9F4"
      />

      <rect
        x="73"
        y="109"
        width="37"
        height="6"
        rx="3"
        fill="#8876FF"
      />

      <rect
        x="73"
        y="120"
        width="27"
        height="5"
        rx="2.5"
        fill="#B793FF"
        opacity="0.82"
      />

      <rect
        x="73"
        y="131"
        width="20"
        height="4"
        rx="2"
        fill="#70DFFF"
        opacity="0.72"
      />

      <g transform="rotate(8 132 59)">
        <rect
          x="113"
          y="39"
          width="38"
          height="34"
          rx="10"
          fill="url(#mobileFloatCard)"
        />

        <circle
          cx="125"
          cy="52"
          r="6"
          fill="#FFFFFF"
          opacity="0.94"
        />

        <path
          d="M136 50H144"
          stroke="#4F4CD0"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M136 58H142"
          stroke="#765FFF"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>

      <circle
        cx="47"
        cy="57"
        r="6"
        fill="#78E5FF"
        opacity="0.88"
      />

      <circle
        cx="45"
        cy="105"
        r="4"
        fill="#AA72FF"
        opacity="0.92"
      />

      <path
        d="M46 64C37 76 38 91 44 99"
        stroke="#7B89FF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeDasharray="3 5"
        opacity="0.55"
      />

      <path
        d="M127 95L136 89L145 95L136 101L127 95Z"
        fill="#7FE7FF"
        opacity="0.85"
      />

      <path
        d="M127 102L136 108L145 102"
        stroke="#A97AFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



function EcommerceIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="commerceBag"
          x1="48"
          y1="45"
          x2="133"
          y2="135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDF9FF" />

          <stop
            offset="0.45"
            stopColor="#6FA5FF"
          />

          <stop
            offset="1"
            stopColor="#8A59E8"
          />
        </linearGradient>

        <filter
          id="commerceGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <ellipse
        cx="90"
        cy="132"
        rx="55"
        ry="15"
        fill="#705AFF"
        opacity="0.22"
        filter="url(#commerceGlow)"
      />

      <path
        d="M49 58H131L123 130H57L49 58Z"
        fill="url(#commerceBag)"
      />

      <path
        d="M67 59C67 44 77 33 90 33C103 33 113 44 113 59"
        stroke="#ECFBFF"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <rect
        x="65"
        y="77"
        width="50"
        height="34"
        rx="8"
        fill="#14162E"
        opacity="0.92"
      />

      <circle
        cx="76"
        cy="94"
        r="6"
        fill="#76E3FF"
      />

      <rect
        x="88"
        y="85"
        width="19"
        height="6"
        rx="3"
        fill="#A477FF"
      />

      <rect
        x="88"
        y="97"
        width="23"
        height="5"
        rx="2.5"
        fill="#D7C9FF"
        opacity="0.75"
      />

      <path
        d="M117 47L137 52L131 71"
        stroke="#77E5FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



function InteractiveIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id="interactiveGlow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(87 78) rotate(90) scale(58)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8BE8FF" />

          <stop
            offset="0.48"
            stopColor="#718CFF"
          />

          <stop
            offset="1"
            stopColor="#9E55D7"
            stopOpacity="0"
          />
        </radialGradient>

        <linearGradient
          id="interactiveWire"
          x1="38"
          y1="25"
          x2="145"
          y2="138"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#FFFFFF"
            stopOpacity="0.9"
          />

          <stop
            offset="0.5"
            stopColor="#9BDFFF"
          />

          <stop
            offset="1"
            stopColor="#C783FF"
          />
        </linearGradient>

        <filter
          id="interactiveBlur"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <circle
        cx="88"
        cy="79"
        r="44"
        fill="url(#interactiveGlow)"
        opacity="0.75"
        filter="url(#interactiveBlur)"
      />

      <path
        d="M45 39L102 25L143 58L131 121L75 138L38 99L45 39Z"
        stroke="url(#interactiveWire)"
        strokeWidth="1.4"
      />

      <path
        d="M45 39L88 79L143 58"
        stroke="url(#interactiveWire)"
        strokeOpacity="0.75"
      />

      <path
        d="M88 79L75 138"
        stroke="url(#interactiveWire)"
        strokeOpacity="0.75"
      />

      <path
        d="M88 79L131 121"
        stroke="url(#interactiveWire)"
        strokeOpacity="0.55"
      />

      <circle cx="88" cy="79" r="7" fill="#FFFFFF" />

      <circle
        cx="88"
        cy="79"
        r="14"
        fill="#82DAFF"
        opacity="0.22"
      />

      <circle cx="143" cy="58" r="3" fill="#D1FCFF" />

      <circle
        cx="131"
        cy="121"
        r="2.4"
        fill="#BD7BFF"
      />
    </svg>
  );
}



function SeoIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="seoLens"
          x1="38"
          y1="37"
          x2="136"
          y2="135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7DE8FF" />

          <stop
            offset="0.52"
            stopColor="#6777FF"
          />

          <stop
            offset="1"
            stopColor="#B95EEA"
          />
        </linearGradient>

        <filter
          id="seoGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <circle
        cx="79"
        cy="75"
        r="43"
        fill="#665BFF"
        opacity="0.2"
        filter="url(#seoGlow)"
      />

      <circle
        cx="79"
        cy="75"
        r="38"
        stroke="url(#seoLens)"
        strokeWidth="9"
      />

      <path
        d="M107 103L139 135"
        stroke="#9A7CFF"
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M57 91L70 78L81 84L100 61"
        stroke="#DDF9FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M91 61H100V70"
        stroke="#77E4FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



function AdsIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="adsHorn"
          x1="38"
          y1="48"
          x2="139"
          y2="127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9F7FF" />

          <stop
            offset="0.46"
            stopColor="#6EA2FF"
          />

          <stop
            offset="1"
            stopColor="#B15BE6"
          />
        </linearGradient>

        <filter
          id="adsGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse
        cx="89"
        cy="128"
        rx="54"
        ry="14"
        fill="#6C5BFF"
        opacity="0.22"
        filter="url(#adsGlow)"
      />

      <path
        d="M47 69L109 48V109L47 88V69Z"
        fill="url(#adsHorn)"
      />

      <rect
        x="36"
        y="68"
        width="18"
        height="22"
        rx="7"
        fill="#EDF9FF"
      />

      <path
        d="M58 90L68 124H87L77 95"
        fill="#5F69DA"
      />

      <path
        d="M121 61C132 68 132 89 121 97"
        stroke="#8EE8FF"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M133 51C151 64 151 95 133 108"
        stroke="#B983FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
    </svg>
  );
}



function ConversionIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="conversionTarget"
          x1="41"
          y1="36"
          x2="139"
          y2="134"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#80E8FF" />

          <stop
            offset="0.5"
            stopColor="#6D76FF"
          />

          <stop
            offset="1"
            stopColor="#BB5DEA"
          />
        </linearGradient>

        <filter
          id="conversionGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <circle
        cx="89"
        cy="79"
        r="48"
        fill="#635BFF"
        opacity="0.18"
        filter="url(#conversionGlow)"
      />

      <circle
        cx="86"
        cy="77"
        r="40"
        stroke="url(#conversionTarget)"
        strokeWidth="7"
      />

      <circle
        cx="86"
        cy="77"
        r="25"
        stroke="#B8B8FF"
        strokeOpacity="0.72"
        strokeWidth="5"
      />

      <circle cx="86" cy="77" r="9" fill="#FFFFFF" />

      <path
        d="M123 50L145 40L135 62L126 58L114 70"
        fill="#8D6DFF"
      />

      <path
        d="M114 70L86 77"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}



function SocialIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="socialNodes"
          x1="43"
          y1="36"
          x2="137"
          y2="132"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#77E8FF" />

          <stop
            offset="0.5"
            stopColor="#6B76FF"
          />

          <stop
            offset="1"
            stopColor="#BC61EA"
          />
        </linearGradient>

        <filter
          id="socialGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <circle
        cx="90"
        cy="80"
        r="48"
        fill="#665BFF"
        opacity="0.18"
        filter="url(#socialGlow)"
      />

      <path
        d="M63 55L109 45L128 88L93 119L48 101L63 55Z"
        stroke="url(#socialNodes)"
        strokeWidth="4"
      />

      <path
        d="M63 55L89 79L109 45M89 79L128 88M89 79L93 119M89 79L48 101"
        stroke="#C7D7FF"
        strokeOpacity="0.65"
      />

      <circle cx="63" cy="55" r="8" fill="#78E5FF" />
      <circle cx="109" cy="45" r="8" fill="#8A83FF" />
      <circle cx="128" cy="88" r="8" fill="#C36DFF" />
      <circle cx="93" cy="119" r="8" fill="#8A7DFF" />
      <circle cx="48" cy="101" r="8" fill="#7ADFFF" />
      <circle cx="89" cy="79" r="10" fill="#FFFFFF" />
    </svg>
  );
}



function EmailIcon() {
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="emailBody"
          x1="33"
          y1="46"
          x2="146"
          y2="126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDF8FF" />

          <stop
            offset="0.45"
            stopColor="#70A7FF"
          />

          <stop
            offset="1"
            stopColor="#9D5CE9"
          />
        </linearGradient>

        <filter
          id="emailGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      <ellipse
        cx="90"
        cy="128"
        rx="55"
        ry="14"
        fill="#645BFF"
        opacity="0.22"
        filter="url(#emailGlow)"
      />

      <rect
        x="28"
        y="45"
        width="124"
        height="78"
        rx="13"
        fill="url(#emailBody)"
      />

      <path
        d="M37 57L90 94L143 57"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M38 113L74 82M142 113L106 82"
        stroke="#DDE8FF"
        strokeOpacity="0.8"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle
        cx="134"
        cy="47"
        r="15"
        fill="#7D67FF"
      />

      <path
        d="M128 47L132 51L140 42"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



const DEVELOPMENT_SERVICES = [
  {
    title: 'AI & Automation Solutions',
    description:
      'Manual processes slow teams down and limit responsiveness. SyncSolvo builds AI agents, intelligent chatbots, AI call systems, and workflow automation that reduce repetitive work and keep operations moving efficiently.',
    Icon: AiIcon,
  },
  {
    title: 'Custom Software Development',
    description:
      'When off-the-shelf tools do not fit your workflow, SyncSolvo builds tailored dashboards, portals, and business systems that simplify operations and scale around the way your organization works.',
    Icon: CustomSoftwareIcon,
  },
  {
    title: 'SaaS Product Development',
    description:
      'Turn your product idea into a secure, scalable SaaS platform. SyncSolvo engineers multi-tenant systems, subscriptions, dashboards, and reliable product architecture built for long-term growth.',
    Icon: SaasIcon,
  },
  {
    title: 'Web Application Development',
    description:
      'Slow or limited web systems create friction for customers and teams. SyncSolvo builds fast, secure web applications that improve user experience, support workflows, and scale with demand.',
    Icon: WebAppIcon,
  },
  {
    title: 'Mobile App Development',
    description:
      'Customers expect convenient mobile access. SyncSolvo develops intuitive mobile applications that make services easier to use, strengthen engagement, and keep your business connected to users.',
    Icon: MobileIcon,
  },
  {
    title: 'E-Commerce & Marketplace Solutions',
    description:
      'Poor product discovery and complicated buying journeys cost sales. SyncSolvo builds modern commerce and marketplace platforms with smoother customer experiences, scalable management tools, and conversion-focused flows.',
    Icon: EcommerceIcon,
  },
  {
    title: 'Interactive & 3D Web Experiences',
    description:
      'When a standard website cannot express the brand, SyncSolvo creates refined 3D and motion-driven experiences that make your digital presence more memorable without sacrificing usability or performance.',
    Icon: InteractiveIcon,
  },
];


const MARKETING_SERVICES = [
  {
    title: 'SEO & Organic Growth',
    description:
      'If customers are searching but cannot find you, opportunities are being missed. SyncSolvo improves technical SEO, local visibility, and content performance to attract relevant, sustainable organic traffic.',
    Icon: SeoIcon,
  },
  {
    title: 'Paid Advertising & Lead Generation',
    description:
      'Ad spend should create opportunities, not just clicks. SyncSolvo builds targeted PPC and social campaigns focused on qualified leads, stronger customer acquisition, and measurable business outcomes.',
    Icon: AdsIcon,
  },
  {
    title: 'Landing Page & Conversion Optimization',
    description:
      'Traffic is valuable only when people take action. SyncSolvo improves landing pages, messaging, and conversion journeys to turn more visitors into enquiries, leads, and customers.',
    Icon: ConversionIcon,
  },
  {
    title: 'Social Media & Brand Growth',
    description:
      'An inconsistent digital presence weakens trust. SyncSolvo combines social media management, content strategy, and brand optimization to strengthen visibility, engagement, and credibility across the right channels.',
    Icon: SocialIcon,
  },
  {
    title: 'Email Marketing & Customer Engagement',
    description:
      'Growth continues after the first conversion. SyncSolvo creates targeted email and customer engagement journeys that strengthen relationships, improve retention, and encourage meaningful repeat interaction.',
    Icon: EmailIcon,
  },
];



function ServiceChapter({
  number,
  category,
  title,
  description,
}) {
  return (
    <div className="service-chapter anim-item">

      <div className="service-chapter-inner">

        <div className="service-chapter-number">
          {number}
        </div>

        <span
          className="service-chapter-line"
          aria-hidden="true"
        />

        <div className="service-chapter-category">
          {category}
        </div>

        <h2 className="service-chapter-title">
          {title}
        </h2>

        <p className="service-chapter-description">
          {description}
        </p>

      </div>

    </div>
  );
}



function ServiceTimeline({
  services,
}) {
  return (
    <div className="services-timeline">

      <span
        className="timeline-line-base"
        aria-hidden="true"
      />

      <span
        className="timeline-line-progress"
        aria-hidden="true"
      />

      {services.map(
        (
          {
            title,
            description,
            Icon,
          },
          index
        ) => {

          const side =
            index % 2 === 0
              ? 'is-left'
              : 'is-right';

          return (
            <article
              key={title}
              className={`service-timeline-item ${side}`}
            >

              <span
                className="service-connector"
                aria-hidden="true"
              />

              <span
                className="service-node"
                aria-hidden="true"
              >
                <span />
              </span>

              <div className="service-item-inner">

                <div className="service-visual">
                  <Icon />
                </div>

                <div className="service-content">

                  <h2>
                    {title}
                  </h2>

                  <p>
                    {description}
                  </p>

                </div>

              </div>

            </article>
          );
        }
      )}

    </div>
  );
}



export default function Services() {
  const sectionRef =
    useRef(null);


  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    const ctx =
      gsap.context(() => {

        const generalItems =
          gsap.utils.toArray(
            '.anim-item'
          );


        const serviceItems =
          gsap.utils.toArray(
            '.service-timeline-item'
          );


        const timelines =
          gsap.utils.toArray(
            '.services-timeline'
          );


        if (reducedMotion) {
          gsap.set(
            [
              ...generalItems,
              ...serviceItems,
            ],
            {
              y: 0,
              autoAlpha: 1,
            }
          );


          gsap.set(
            '.timeline-line-progress',
            {
              scaleY: 1,
            }
          );

          return;
        }


        generalItems.forEach(
          (item) => {

            gsap.fromTo(
              item,

              {
                y: 55,
                autoAlpha: 0,
              },

              {
                y: 0,
                autoAlpha: 1,

                ease: 'none',

                scrollTrigger: {
                  trigger: item,

                  start:
                    'top 94%',

                  end:
                    'top 69%',

                  scrub: 0.65,
                },
              }
            );
          }
        );


        timelines.forEach(
          (timeline) => {

            const progress =
              timeline.querySelector(
                '.timeline-line-progress'
              );


            if (!progress) return;


            gsap.fromTo(
              progress,

              {
                scaleY: 0,
              },

              {
                scaleY: 1,

                ease: 'none',

                transformOrigin:
                  'top center',

                scrollTrigger: {
                  trigger: timeline,

                  start:
                    'top 78%',

                  end:
                    'bottom 52%',

                  scrub: 0.7,
                },
              }
            );
          }
        );


        serviceItems.forEach(
          (item) => {

            const node =
              item.querySelector(
                '.service-node'
              );


            const connector =
              item.querySelector(
                '.service-connector'
              );


            gsap.fromTo(
              item,

              {
                y: 90,
                autoAlpha: 0,
              },

              {
                y: 0,
                autoAlpha: 1,

                ease: 'none',

                scrollTrigger: {
                  trigger: item,

                  start:
                    'top 93%',

                  end:
                    'top 63%',

                  scrub: 0.75,
                },
              }
            );


            if (node) {
              gsap.fromTo(
                node,

                {
                  scale: 0.65,
                  autoAlpha: 0.2,
                },

                {
                  scale: 1,
                  autoAlpha: 1,

                  ease: 'none',

                  scrollTrigger: {
                    trigger: item,

                    start:
                      'top 88%',

                    end:
                      'top 67%',

                    scrub: 0.55,
                  },
                }
              );
            }


            if (connector) {
              gsap.fromTo(
                connector,

                {
                  scaleX: 0,
                },

                {
                  scaleX: 1,

                  ease: 'none',

                  transformOrigin:
                    item.classList.contains(
                      'is-left'
                    )
                      ? 'right center'
                      : 'left center',

                  scrollTrigger: {
                    trigger: item,

                    start:
                      'top 88%',

                    end:
                      'top 67%',

                    scrub: 0.55,
                  },
                }
              );
            }
          }
        );

      }, sectionRef);


    const refreshFrame =
      window.requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        }
      );


    return () => {
      window.cancelAnimationFrame(
        refreshFrame
      );

      ctx.revert();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="services-section"
    >

      <div className="services-container">

        <div className="services-intro anim-item">

          <div className="services-intro-heading">

            <div className="services-label">

              <span className="services-label-line" />

              Our Services

            </div>

            <h1 className="services-title">
              Our
              <br />
              Services
            </h1>

          </div>


          <div className="services-intro-copy">

            <p>
              SyncSolvo combines software engineering,
              AI, product development, and digital growth
              to solve real business challenges—helping
              companies automate operations, build
              scalable products, reach the right
              customers, and grow with greater efficiency.
            </p>

          </div>

        </div>


        <ServiceChapter
          number="01"
          category="Development & Technology"
          title="Technology We Build"
          description="SyncSolvo engineers scalable digital products and intelligent systems built around real business needs—helping companies automate operations, improve efficiency, and create stronger foundations for growth."
        />


        <ServiceTimeline
          services={DEVELOPMENT_SERVICES}
        />


        <ServiceChapter
          number="02"
          category="Marketing & Growth"
          title="Growth We Drive"
          description="Great technology creates the foundation. SyncSolvo combines search, advertising, content, and conversion strategy to help the right audience discover your business and turn visibility into measurable growth."
        />


        <ServiceTimeline
          services={MARKETING_SERVICES}
        />

      </div>

    </section>
  );
}