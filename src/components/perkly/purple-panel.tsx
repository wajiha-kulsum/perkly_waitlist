/**
 * The rounded purple panel with a notched top edge (the notch lets the black
 * ground show through so the nav sits on black). Exact path + gradient from the
 * source design. Fills its positioned wrapper edge-to-edge via
 * preserveAspectRatio="none" so the frame is full-bleed; the only give is an
 * imperceptible stretch of the corner radius / notch on a background shape.
 */
export function PurplePanel() {
  return (
    <svg
      viewBox="0 0 1372 1011"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient
          id="perkly-panel"
          gradientUnits="objectBoundingBox"
          x1="0.98"
          y1="0.01"
          x2="0"
          y2="0.97"
        >
          <stop offset="0" stopColor="#825ffe" />
          <stop offset="0.5" stopColor="#beacff" />
          <stop offset="1" stopColor="#825ffe" />
        </linearGradient>
      </defs>
      <path
        fillRule="nonzero"
        fill="url(#perkly-panel)"
        d="M1096.26 5.4C1101.3 1.885 1107.29 0 1113.43 0L1342 0C1358.57 0 1372 13.431 1372 30L1372 981C1372 997.569 1358.57 1011 1342 1011L30 1011C13.431 1011 0 997.569 0 981L0 30C0 13.431 13.431 0 30 0L255.663 0C261.118 0 266.469 1.487 271.141 4.301L323.202 35.657C327.875 38.471 333.226 39.958 338.68 39.958L1037.32 39.958C1043.46 39.958 1049.45 38.073 1054.49 34.558L1096.26 5.4Z"
      />
    </svg>
  );
}

/** Thin black L-bracket (top rule + right rule), inset inside the panel. */
export function Bracket() {
  return (
    <svg
      viewBox="0 0 1282 183"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[88px] right-[70px] top-[136px] h-[183px] w-auto"
    >
      <path d="M0 0L1282 0" stroke="#000000" vectorEffect="non-scaling-stroke" />
      <path d="M1282 0L1282 183" stroke="#000000" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
