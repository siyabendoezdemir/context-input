import { ContextInput } from "@/components/prompt-input/context-input";
import { Greeting } from "@/components/greeting";
import { ActionBar } from "@/components/quick-actions";

export default function CoreChat() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop: centered layout */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center gap-4 p-4">
        <div className="w-full max-w-[625px] space-y-6">
          <Greeting />
          <ContextInput />
          <ActionBar />
        </div>
      </div>
      
      {/* Mobile: Fixed at bottom */}
      <div className="md:hidden flex flex-col justify-end min-h-screen">
        <div className="p-4 space-y-4 flex justify-center">
          <Greeting />
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 space-y-4 shadow-lg">
          <ContextInput />
          <ActionBar />
        </div>
      </div>
    </div>
  );
} 