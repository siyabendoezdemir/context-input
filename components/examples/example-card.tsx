"use client"

import React from 'react'
import { DocumentTypeBadge } from './elements'

type ExampleCardProps = {
  title: string
  description?: string
  documentType?: 'document' | 'spreadsheet' | 'presentation'
  previewImage?: string
  integrationIcons?: string[]
  backgroundColor?: string
  className?: string
  onClick?: () => void
  onWatchReplay?: () => void
}

const backgroundColors = {
  document: 'rgba(95, 155, 233, 0.70)',
  spreadsheet: 'rgba(82, 173, 115, 0.69)',
  presentation: 'rgba(228, 143, 110, 0.81)'
}

const defaultPreviewImages = {
  document: '/assets/examples/documents.svg',
  spreadsheet: '/assets/examples/spreadsheets.svg',
  presentation: '/assets/examples/slides.svg'
}

export function ExampleCard({
  title,
  description,
  documentType = 'document',
  previewImage,
  integrationIcons = [],
  backgroundColor,
  className = '',
  onClick,
  onWatchReplay
}: ExampleCardProps) {
  const bgColor = backgroundColor || backgroundColors[documentType]
  const displayPreviewImage = previewImage || defaultPreviewImages[documentType]

  return (
    <div
      className={`overflow-hidden ${className}`}
            style={{ 
        display: 'flex',
        width: '100%',
        paddingBottom: '8.597px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '7.164px',
        borderRadius: '11.462px',
        background: '#FFF',
        boxShadow: '0px 0px 0px 0.358px rgba(20, 20, 20, 0.20), 0px 0.716px 1.433px 0px rgba(20, 20, 20, 0.03), 0px 5.731px 7.88px 0px rgba(20, 20, 20, 0.02)'
      }}
    >
      {/* Colored background section */}
      <div
        className="relative w-full"
        style={{ backgroundColor: bgColor }}
      >
        {/* Header with document type badge */}
        <div className="p-4 pb-2">
          <DocumentTypeBadge type={documentType} />
        </div>

        {/* Preview section with stacked cards positioned bottom right */}
        <div className="relative h-28">
          <div className="absolute bottom-0 -right-6">
            {/* Stacked cards effect */}
            <div className="relative">
              {/* Background cards - stacking towards top right */}
              <div
                className="absolute"
                style={{
                  width: '185.135px',
                  height: '104.138px',
                  transform: 'translate(46px, -20px)',
                  borderRadius: '4px 4px 0 0',
                  background: `url(${displayPreviewImage}) 50% / cover no-repeat`,
                  zIndex: 1
                }}
              ></div>
              <div
                className="absolute"
                style={{
                  width: '185.135px',
                  height: '104.138px',
                  transform: 'translate(24px, -11px)',
                  borderRadius: '4px 4px 0 0',
                  background: `url(${displayPreviewImage}) 50% / cover no-repeat`,
                  zIndex: 2
                }}
              ></div>

              {/* Main card - front, left bottom position */}
              <div
                className="relative"
                style={{
                  width: '185.135px',
                  height: '104.138px',
                  borderRadius: '4px 4px 0 0',
                  background: `url(${displayPreviewImage}) 50% / cover no-repeat`,
                  zIndex: 3,
                  overflow: 'hidden'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

              {/* Main card content */}
        <div className="bg-white w-full" style={{ display: 'flex', flexDirection: 'column', gap: '7.36px', padding: '7.36px 16px 8.6px 16px' }}>
                    {/* Title and integration icons */}
          <div className="flex items-start">
            <h3 
              style={{
                color: 'rgba(20, 20, 20, 0.80)',
                fontFamily: '"Suisse Int\'l"',
                fontSize: '10.03px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '13.612px'
              }}
            >
              {title}
            </h3>
            {integrationIcons.length > 0 && (
              <div className="flex items-center" style={{ marginLeft: 'auto' }}>
              {integrationIcons.slice(0, 2).map((icon, index) => (
                <div 
                  key={index} 
                  style={{
                    display: 'flex',
                    width: '15px',
                    height: '14.4px',
                    padding: '0.6px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '6px',
                    borderRadius: '4px',
                    border: '0.4px solid rgba(20, 20, 20, 0.05)',
                    background: '#FFF',
                    marginLeft: index > 0 ? '-4px' : '0',
                    zIndex: index + 1
                  }}
                >
                  <img 
                    src={icon} 
                    alt="" 
                    style={{
                      width: '8.4px',
                      height: '8.4px',
                      flexShrink: 0,
                      aspectRatio: '8.40/8.40'
                    }}
                  />
                </div>
              ))}
              {integrationIcons.length > 2 && (
                <div 
                  style={{
                    display: 'flex',
                    width: '15px',
                    height: '14.4px',
                    padding: '0.6px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '6px',
                    borderRadius: '4px',
                    border: '0.4px solid rgba(20, 20, 20, 0.05)',
                    background: '#FFF',
                    fontSize: '6px',
                    fontWeight: '500',
                    color: 'rgba(20, 20, 20, 0.60)',
                    marginLeft: '-4px',
                    zIndex: 10
                  }}
                >
                  +{integrationIcons.length - 2}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Watch replay button */}
        <button
          onClick={onWatchReplay}
          style={{
            display: 'flex',
            width: '100%',
            padding: '5.731px 8.597px 5.731px 7.164px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            alignSelf: 'stretch',
            borderRadius: '5.731px',
            background: 'rgba(20, 20, 20, 0.05)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <svg 
            style={{
              width: '11px',
              height: '11px'
            }}
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span
            style={{
              color: '#141414',
              fontFamily: '"Suisse Int\'l"',
              fontSize: '10.03px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal'
            }}
          >
            Watch replay
          </span>
        </button>
      </div>
    </div>
  )
} 