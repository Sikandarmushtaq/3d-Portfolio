export default function MernCloudInfrastructureIllustration() {
  return (
    <svg
      className="service-page-svg"
      viewBox="0 0 680 510"
      role="img"
      aria-label="MERN and MEAN cloud infrastructure illustration"
    >
      <rect
        width="680"
        height="510"
        rx="6"
        fill="#DF315F"
      />

      <g data-svg-float>
        <path
          d="M86 171c0-30 24-54 54-54 22 0 41 13 49 32 7-5 17-8 27-8 27 0 48 21 48 48 0 3 0 7-1 10H104c-11 0-18-9-18-28Z"
          fill="#4F20E6"
        />
        <path
          d="M468 184c0-26 21-47 47-47 20 0 37 12 44 29 7-4 16-7 25-7 24 0 44 20 44 44 0 3 0 5-1 8H483c-9 0-15-8-15-27Z"
          fill="#4F20E6"
        />
      </g>

      <g>
        <path
          d="M180 203V258"
          stroke="#F3EBDD"
          strokeWidth="5"
          strokeDasharray="10 9"
          data-svg-flow
        />
        <path
          d="M340 204V282"
          stroke="#F3EBDD"
          strokeWidth="5"
          strokeDasharray="10 9"
          data-svg-flow
        />
        <path
          d="M500 203V258"
          stroke="#F3EBDD"
          strokeWidth="5"
          strokeDasharray="10 9"
          data-svg-flow
        />
        <path
          d="M180 245H500"
          stroke="#F3EBDD"
          strokeWidth="5"
          strokeDasharray="10 9"
          data-svg-flow
        />
      </g>

      <g data-svg-float>
        <rect
          x="224"
          y="47"
          width="234"
          height="167"
          rx="10"
          fill="#F3EBDD"
        />
        <rect
          x="224"
          y="47"
          width="234"
          height="29"
          rx="10"
          fill="#4F20E6"
        />
        <circle cx="244" cy="61" r="6" fill="#F3EBDD" />
        <circle cx="264" cy="61" r="6" fill="#F3EBDD" />
        <circle cx="284" cy="61" r="6" fill="#F3EBDD" />
        <rect
          x="243"
          y="94"
          width="70"
          height="8"
          rx="4"
          fill="#E3DAC6"
        />
        <rect
          x="243"
          y="111"
          width="88"
          height="8"
          rx="4"
          fill="#E3DAC6"
        />
        <rect
          x="243"
          y="128"
          width="61"
          height="8"
          rx="4"
          fill="#E3DAC6"
        />

        <g
          transform="translate(338 125)"
          data-svg-spin
        >
          <circle r="35" fill="#151515" />
          <circle r="16" fill="#F3EBDD" />
          <rect
            x="-5"
            y="-50"
            width="10"
            height="18"
            fill="#151515"
          />
          <rect
            x="-5"
            y="32"
            width="10"
            height="18"
            fill="#151515"
          />
          <rect
            x="-50"
            y="-5"
            width="18"
            height="10"
            fill="#151515"
          />
          <rect
            x="32"
            y="-5"
            width="18"
            height="10"
            fill="#151515"
          />
        </g>

        <g
          transform="translate(402 98)"
          data-svg-spin
        >
          <circle r="24" fill="#151515" />
          <circle r="11" fill="#F3EBDD" />
          <rect
            x="-4"
            y="-35"
            width="8"
            height="13"
            fill="#151515"
          />
          <rect
            x="-4"
            y="22"
            width="8"
            height="13"
            fill="#151515"
          />
          <rect
            x="-35"
            y="-4"
            width="13"
            height="8"
            fill="#151515"
          />
          <rect
            x="22"
            y="-4"
            width="13"
            height="8"
            fill="#151515"
          />
        </g>
      </g>

      {[
        { x: 84, y: 276 },
        { x: 84, y: 325 },
        { x: 84, y: 374 },
        { x: 266, y: 322 },
        { x: 266, y: 371 },
        { x: 266, y: 420 },
        { x: 448, y: 276 },
        { x: 448, y: 325 },
        { x: 448, y: 374 }
      ].map((server, index) => (
        <g key={`${server.x}-${server.y}`}>
          <rect
            x={server.x}
            y={server.y}
            width="147"
            height="34"
            rx="4"
            fill="#1B1A1B"
            stroke="#F3EBDD"
            strokeWidth="6"
          />
          <circle
            cx={server.x + 99}
            cy={server.y + 17}
            r="4"
            fill="#4F20E6"
            data-svg-pulse
          />
          <circle
            cx={server.x + 116}
            cy={server.y + 17}
            r="4"
            fill="#EFE8D7"
            data-svg-pulse
          />
          <circle
            cx={server.x + 132}
            cy={server.y + 17}
            r="4"
            fill="#4F20E6"
            data-svg-pulse
          />
        </g>
      ))}
    </svg>
  );
}
