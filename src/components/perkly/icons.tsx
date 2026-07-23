import type { SVGProps } from "react";

/** Perkly wordmark — exact vector from the source design (110×37). */
export function PerklyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 110 37" width="110" height="37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25.142 24.311V12.442L35.733 1.939V34.814L25.142 24.311Z" fill="currentColor" />
      <path d="M22.56 10.503H10.591L0 0H33.151L22.56 10.503Z" fill="currentColor" />
      <path d="M22.56 26.497H10.591L0 37H33.151L22.56 26.497Z" fill="currentColor" />
      <path d="M52.46 11.329C56.603 11.329 58.866 13.084 58.866 16.349C58.866 19.592 56.447 21.569 52.325 21.569H48.629V26.656H44.888V11.329H52.46ZM52.236 18.459C53.848 18.459 54.968 17.993 54.968 16.438C54.968 14.883 53.938 14.439 52.236 14.439H48.629V18.459H52.236Z" fill="currentColor" />
      <path d="M70.79 22.191H62.95C62.883 23.346 63.846 24.234 65.168 24.234C66.378 24.234 67.027 23.657 66.96 23.013H70.589C70.566 25.101 68.707 26.878 65.146 26.878C61.539 26.878 59.143 24.901 59.143 21.102C59.143 17.348 61.987 15.327 65.168 15.327C68.55 15.327 70.79 17.304 70.79 21.08V22.191ZM65.123 18.059C63.981 18.059 63.286 18.659 63.085 19.903H66.96C66.848 18.592 66.154 18.059 65.123 18.059Z" fill="currentColor" />
      <path d="M78.656 15.327C78.88 15.327 79.216 15.327 79.44 15.371V18.881C79.015 18.815 78.567 18.792 78.186 18.792C77.178 18.792 76.327 19.37 75.924 20.769V26.656H72.205V15.549H75.812V17.037C76.484 15.927 77.492 15.327 78.656 15.327Z" fill="currentColor" />
      <path d="M88.033 26.656L85.48 22.191L84.225 23.413V26.656H80.507V9.996H84.225V19.348L87.854 15.549H92.177L88.101 19.881L92.222 26.656H88.033Z" fill="currentColor" />
      <path d="M92.878 26.656V9.996H96.596V26.656H92.878Z" fill="currentColor" />
      <path d="M106.125 15.549H110L105.655 26.3L103.773 31.409H99.965L101.824 26.922L97.255 15.549H101.264L102.765 20.303C102.989 20.991 103.37 22.413 103.661 23.457C103.952 22.413 104.333 20.969 104.557 20.303L106.125 15.549Z" fill="currentColor" />
    </svg>
  );
}

/** Diagonal up-right arrow used in the email send button (24×24). */
export function SendArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Calendar glyph next to "Left until full release" (24×19.45). */
export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 19.45" width="24" height="19.45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 1.621V4.863" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 1.621V4.863" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 3.242H19C20.105 3.242 21 3.968 21 4.863V16.212C21 17.107 20.105 17.833 19 17.833H5C3.895 17.833 3 17.107 3 16.212V4.863C3 3.968 3.895 3.242 5 3.242Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11.348H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
