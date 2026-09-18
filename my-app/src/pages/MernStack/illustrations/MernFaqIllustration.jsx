export default function MernFaqIllustration() {
  return (
    <svg
      className="service-page-svg"
      viewBox="0 0 680 510"
      role="img"
      aria-label="MERN and MEAN support infrastructure illustration"
    >
      <rect
        width="680"
        height="510"
        rx="6"
        fill="#DF315F"
      />

      <g data-svg-float>
        <path
          d="M120 202c0-31 25-56 56-56 20 0 38 10 48 26 11-12 28-20 46-20 35 0 63 28 63 63 0 4 0 8-1 12H138c-10 0-18-10-18-25Z"
          fill="#4F20E6"
        />
        <path
          d="M430 200c0-28 23-51 51-51 18 0 35 10 44 24 9-9 22-15 36-15 30 0 55 25 55 55 0 4 0 7-1 11H447c-9 0-17-9-17-24Z"
          fill="#4F20E6"
        />
      </g>

      <rect
        x="240"
        y="73"
        width="202"
        height="144"
        rx="9"
        fill="#F3EBDD"
      />
      <rect
        x="240"
        y="73"
        width="202"
        height="27"
        rx="9"
        fill="#4F20E6"
      />
      <circle cx="260" cy="86" r="5" fill="#F3EBDD" />
      <circle cx="277" cy="86" r="5" fill="#F3EBDD" />
      <circle cx="294" cy="86" r="5" fill="#F3EBDD" />

      <g transform="translate(328 148)" data-svg-spin>
        <circle r="34" fill="#171717" />
        <circle r="15" fill="#F3EBDD" />
        <rect x="-5" y="-49" width="10" height="16" fill="#171717" />
        <rect x="-5" y="33" width="10" height="16" fill="#171717" />
        <rect x="-49" y="-5" width="16" height="10" fill="#171717" />
        <rect x="33" y="-5" width="16" height="10" fill="#171717" />
      </g>

      <g transform="translate(391 121)" data-svg-spin>
        <circle r="23" fill="#171717" />
        <circle r="10" fill="#F3EBDD" />
      </g>

      <path
        d="M188 218V266H340V299"
        fill="none"
        stroke="#F3EBDD"
        strokeWidth="5"
        strokeDasharray="10 8"
        data-svg-flow
      />
      <path
        d="M494 218V266H340"
        fill="none"
        stroke="#F3EBDD"
        strokeWidth="5"
        strokeDasharray="10 8"
        data-svg-flow
      />

      {[
        [116, 296],
        [116, 348],
        [116, 400],
        [266, 334],
        [266, 386],
        [266, 438],
        [416, 296],
        [416, 348],
        [416, 400]
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width="146"
            height="35"
            rx="4"
            fill="#191919"
            stroke="#F3EBDD"
            strokeWidth="6"
          />
          <circle
            cx={x + 98}
            cy={y + 17}
            r="4"
            fill="#4F20E6"
            data-svg-pulse
          />
          <circle
            cx={x + 116}
            cy={y + 17}
            r="4"
            fill="#F3EBDD"
            data-svg-pulse
          />
          <circle
            cx={x + 132}
            cy={y + 17}
            r="4"
            fill="#4F20E6"
            data-svg-pulse
          />
        </g>
      ))}
    </svg>
  );
}
