export default function LogoIcon({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 38 L36 8 L68 38"
        stroke="#fff"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="28"
        y="38"
        width="16"
        height="22"
        rx="8"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2.8"
        fill="none"
      />
      <circle cx="36" cy="47" r="3.2" fill="#E4C252" />
      <line
        x1="36"
        y1="50.2"
        x2="36"
        y2="56"
        stroke="#E4C252"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="62"
        x2="60"
        y2="62"
        stroke="#E4C252"
        strokeWidth="1.5"
        opacity="0.35"
        strokeLinecap="round"
      />
    </svg>
  );
}
