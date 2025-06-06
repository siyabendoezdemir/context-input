"use client"

import { Button } from "@/components/ui/button"

type QuickActionProps = {
  icon: string
  title: string
  description?: string
  onClick?: () => void
  className?: string
  iconAlt?: string
}

export function QuickAction({ 
  icon, 
  title, 
  description, 
  onClick, 
  className = "",
  iconAlt 
}: QuickActionProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`flex h-[36px] px-[10px] py-[4px] justify-center items-center gap-2 rounded-[8px] border-[0.5px] transition-all duration-200 hover:shadow-sm ${className}`}
      style={{
        border: '0.5px solid var(--border-emphasis-high, rgba(20, 20, 20, 0.20))',
        background: 'var(--Surface, #FFF)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--surface-container-low, rgb(248, 248, 248))'
        e.currentTarget.style.border = '0.5px solid var(--border-emphasis-high, rgba(20, 20, 20, 0.25))'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--Surface, #FFF)'
        e.currentTarget.style.border = '0.5px solid var(--border-emphasis-high, rgba(20, 20, 20, 0.20))'
      }}
    >
      {/* Icon */}
      <img 
        src={icon} 
        alt={iconAlt || title} 
        className="flex-shrink-0" 
        style={{
          width: '15px',
          height: '15px'
        }}
      />
      
      {/* Title */}
      <span 
        className="whitespace-nowrap"
        style={{
          color: 'var(--Text-secondary, #5D5D5D)',
          fontFamily: '"Suisse Int\'l"',
          fontSize: '13px',
          fontStyle: 'normal',
          fontWeight: 450,
          lineHeight: '24px',
          letterSpacing: '-0.13px'
        }}
      >
        {title}
      </span>
    </Button>
  )
} 