"use client"

import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

type Artifact = {
  icon: string
  title: string
  iconAlt?: string
  id?: string
}

type ContextInputProps = {
  artifacts?: Array<Artifact>
}

export function ContextInput({ artifacts = [] }: ContextInputProps) {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [dynamicArtifacts, setDynamicArtifacts] = useState<Artifact[]>([])
  const [newArtifactId, setNewArtifactId] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Combine prop artifacts with dynamic artifacts
  const allArtifacts = [...artifacts, ...dynamicArtifacts]

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const artifactId = Date.now().toString()

      const newArtifact: Artifact = {
        id: artifactId,
        icon: "/assets/presentation.svg", // Use the same icon for all files
        title: file.name,
        iconAlt: "Attachment"
      }

      setDynamicArtifacts(prev => [...prev, newArtifact])
      setNewArtifactId(artifactId)
      
      // Clear the animation state after animation completes
      setTimeout(() => setNewArtifactId(null), 500)
    }
    
    // Clear the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleRemoveArtifact = (artifactId: string) => {
    setDynamicArtifacts(prev => prev.filter(artifact => artifact.id !== artifactId))
  }

  const handlePlusClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="w-full max-w-[625px] h-[120px] md:h-[144px] border border-[rgba(20,20,20,0.05)] shadow-[0px_0px_0.5px_0.5px_rgba(20,20,20,0.18),inset_0px_0px_7px_-3px_#FFFFFF,0px_2px_4px_rgba(20,20,20,0.04),0px_16px_22px_rgba(20,20,20,0.03)] rounded-2xl bg-white">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileUpload}
        className="hidden"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif"
      />
      {/* Main content container */}
      <div className="h-full flex flex-col p-3 md:p-4">
        
        {/* Attached File Card - Only show if artifacts exist */}
        {allArtifacts.length > 0 && (
          <div className="mb-2 md:mb-3">
            <div className="flex flex-row items-center gap-2 w-full flex-wrap">
              {allArtifacts.map((artifact, index) => (
                <div 
                  key={artifact.id || index} 
                  className={`group relative flex flex-row items-center min-w-fit max-w-[280px] h-[24px] md:h-[28px] pt-[3px] md:pt-[4px] pr-[6px] md:pr-[8px] pb-[3px] md:pb-[4px] pl-[6px] md:pl-[8px] gap-[3px] md:gap-[4px] rounded-[6px] md:rounded-[8px] border-[0.5px] border-[rgba(20,20,20,0.05)] bg-[rgba(252,243,240,0.75)] flex-none transition-all duration-300 ease-out ${
                    artifact.id === newArtifactId 
                      ? 'animate-[artifactSlideIn_0.5s_ease-out] scale-100' 
                      : 'scale-100'
                  }`}
                >
                  <img src={artifact.icon} alt={artifact.iconAlt || "Artifact"} className="w-[12px] md:w-[14px] h-[12px] md:h-[14px] flex-shrink-0" />
                  <span className="font-[500] text-[10px] md:text-[12px] leading-[18px] md:leading-[20px] tracking-[-0.09px] text-[#D9592A] truncate pr-1" style={{fontFamily: "'Suisse Int\\'l'"}}>{artifact.title}</span>
                  
                  {/* Remove button - only show for dynamic artifacts and on hover */}
                  {artifact.id && (
                    <button
                      onClick={() => handleRemoveArtifact(artifact.id!)}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-white border border-gray-300 text-gray-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50 hover:border-gray-400 text-[10px] leading-none shadow-sm"
                      aria-label="Remove attachment"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Input Area - top row */}
        <div className={`flex-1 flex mb-3 md:mb-4 ${allArtifacts.length === 0 ? 'items-start pt-0' : 'items-center'}`}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message or command..."
            className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSubmit()
              }
            }}
          />
        </div>

        {/* Bottom row with controls */}
        <div className="flex items-center justify-between w-full">
          
          {/* Left section with buttons and status */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 md:h-8 md:w-8 rounded text-gray-600 hover:bg-gray-100"
                onClick={handlePlusClick}
              >
                <img src="/assets/icons/plus.svg" alt="Attach file" className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 md:h-8 md:w-8 rounded text-gray-600 hover:bg-gray-100">
                <img src="/assets/icons/monitor.svg" alt="Monitor" className="h-3 w-3 md:h-4 md:w-4" />
              </Button>
              <Button variant="ghost" className="h-6 md:h-8 px-2 md:px-3 rounded text-gray-600 hover:bg-gray-100 flex items-center gap-1 md:gap-2">
                <img src="/assets/icons/dashboard.svg" alt="Dashboard" className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">Effort</span>
              </Button>
            </div>

            {/* Connected Status */}
            <div className="group flex items-center cursor-pointer">
              <div className="flex items-center gap-1 md:gap-2 transition-colors duration-200 group-hover:text-gray-800">
                <img src="/assets/icons/blocks.svg" alt="Blocks" className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800">5 connected</span>
              </div>
              
              {/* Profile Dots - Hidden by default, expand on hover */}
              <div className="overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[64px] group-hover:md:w-[79px] group-hover:ml-[3px] group-hover:md:ml-[4px] w-0 ml-0">
                <div className="flex items-center -space-x-1">
                  <div className="w-[20px] md:w-[25px] h-[20px] md:h-[24px] gap-[10px] rounded-[100px] border-[0.5px] p-[1px] bg-white border-[#1414140D] flex items-center justify-center">
                    <img src="/assets/logos/drive.svg" alt="Google Drive" className="w-[12px] md:w-[14px] h-[12px] md:h-[14px]" />
                  </div>
                  <div className="w-[20px] md:w-[25px] h-[20px] md:h-[24px] gap-[10px] rounded-[100px] border-[0.5px] p-[1px] bg-white border-[#1414140D] flex items-center justify-center">
                    <img src="/assets/logos/slack.svg" alt="Slack" className="w-[12px] md:w-[14px] h-[12px] md:h-[14px]" />
                  </div>
                  <div className="w-[20px] md:w-[25px] h-[20px] md:h-[24px] gap-[10px] rounded-[100px] border-[0.5px] p-[1px] bg-white border-[#1414140D] flex items-center justify-center text-gray-400 text-[10px] md:text-xs font-medium">
                    +3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right section with mic/send button */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className={`w-[30px] md:w-[36px] h-[30px] md:h-[36px] pt-[5px] md:pt-[6px] pr-[6px] md:pr-[8px] pb-[5px] md:pb-[6px] pl-[6px] md:pl-[8px] gap-[6px] md:gap-[8px] rounded-[6px] md:rounded-[8px] border-[0.5px] transition-all duration-200 ${
                input.trim() 
                  ? 'bg-[var(--color-brand-light)] border-[var(--color-brand-light)] text-white hover:bg-[var(--color-brand-light)]/90' 
                  : 'border-[#1414141A] text-gray-600 hover:bg-gray-100'
              }`}
              onClick={input.trim() ? handleSubmit : undefined}
            >
              {input.trim() ? (
                <svg 
                  key="arrow"
                  className="h-3 w-3 md:h-4 md:w-4 animate-[iconBounce_0.3s_ease-out]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <img 
                  key="mic"
                  src="/assets/icons/mic.svg" 
                  alt="Microphone" 
                  className="h-3 w-3 md:h-4 md:w-4 animate-[iconBounce_0.3s_ease-out]" 
                />
              )}
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}