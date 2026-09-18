export default function MernDashboardIllustration() {
  return (
    <svg
      className="service-page-svg"
      viewBox="0 0 680 510"
      role="img"
      aria-label="MERN and MEAN dashboard illustration"
    >
      <rect
        width="680"
        height="510"
        rx="6"
        fill="#4F20E6"
      />

      <g data-svg-spin transform="translate(576 112)">
        <circle r="34" fill="#EFE8D7" />
        <circle r="16" fill="#4F20E6" />
        <rect x="-5" y="-49" width="10" height="16" fill="#EFE8D7" />
        <rect x="-5" y="33" width="10" height="16" fill="#EFE8D7" />
        <rect x="-49" y="-5" width="16" height="10" fill="#EFE8D7" />
        <rect x="33" y="-5" width="16" height="10" fill="#EFE8D7" />
      </g>

      <g data-svg-spin transform="translate(106 351)">
        <circle r="27" fill="#EFE8D7" />
        <circle r="12" fill="#4F20E6" />
        <rect x="-4" y="-40" width="8" height="14" fill="#EFE8D7" />
        <rect x="-4" y="26" width="8" height="14" fill="#EFE8D7" />
        <rect x="-40" y="-4" width="14" height="8" fill="#EFE8D7" />
        <rect x="26" y="-4" width="14" height="8" fill="#EFE8D7" />
      </g>

      <g data-svg-float>
        <rect
          x="128"
          y="128"
          width="424"
          height="250"
          rx="12"
          fill="#F3EBDD"
          stroke="#252124"
          strokeWidth="8"
        />
        <rect
          x="128"
          y="128"
          width="424"
          height="31"
          rx="8"
          fill="#E0D7C4"
        />
        <circle cx="149" cy="144" r="5" fill="#5B22E8" />
        <circle cx="166" cy="144" r="5" fill="#D93A6A" />
        <circle cx="183" cy="144" r="5" fill="#5B22E8" />

        {[
          ['#5B22E8', 194],
          ['#DA3A68', 214],
          ['#212121', 234],
          ['#5B22E8', 254],
          ['#DA3A68', 274],
          ['#212121', 294],
          ['#5B22E8', 314]
        ].map(([color, y], index) => (
          <g key={y}>
            <circle
              cx="163"
              cy={y}
              r="5"
              fill={color}
              data-svg-pulse
            />
            <rect
              x="178"
              y={y - 4}
              width={110 + index * 15}
              height="8"
              rx="4"
              fill={color}
            />
          </g>
        ))}

        <rect
          x="419"
          y="252"
          width="101"
          height="74"
          rx="8"
          fill="#E8E0CF"
          stroke="#CFC6B5"
          strokeWidth="2"
        />
        <rect x="434" y="268" width="26" height="6" rx="3" fill="#5B22E8" />
        <rect x="468" y="268" width="32" height="6" rx="3" fill="#D93A68" />
        <rect x="434" y="284" width="48" height="6" rx="3" fill="#222" />
        <rect x="434" y="300" width="62" height="6" rx="3" fill="#5B22E8" />

        <path
          d="M99 399H579L535 428H143Z"
          fill="#CFC6B5"
          stroke="#252124"
          strokeWidth="7"
        />
      </g>

      <g data-svg-float>
        <rect
          x="74"
          y="55"
          width="80"
          height="51"
          rx="17"
          fill="#1E1D1E"
        />
        <path d="M93 106L108 126L117 106Z" fill="#1E1D1E" />
        <rect x="92" y="72" width="45" height="5" rx="2.5" fill="#EDE6D6" />
        <rect x="92" y="84" width="32" height="5" rx="2.5" fill="#EDE6D6" />
      </g>

      <g data-svg-float>
        <rect
          x="531"
          y="171"
          width="91"
          height="54"
          rx="18"
          fill="#E83B69"
        />
        <path d="M551 225L538 243L567 225Z" fill="#E83B69" />
        <rect x="550" y="188" width="53" height="5" rx="2.5" fill="#F9E5E7" />
        <rect x="550" y="200" width="38" height="5" rx="2.5" fill="#F9E5E7" />
      </g>
    </svg>
  );
}
