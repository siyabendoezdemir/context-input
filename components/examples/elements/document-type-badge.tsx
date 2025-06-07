import React from 'react'

type DocumentType = 'document' | 'spreadsheet' | 'presentation'

type DocumentTypeBadgeProps = {
  type: DocumentType
  className?: string
}

const documentTypeConfig = {
  document: {
    label: 'Documents',
    icon: '/assets/document-types/document.svg'
  },
  spreadsheet: {
    label: 'Spreadsheet',
    icon: '/assets/document-types/spreadsheet.svg'
  },
  presentation: {
    label: 'Presentation',
    icon: '/assets/document-types/presentation.svg'
  }
}

export function DocumentTypeBadge({ type, className = '' }: DocumentTypeBadgeProps) {
  const config = documentTypeConfig[type]

  return (
    <div 
      className={`inline-flex items-center bg-white ${className}`}
      style={{
        padding: '4.298px 8.597px 4.298px 7.164px',
        gap: '4.298px',
        borderRadius: '5.731px',
        border: '0.358px solid rgba(20, 20, 20, 0.10)'
      }}
    >
      <img 
        src={config.icon} 
        alt={config.label}
        style={{
          width: '10.03px',
          height: '10.03px',
          aspectRatio: '10.03/10.03'
        }}
      />
      <span
        style={{
          color: 'rgba(20, 20, 20, 0.60)',
          fontFamily: '"Suisse Int\'l"',
          fontSize: '10.03px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal'
        }}
      >
        {config.label}
      </span>
    </div>
  )
} 