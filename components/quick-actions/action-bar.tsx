"use client"

import { QuickAction } from "./elements"

export function ActionBar() {
  const actions = [
    {
      id: "drive",
      icon: "/assets/icons/folder.svg",
      title: "Drive",
      onClick: () => console.log("Drive clicked")
    },
    {
      id: "document",
      icon: "/assets/icons/document.svg", 
      title: "Document",
      onClick: () => console.log("Document clicked")
    },
    {
      id: "presentation",
      icon: "/assets/icons/presentation.svg",
      title: "Presentation", 
      onClick: () => console.log("Presentation clicked")
    },
    {
      id: "spreadsheet",
      icon: "/assets/icons/spreadsheet.svg",
      title: "Spreadsheet",
      onClick: () => console.log("Spreadsheet clicked")
    }
  ]

  return (
    <div className="w-full max-w-[625px] flex justify-center">
      <div className="flex items-center gap-3 md:gap-4">
        {actions.map((action) => (
          <QuickAction
            key={action.id}
            icon={action.icon}
            title={action.title}
            onClick={action.onClick}
          />
        ))}
      </div>
    </div>
  )
}
