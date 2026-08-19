import { brandTokens } from "@ssh/brand-ui";
import styles from "./EngineeringOrbitScene.module.css";

export default function EngineeringOrbitScene() {
  const signal = brandTokens.color.primary.main;
  const supporting = brandTokens.color.text.secondary;
  const paper = brandTokens.color.text.primary;
  const field = brandTokens.color.secondary.dark;

  return (
    <svg
      className={styles.scene}
      viewBox="0 0 720 620"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M70 392C168 204 442 101 648 198C730 237 684 344 529 391C370 440 179 457 70 392Z"
        fill="none"
        stroke={supporting}
        strokeOpacity="0.34"
        strokeWidth="1.25"
        className={styles.orbitPrimary}
      />
      <path
        d="M98 475C242 542 529 486 647 303C689 239 634 183 532 179"
        fill="none"
        stroke={signal}
        strokeOpacity="0.42"
        strokeWidth="1.5"
        className={styles.orbitSecondary}
      />
      <path
        d="M46 456C201 304 407 236 668 235"
        fill="none"
        stroke={field}
        strokeOpacity="0.6"
        strokeWidth="1"
      />

      <g className={styles.satellite}>
        <g transform="translate(455 106) rotate(13)">
          <rect
            x="-42"
            y="-24"
            width="84"
            height="48"
            rx="8"
            fill={brandTokens.color.background.paper}
            stroke={paper}
            strokeWidth="2"
          />
          <rect
            x="-136"
            y="-34"
            width="82"
            height="68"
            rx="3"
            fill={field}
            stroke={signal}
            strokeWidth="2"
          />
          <rect
            x="54"
            y="-34"
            width="82"
            height="68"
            rx="3"
            fill={field}
            stroke={signal}
            strokeWidth="2"
          />
          {[-109, -82].map((x) => (
            <line
              key={x}
              x1={x}
              y1="-34"
              x2={x}
              y2="34"
              stroke={supporting}
              strokeOpacity="0.55"
            />
          ))}
          {[81, 108].map((x) => (
            <line
              key={x}
              x1={x}
              y1="-34"
              x2={x}
              y2="34"
              stroke={supporting}
              strokeOpacity="0.55"
            />
          ))}
          <line x1="-136" y1="0" x2="-54" y2="0" stroke={supporting} strokeOpacity="0.55" />
          <line x1="54" y1="0" x2="136" y2="0" stroke={supporting} strokeOpacity="0.55" />
          <path
            d="M-20 24C-12 50 12 50 20 24"
            fill="none"
            stroke={paper}
            strokeWidth="2"
          />
          <circle cx="0" cy="0" r="9" fill={signal} />
        </g>
      </g>

      <g className={styles.rocket} transform="translate(211 270) rotate(-43)">
        <path
          d="M0-31C17-19 20 12 0 31C-20 12-17-19 0-31Z"
          fill={brandTokens.color.background.paper}
          stroke={paper}
          strokeWidth="2"
        />
        <circle cx="0" cy="-7" r="6" fill={signal} />
        <path d="M-14 14L-27 28L-9 24Z" fill={field} stroke={signal} strokeWidth="1.5" />
        <path d="M14 14L27 28L9 24Z" fill={field} stroke={signal} strokeWidth="1.5" />
        <path d="M-5 31L0 48L5 31" fill="none" stroke={signal} strokeWidth="2" />
      </g>

      <g className={styles.robotArm} transform="translate(433 320)">
        <path d="M52 210H198L180 181H72Z" fill={field} stroke={supporting} strokeWidth="2" />
        <circle cx="112" cy="164" r="27" fill={brandTokens.color.background.paper} stroke={paper} strokeWidth="2" />
        <circle cx="112" cy="164" r="10" fill={signal} />
        <path
          d="M112 164L68 92"
          stroke={paper}
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M112 164L68 92"
          stroke={field}
          strokeWidth="20"
          strokeLinecap="round"
        />
        <circle cx="68" cy="92" r="23" fill={brandTokens.color.background.paper} stroke={paper} strokeWidth="2" />
        <circle cx="68" cy="92" r="9" fill={signal} />
        <path
          d="M68 92L139 43"
          stroke={paper}
          strokeWidth="25"
          strokeLinecap="round"
        />
        <path
          d="M68 92L139 43"
          stroke={field}
          strokeWidth="17"
          strokeLinecap="round"
        />
        <circle cx="139" cy="43" r="19" fill={brandTokens.color.background.paper} stroke={paper} strokeWidth="2" />
        <path d="M150 31L183 10" stroke={paper} strokeWidth="11" strokeLinecap="round" />
        <path d="M181 9L198 2M181 9L198 18" stroke={signal} strokeWidth="4" strokeLinecap="round" />
      </g>

      {[
        { cx: 94, cy: 393 },
        { cx: 530, cy: 390 },
        { cx: 647, cy: 303 },
      ].map((node) => (
        <g key={`${node.cx}-${node.cy}`} className={`${styles.signal} ${styles.signalNode}`}>
          <circle cx={node.cx} cy={node.cy} r="12" fill={brandTokens.color.background.paper} stroke={supporting} strokeWidth="1.5" />
          <circle cx={node.cx} cy={node.cy} r="5" fill={signal} />
        </g>
      ))}

      <path
        d="M407 620C448 529 530 479 620 479C664 479 698 490 720 506V620Z"
        fill={brandTokens.color.background.paper}
        stroke={field}
        strokeWidth="2"
      />
      <path
        d="M471 557C525 524 589 513 666 529"
        fill="none"
        stroke={field}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
