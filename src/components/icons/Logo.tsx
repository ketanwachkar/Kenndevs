import type { SVGProps } from 'react';
import { COMPANY_NAME } from '@/lib/constants';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="150"
    height="40"
    viewBox="0 0 150 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Space Grotesk, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="url(#logoGradient)"
    >
      {COMPANY_NAME}
    </text>
  </svg>
);

export default Logo;
