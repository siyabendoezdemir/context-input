"use client"

import React from 'react'
import { ExampleCard } from './example-card'

type ExamplesGridProps = {
  className?: string
}

const exampleData = [
  {
    id: 1,
    title: "Create Q1 financial strategy doc",
    documentType: "document" as const,
    previewImage: undefined,
    integrationIcons: [
      "/assets/logos/drive.svg",
      "/assets/logos/slack.svg",
      "/assets/logos/notion.svg",
      "/assets/logos/calendar.svg",
      "/assets/logos/github.svg"
    ]
  },
  {
    id: 2,
    title: "Craft slides on the EcoTrack app",
    documentType: "presentation" as const,
    previewImage: undefined,
    integrationIcons: [
      "/assets/logos/slack.svg",
      "/assets/logos/drive.svg"
    ]
  },
  {
    id: 3,
    title: "Log new AI SAAS tools in sheet",
    documentType: "spreadsheet" as const,
    previewImage: undefined,
    integrationIcons: [
      "/assets/logos/slack.svg",
      "/assets/logos/drive.svg",
      "/assets/logos/notion.svg",
      "/assets/logos/calendar.svg"
    ]
  },
  {
    id: 4,
    title: "Customer feedback analysis report",
    documentType: "spreadsheet" as const,
    previewImage: undefined,
    integrationIcons: [
      "/assets/logos/notion.svg",
      "/assets/logos/slack.svg"
    ]
  },
  {
    id: 5,
    title: "Weekly team standup slides",
    documentType: "document" as const,
    previewImage: undefined,
    integrationIcons: [
      "/assets/logos/calendar.svg",
      "/assets/logos/slack.svg",
      "/assets/logos/drive.svg"
    ]
  },
  {
    id: 6,
    title: "Budget tracking spreadsheet",
    documentType: "presentation" as const,
    previewImage: undefined,
    integrationIcons: [
      "/assets/logos/drive.svg",
      "/assets/logos/notion.svg"
    ]
  }
]

export function ExamplesGrid({ className = '' }: ExamplesGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {exampleData.map((example) => (
        <ExampleCard
          key={example.id}
          title={example.title}
          documentType={example.documentType}
          previewImage={example.previewImage}
          integrationIcons={example.integrationIcons}
          onWatchReplay={() => console.log(`Watch replay: ${example.title}`)}
          onClick={() => console.log(`Clicked on ${example.title}`)}
        />
      ))}
    </div>
  )
} 