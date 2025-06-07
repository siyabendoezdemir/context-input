"use client"

import { SidebarProvider as ShadcnSidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

type SidebarProviderProps = {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  return (
    <ShadcnSidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="border-b p-4">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </ShadcnSidebarProvider>
  )
} 