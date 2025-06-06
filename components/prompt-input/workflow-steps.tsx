"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

const steps = [
  { id: 1, title: "Test web search tool", status: "current" },
  { id: 2, title: "Test web extraction", status: "completed" },
  { id: 3, title: "Test bash commands", status: "completed" },
  { id: 4, title: "Generate insights", status: "completed" },
  { id: 5, title: "Create visualization", status: "completed" },
  { id: 6, title: "Export results", status: "pending" },
  { id: 7, title: "Review findings", status: "pending" },
  { id: 8, title: "Finalize report", status: "pending" },
]

export function WorkflowSteps() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const currentStep = steps.find(step => step.status === "current") || steps[0]
  const currentStepIndex = steps.findIndex(step => step.status === "current")
  const completedSteps = steps.filter(step => step.status === "completed").length
  const totalSteps = steps.length
  const progressPercentage = (completedSteps / totalSteps) * 100

  return (
    <div className="relative w-full max-w-[625px]">
      {/* Preview Card Overlay - always visible, responsive positioning */}
      <div className="absolute top-[-15px] left-2 md:left-4 w-[90px] md:w-[112px] h-[45px] md:h-[51px] gap-[8px] md:gap-[10px] rounded-[8px] border border-[#1414141A] p-[6px] md:p-[8px] bg-[#FAFAFA] z-20 shadow-sm">
        <div className="w-full h-full flex flex-col gap-[3px] md:gap-[4px]">
          {steps.slice(0, 3).map((step) => (
            <div key={step.id} className="flex items-center gap-1">
              <div className={`w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-[33.33px] border-[0.5px] border-[#14141433] flex items-center justify-center relative ${
                step.status === "completed" 
                  ? "bg-transparent" 
                  : "bg-transparent"
              }`}>
                {step.status === "completed" && (
                  <svg 
                    className="absolute" 
                    style={{
                      width: '2px',
                      height: '1.5px',
                      top: '0.5px',
                      left: '0.5px'
                    }}
                    fill="none" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      stroke="#B9B9B9" 
                      strokeWidth="0.5"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                )}
              </div>
              <span 
                className={`text-[7px] md:text-[8px] font-[500] leading-[100%] tracking-[-0.09px] ${
                  step.status === "completed" 
                    ? "text-[#1414144D] line-through" 
                    : "text-[#1414144D]"
                }`}
                style={{fontFamily: "'Suisse Int\\'l'"}}
              >
                Step {step.id}: {step.title.substring(0, 8)}...
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Container - responsive width */}
      <div className="w-full rounded-[12px] border-[0.5px] bg-white border-[#1414141A] shadow-[0px_16px_22px_0px_#14141408,0px_2px_4px_0px_#1414140A,0px_0px_0.5px_0.5px_#1414142E,0px_0px_7px_-3px_#FFFFFF_inset]">
        {/* Main Header */}
        <div 
          className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-[12px]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex-1 ml-[95px] md:ml-[120px]">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs md:text-sm font-medium text-gray-800 truncate">
                Step {currentStep.id}: {currentStep.title}
              </h3>
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                <span className="text-[10px] md:text-xs text-gray-500 font-medium">
                  {completedSteps} / {totalSteps}
                </span>
                <Button variant="ghost" size="icon" className="h-4 w-4 md:h-5 md:w-5">
                  <div className="transition-transform duration-300 ease-in-out">
                    {isExpanded ? (
                      <ChevronDown className="h-2 w-2 md:h-3 md:w-3 text-gray-600" />
                    ) : (
                      <ChevronUp className="h-2 w-2 md:h-3 md:w-3 text-gray-600" />
                    )}
                  </div>
                </Button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-3 md:px-4 pb-3 md:pb-4">
            <div className="border-t border-gray-100 pt-3 md:pt-4">
              <div className="space-y-2 md:space-y-3">
                {steps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`flex items-center gap-2 md:gap-3 transition-all duration-200 ease-in-out ${
                      isExpanded 
                        ? 'transform translate-y-0 opacity-100' 
                        : 'transform translate-y-2 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      {/* Status indicator */}
                      <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        step.status === "completed" 
                          ? "bg-green-500 border-green-500" 
                          : step.status === "current"
                          ? "bg-blue-500 border-blue-500"
                          : "bg-gray-100 border-gray-300"
                      }`}>
                        {step.status === "completed" && (
                          <svg className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      <span className={`text-xs md:text-sm transition-colors duration-200 ${
                        step.status === "completed" 
                          ? "text-gray-800 font-medium" 
                          : step.status === "current"
                          ? "text-blue-600 font-medium"
                          : "text-gray-500"
                      }`}>
                        Step {step.id}: {step.title}
                      </span>
                    </div>
                    
                    {step.status === "current" && (
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 