"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ContextInput() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full max-w-[625px] h-[120px] md:h-[144px] border border-[rgba(20,20,20,0.05)] shadow-[0px_0px_0.5px_0.5px_rgba(20,20,20,0.18),inset_0px_0px_7px_-3px_#FFFFFF,0px_2px_4px_rgba(20,20,20,0.04),0px_16px_22px_rgba(20,20,20,0.03)] rounded-2xl bg-white">
      {/* Main content container */}
      <div className="h-full flex flex-col p-3 md:p-4">
        
        {/* Attached File Card */}
        <div className="mb-2 md:mb-3">
          <div className="flex flex-row items-center gap-2 w-full">
            {/* Artifact Pill */}
            <div className="flex flex-row items-center w-[180px] md:w-[212px] h-[24px] md:h-[28px] pt-[3px] md:pt-[4px] pr-[6px] md:pr-[8px] pb-[3px] md:pb-[4px] pl-[6px] md:pl-[8px] gap-[3px] md:gap-[4px] rounded-[6px] md:rounded-[8px] border-[0.5px] border-[rgba(20,20,20,0.05)] bg-[rgba(252,243,240,0.75)] flex-none order-2 flex-grow-0">
              <img src="/assets/presentation.svg" alt="Presentation" className="w-[12px] md:w-[14px] h-[12px] md:h-[14px] flex-none order-1 flex-grow-0" />
              <span className="h-[18px] md:h-[20px] font-[500] text-[10px] md:text-[12px] leading-[18px] md:leading-[20px] tracking-[-0.09px] text-[#D9592A] flex-none order-2 flex-grow-0 truncate" style={{fontFamily: "'Suisse Int\\'l'"}}>Slack Q1 2024 Expense Analysis</span>
            </div>
          </div>
        </div>
        
        {/* Input Area - top row */}
        <div className="flex-1 flex items-center mb-3 md:mb-4">
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
              <Button variant="ghost" size="icon" className="h-6 w-6 md:h-8 md:w-8 rounded text-gray-600 hover:bg-gray-100">
                <img src="/assets/icons/plus.svg" alt="Plus" className="h-3 w-3 md:h-4 md:w-4" />
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