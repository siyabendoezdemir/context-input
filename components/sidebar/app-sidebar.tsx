"use client"

import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Bell, Plus, PackageOpen, Blocks } from "lucide-react"

const navigationItems = [
  {
    title: "Add",
    icon: Plus,
    isHighlighted: true,
  },
  {
    title: "Projects", 
    icon: PackageOpen,
  },
  {
    title: "Grid",
    icon: Blocks,
  },
]

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="none"
      style={{
        display: 'flex',
        width: '52px',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexShrink: 0,
        borderRight: '0.5px solid var(--border-emphasis, rgba(20, 20, 20, 0.10))',
        background: '#FAFAFA'
      }}
      className="sticky top-0"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center">
                  <img 
                    src="/assets/logos/context.svg" 
                    alt="Context" 
                    style={{
                      width: '10px',
                      height: '16px',
                      aspectRatio: '5/8'
                    }}
                  />
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    style={item.isHighlighted ? {
                      display: 'flex',
                      width: '32px',
                      height: '32px',
                      minHeight: '32px',
                      padding: '4px 8px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '10px',
                      background: 'var(--Surface-container, rgba(20, 20, 20, 0.05))'
                    } : {}}
                    className={!item.isHighlighted ? 'px-2.5 md:px-2 hover:bg-gray-50' : ''}
                  >
                    <item.icon 
                      style={item.isHighlighted ? {
                        width: '20px',
                        flexShrink: 0,
                        color: '#5D5D5D'
                      } : {
                        width: '16px',
                        height: '16px'
                      }}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: "Notifications",
                hidden: false,
              }}
              className="px-2.5 md:px-2"
            >
              <Bell 
                style={{
                  width: '20px',
                  color: '#5D5D5D',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"SF Pro"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '20px',
                  letterSpacing: '-0.2px'
                }}
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{
                children: "Profile",
                hidden: false,
              }}
              style={{
                display: 'flex',
                width: '32px',
                height: '32px',
                minHeight: '32px',
                padding: '4px 8px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.03)',
                background: 'var(--Surface-container-low, rgba(20, 20, 20, 0.03))'
              }}
            >
              <div 
                style={{
                  color: '#5D5D5D',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"SF Pro"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '510',
                  lineHeight: '20px',
                  letterSpacing: '-0.2px'
                }}
              >
                D
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
} 