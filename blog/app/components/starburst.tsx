// 8-point starburst from the palm card. Decorative only.
export function Starburst({ className = '', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <polygon
        fill={fill}
        points="50,0 62.2,20.6 85.4,14.6 79.4,37.8 100,50 79.4,62.2 85.4,85.4 62.2,79.4 50,100 37.8,79.4 14.6,85.4 20.6,62.2 0,50 20.6,37.8 14.6,14.6 37.8,20.6"
      />
    </svg>
  )
}
