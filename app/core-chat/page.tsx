import { ContextInput } from "@/components/prompt-input/context-input";
import { Greeting } from "@/components/greeting";
import { ActionBar } from "@/components/quick-actions";
import { Categories, ExamplesGrid } from "@/components/examples";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

export default function CoreChat() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <div className="min-h-screen flex flex-col relative">
      {/* Desktop: centered layout */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center gap-4 p-4 pt-[20vh]">
        <div className="w-full max-w-[625px] space-y-6">
          <Greeting />
          <ContextInput />
          <ActionBar />
          {/* Categories with 88px spacing on desktop */}
          <div className="pt-[88px] flex justify-center">
            <Categories />
          </div>
        </div>
        {/* Examples Grid outside the constrained container */}
        <div className="w-full max-w-[800px] pt-5">
          <ExamplesGrid />
        </div>
      </div>
      
      {/* Mobile: Scrollable layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          <div className="pt-8 flex justify-center">
            <Greeting />
          </div>
          <ContextInput />
          <ActionBar />
          {/* Categories with smaller spacing on mobile */}
          <div className="pt-8 flex justify-center">
            <Categories />
          </div>
          {/* Examples Grid below categories on mobile */}
          <div className="pt-4 pb-8">
            <ExamplesGrid />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay - only for examples grid area */}
      <div 
        className="fixed bottom-0 pointer-events-none hidden md:block"
        style={{
          left: 'calc(50% + 26px)',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '40px',
          flexShrink: 0,
          background: 'linear-gradient(0deg, #FCFCFC 0%, rgba(252, 252, 252, 0.00) 100%)',
          backdropFilter: 'blur(1.5px)',
          zIndex: 10
        }}
      />
      
      {/* Mobile gradient - starts after sidebar */}
      <div 
        className="fixed bottom-0 pointer-events-none md:hidden"
        style={{
          left: '52px',
          right: '0',
          height: '40px',
          flexShrink: 0,
          background: 'linear-gradient(0deg, #FCFCFC 0%, rgba(252, 252, 252, 0.00) 100%)',
          backdropFilter: 'blur(1.5px)',
          zIndex: 10
        }}
      />
        </div>
      </main>
    </SidebarProvider>
  );
} 