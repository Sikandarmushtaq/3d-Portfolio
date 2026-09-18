const palettes = {
  seo: ["#754AF0", "#D83F96"],
  local: ["#7B50F5", "#D83F96"],
  landing: ["#6F49EE", "#E04B9B"],
  cro: ["#7A51F2", "#D83F96"],
  ppc: ["#754AF0", "#E24494"],
  socialAds: ["#8256F6", "#DA3D91"],
  lead: ["#7448F0", "#D83F96"],
  remarketing: ["#7A50F4", "#D63B91"],
  social: ["#7D52F3", "#E04698"],
  email: ["#7249EC", "#D83F96"],
  brand: ["#8053F5", "#DA4194"],
  automation: ["#7148ED", "#DE4398"]
};

function CoreIcon({ service, x = 340, y = 235, light = false }) {
  const stroke = light ? "#18141D" : "#FFFFFF";

  if (service === "local") {
    return (
      <g>
        <path d={`M ${x} ${y - 30} C ${x - 21} ${y - 30} ${x - 34} ${y - 14} ${x - 34} ${y + 4} C ${x - 34} ${y + 28} ${x} ${y + 58} ${x} ${y + 58} C ${x} ${y + 58} ${x + 34} ${y + 28} ${x + 34} ${y + 4} C ${x + 34} ${y - 14} ${x + 21} ${y - 30} ${x} ${y - 30} Z`} fill="none" stroke={stroke} strokeWidth="7" />
        <circle cx={x} cy={y + 4} r="11" fill={stroke} />
      </g>
    );
  }

  if (service === "email") {
    return (
      <g>
        <rect x={x - 42} y={y - 27} width="84" height="56" rx="8" fill="none" stroke={stroke} strokeWidth="7" />
        <path d={`M ${x - 36} ${y - 18} L ${x} ${y + 7} L ${x + 36} ${y - 18}`} fill="none" stroke={stroke} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (service === "brand") {
    return (
      <g>
        <circle cx={x} cy={y} r="35" fill="none" stroke={stroke} strokeWidth="7" />
        <circle cx={x} cy={y} r="13" fill={stroke} />
        <path d={`M ${x - 47} ${y + 41} L ${x + 47} ${y + 41}`} stroke={stroke} strokeWidth="7" strokeLinecap="round" />
      </g>
    );
  }

  if (service === "landing") {
    return (
      <g>
        <rect x={x - 47} y={y - 36} width="94" height="72" rx="8" fill="none" stroke={stroke} strokeWidth="7" />
        <path d={`M ${x - 47} ${y - 17} H ${x + 47}`} stroke={stroke} strokeWidth="7" />
        <rect x={x - 28} y={y - 1} width="55" height="9" rx="4.5" fill={stroke} />
        <rect x={x - 17} y={y + 17} width="34" height="10" rx="5" fill={stroke} opacity="0.7" />
      </g>
    );
  }

  if (service === "cro") {
    return (
      <g>
        <path d={`M ${x - 47} ${y + 29} L ${x - 15} ${y + 3} L ${x + 8} ${y + 14} L ${x + 45} ${y - 31}`} fill="none" stroke={stroke} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d={`M ${x + 23} ${y - 31} H ${x + 45} V ${y - 9}`} fill="none" stroke={stroke} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (service === "ppc" || service === "socialAds") {
    return (
      <g>
        <path d={`M ${x - 43} ${y + 20} L ${x - 12} ${y + 20} L ${x + 30} ${y + 42} L ${x + 30} ${y - 42} L ${x - 12} ${y - 20} L ${x - 43} ${y - 20} Z`} fill="none" stroke={stroke} strokeWidth="7" strokeLinejoin="round" />
        <path d={`M ${x - 15} ${y + 24} L ${x - 5} ${y + 48}`} stroke={stroke} strokeWidth="7" strokeLinecap="round" />
      </g>
    );
  }

  if (service === "lead") {
    return (
      <g>
        <path d={`M ${x - 47} ${y - 35} H ${x + 47} L ${x + 18} ${y + 3} V ${y + 39} H ${x - 18} V ${y + 3} Z`} fill="none" stroke={stroke} strokeWidth="7" strokeLinejoin="round" />
        <circle cx={x} cy={y - 15} r="8" fill={stroke} />
      </g>
    );
  }

  if (service === "remarketing") {
    return (
      <g>
        <path d={`M ${x - 35} ${y - 12} A 39 39 0 1 1 ${x - 5} ${y + 39}`} fill="none" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
        <path d={`M ${x - 40} ${y - 31} L ${x - 38} ${y - 7} L ${x - 14} ${y - 15}`} fill="none" stroke={stroke} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={x + 3} cy={y} r="10" fill={stroke} />
      </g>
    );
  }

  if (service === "social") {
    return (
      <g>
        <circle cx={x} cy={y} r="30" fill="none" stroke={stroke} strokeWidth="7" />
        <circle cx={x - 32} cy={y - 26} r="10" fill={stroke} />
        <circle cx={x + 38} cy={y - 8} r="10" fill={stroke} />
        <circle cx={x - 18} cy={y + 40} r="10" fill={stroke} />
        <path d={`M ${x - 23} ${y - 20} L ${x - 9} ${y - 8} M ${x + 29} ${y - 6} L ${x + 18} ${y - 3} M ${x - 14} ${y + 29} L ${x - 7} ${y + 18}`} stroke={stroke} strokeWidth="6" strokeLinecap="round" />
      </g>
    );
  }

  if (service === "automation") {
    return (
      <g>
        <circle cx={x} cy={y} r="20" fill={stroke} />
        <circle cx={x} cy={y} r="43" fill="none" stroke={stroke} strokeWidth="7" strokeDasharray="14 9" />
        <path d={`M ${x} ${y - 58} V ${y - 43} M ${x} ${y + 43} V ${y + 58} M ${x - 58} ${y} H ${x - 43} M ${x + 43} ${y} H ${x + 58}`} stroke={stroke} strokeWidth="7" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g>
      <circle cx={x} cy={y} r="38" fill="none" stroke={stroke} strokeWidth="7" />
      <circle cx={x} cy={y} r="13" fill={stroke} />
      <path d={`M ${x - 55} ${y + 45} L ${x - 15} ${y + 10} L ${x + 12} ${y + 24} L ${x + 54} ${y - 36}`} fill="none" stroke={stroke} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

export default function MarketingServiceVisual({
  service = "seo",
  mode = "platform",
  label = "Marketing system"
}) {
  const [purple, pink] = palettes[service] || palettes.seo;

  if (mode === "network") {
    return (
      <svg className="service-page-svg" viewBox="0 0 680 480" role="img" aria-label={label}>
        <rect x="20" y="20" width="640" height="440" rx="18" fill="#45103B" />
        <circle cx="580" cy="90" r="92" fill={pink} opacity="0.18" />
        <circle cx="98" cy="390" r="100" fill={purple} opacity="0.16" />
        <g data-svg-float>
          <circle cx="340" cy="235" r="83" fill="#18141D" />
          <circle cx="340" cy="235" r="57" fill={purple} />
          <CoreIcon service={service} />
        </g>
        <path data-svg-flow d="M275 201 C228 168 199 143 157 124" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="9 9" opacity="0.58" />
        <path data-svg-flow d="M405 201 C452 168 481 143 523 124" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="9 9" opacity="0.58" />
        <path data-svg-flow d="M275 271 C229 301 200 328 158 353" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="9 9" opacity="0.58" />
        <path data-svg-flow d="M405 271 C452 301 481 328 522 353" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="9 9" opacity="0.58" />
        {[{x:76,y:80,c:'#F1ECE8',dark:true},{x:444,y:80,c:purple},{x:76,y:307,c:pink},{x:444,y:307,c:'#18141D'}].map((n, i) => (
          <g data-svg-float key={i}>
            <rect x={n.x} y={n.y} width="160" height="96" rx="18" fill={n.c} />
            <circle cx={n.x + 34} cy={n.y + 46} r="16" fill={n.dark ? purple : '#FFFFFF'} />
            <rect x={n.x + 62} y={n.y + 33} width="72" height="8" rx="4" fill={n.dark ? '#18141D' : '#FFFFFF'} />
            <rect x={n.x + 62} y={n.y + 55} width="48" height="6" rx="3" fill={n.dark ? '#18141D' : '#FFFFFF'} opacity="0.4" />
          </g>
        ))}
      </svg>
    );
  }

  if (mode === "process") {
    return (
      <svg className="service-page-svg" viewBox="0 0 680 480" role="img" aria-label={label}>
        <rect x="20" y="20" width="640" height="440" rx="18" fill="#45103B" />
        <circle cx="90" cy="92" r="82" fill={purple} opacity="0.17" />
        <circle cx="584" cy="390" r="102" fill={pink} opacity="0.17" />
        <path data-svg-flow d="M101 240 H579" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="11 11" opacity="0.58" />
        {[['01','#F1ECE8','#18141D'],['02',purple,'#FFFFFF'],['03',pink,'#FFFFFF'],['04','#F1ECE8','#18141D']].map((s, i) => { const x=102+i*158; return (
          <g data-svg-float key={s[0]}>
            <circle cx={x} cy="240" r="42" fill={s[1]} />
            <text x={x} y="248" textAnchor="middle" fontSize="21" fontWeight="700" fill={s[2]}>{s[0]}</text>
          </g>
        );})}
        <g data-svg-float>
          <rect x="219" y="388" width="242" height="35" rx="17.5" fill="#18141D" />
          <rect x="235" y="400" width="151" height="11" rx="5.5" fill={purple} />
          <circle data-svg-pulse cx="434" cy="406" r="7" fill={pink} />
        </g>
      </svg>
    );
  }

  if (mode === "faq") {
    return (
      <svg className="service-page-svg" viewBox="0 0 680 480" role="img" aria-label={label}>
        <rect x="20" y="20" width="640" height="440" rx="18" fill="#45103B" />
        <circle cx="579" cy="91" r="89" fill={pink} opacity="0.2" />
        <circle cx="96" cy="391" r="96" fill={purple} opacity="0.16" />
        <g data-svg-float>
          <rect x="135" y="82" width="410" height="309" rx="18" fill="#F1ECE8" />
          <rect x="135" y="82" width="410" height="38" rx="18" fill="#DDD5E4" />
          <circle cx="157" cy="101" r="5" fill={pink} />
          <circle cx="175" cy="101" r="5" fill={purple} />
          {[149,228,307].map((y,i)=>(
            <g key={y}>
              <rect x="165" y={y} width="350" height="61" rx="13" fill={i===1 ? '#DDD5E4' : '#18141D'} />
              <circle cx="195" cy={y+30} r="15" fill={i===1 ? pink : purple} />
              <text x="195" y={y+38} textAnchor="middle" fontSize="21" fontWeight="700" fill="#FFFFFF">?</text>
              <rect x="223" y={y+16} width={i===1 ? 181 : 154} height="8" rx="4" fill={i===1 ? '#18141D' : '#FFFFFF'} />
              <rect x="223" y={y+36} width={i===1 ? 129 : 108} height="5" rx="2.5" fill={i===1 ? '#18141D' : '#FFFFFF'} opacity="0.38" />
            </g>
          ))}
        </g>
        <g data-svg-float>
          <circle cx="573" cy="356" r="40" fill={purple} />
          <CoreIcon service={service} x={573} y={356} />
        </g>
      </svg>
    );
  }

  return (
    <svg className="service-page-svg" viewBox="0 0 680 480" role="img" aria-label={label}>
      <rect x="20" y="20" width="640" height="440" rx="18" fill="#45103B" />
      <circle cx="579" cy="92" r="91" fill={pink} opacity="0.2" />
      <circle cx="95" cy="390" r="98" fill={purple} opacity="0.16" />
      <g data-svg-float>
        <rect x="92" y="76" width="496" height="327" rx="19" fill="#F1ECE8" />
        <rect x="92" y="76" width="496" height="40" rx="19" fill="#DDD5E4" />
        <circle cx="115" cy="96" r="5" fill={pink} />
        <circle cx="133" cy="96" r="5" fill={purple} />
        <rect x="120" y="143" width="165" height="231" rx="14" fill="#18141D" />
        <circle cx="202" cy="191" r="39" fill={purple} />
        <CoreIcon service={service} x={202} y={191} />
        <rect x="150" y="258" width="105" height="9" rx="4.5" fill="#FFFFFF" />
        <rect x="150" y="284" width="74" height="6" rx="3" fill="#FFFFFF" opacity="0.4" />
        <rect x="150" y="315" width="105" height="9" rx="4.5" fill="#FFFFFF" />
        <rect x="150" y="341" width="62" height="6" rx="3" fill="#FFFFFF" opacity="0.4" />
        <rect x="309" y="143" width="251" height="101" rx="14" fill={purple} />
        <rect x="333" y="167" width="101" height="9" rx="4.5" fill="#FFFFFF" />
        <rect x="333" y="192" width="68" height="6" rx="3" fill="#FFFFFF" opacity="0.55" />
        <circle data-svg-pulse cx="516" cy="193" r="22" fill="#FFFFFF" />
        <circle cx="516" cy="193" r="8" fill={pink} />
        <rect x="309" y="264" width="117" height="110" rx="14" fill="#DFD7E4" />
        <rect x="330" y="286" width="77" height="8" rx="4" fill="#18141D" />
        <rect x="330" y="313" width="22" height="41" rx="6" fill={purple} />
        <rect x="361" y="328" width="22" height="26" rx="6" fill={pink} />
        <rect x="392" y="300" width="22" height="54" rx="6" fill={purple} />
        <rect x="443" y="264" width="117" height="110" rx="14" fill={pink} />
        <circle cx="501" cy="307" r="20" fill="#FFFFFF" />
        <rect x="474" y="340" width="54" height="7" rx="3.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
