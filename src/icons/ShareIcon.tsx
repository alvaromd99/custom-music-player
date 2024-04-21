interface ShareIconProps {
  dimensions: string
}

export function ShareIcon({ dimensions }: ShareIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={dimensions} height={dimensions} viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.015 15.809a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m11.97-6.529a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m0 11.97a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m-2.971-4.614l-6.028-2.742m6.126-6.312l-6.224 3.395" />
    </svg>
  )
}
