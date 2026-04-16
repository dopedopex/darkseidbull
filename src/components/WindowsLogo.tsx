export function WindowsLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="1" width="8" height="8" rx="0.5" fill="#3B9BFF" />
      <rect x="11" y="1" width="8" height="8" rx="0.5" fill="#3B9BFF" />
      <rect x="1" y="11" width="8" height="8" rx="0.5" fill="#3B9BFF" />
      <rect x="11" y="11" width="8" height="8" rx="0.5" fill="#3B9BFF" />
    </svg>
  )
}
