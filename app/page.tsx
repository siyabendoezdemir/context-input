import { ContextInput } from "@/components/prompt-input/context-input";
import { WorkflowSteps } from "@/components/prompt-input/workflow-steps";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop: centered layout */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center gap-4 p-4">
        <div className="w-full max-w-[625px] space-y-4">
          <WorkflowSteps />
          <ContextInput 
            artifacts={[
              {
                icon: "/assets/presentation.svg",
                title: "Slack Q1 2024 Expense Analysis",
                iconAlt: "Presentation"
              }
            ]}
            connectedApps={[
              { id: "drive", name: "Google Drive", logo: "/assets/logos/drive.svg" },
              { id: "slack", name: "Slack", logo: "/assets/logos/slack.svg" },
              { id: "notion", name: "Notion", logo: "/assets/logos/notion.svg" },
              { id: "calendar", name: "Google Calendar", logo: "/assets/logos/calendar.svg" },
              { id: "github", name: "GitHub", logo: "/assets/logos/github.svg" }
            ]}
          />
        </div>
      </div>
      
      {/* Mobile: Fixed at bottom */}
      <div className="md:hidden flex flex-col justify-end min-h-screen">
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 space-y-4 shadow-lg">
          <WorkflowSteps />
          <ContextInput 
            artifacts={[
              {
                icon: "/assets/presentation.svg",
                title: "Slack Q1 2024 Expense Analysis",
                iconAlt: "Presentation"
              }
            ]}
            connectedApps={[
              { id: "drive", name: "Google Drive", logo: "/assets/logos/drive.svg" },
              { id: "slack", name: "Slack", logo: "/assets/logos/slack.svg" },
              { id: "notion", name: "Notion", logo: "/assets/logos/notion.svg" },
              { id: "calendar", name: "Google Calendar", logo: "/assets/logos/calendar.svg" },
              { id: "github", name: "GitHub", logo: "/assets/logos/github.svg" }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
