import React from 'react'

type StackedCardProps = {
  children?: React.ReactNode
  previewImage?: string
  stackCount?: number
  className?: string
  onClick?: () => void
}

export function StackedCard({ 
  children,
  previewImage,
  stackCount = 3, 
  className = '',
  onClick
}: StackedCardProps) {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {/* Background cards for stacking effect */}
      {Array.from({ length: stackCount - 1 }).map((_, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            width: '185.135px',
            height: '104.138px',
            transform: `translate(${(index + 1) * 6}px, ${(index + 1) * 6}px) rotate(0deg)`,
            flexShrink: 0,
            aspectRatio: '185.13/104.14',
            borderRadius: '4px',
            border: '0.5px solid rgba(20, 20, 20, 0.05)',
            background: 'lightgray',
            zIndex: -(index + 1),
            opacity: 1 - (index + 1) * 0.15
          }}
        />
      ))}
      
      {/* Main card */}
      <div 
        className="relative z-10"
        style={{
          width: '185.135px',
          height: '104.138px',
          transform: 'rotate(0deg)',
          flexShrink: 0,
          aspectRatio: '185.13/104.14',
          borderRadius: '4px',
          border: '0.5px solid rgba(20, 20, 20, 0.05)',
          background: previewImage 
            ? `url(${previewImage}) lightgray 50% / cover no-repeat`
            : 'lightgray',
          overflow: 'hidden'
        }}
      >
        {!previewImage && children}
      </div>
    </div>
  )
} 