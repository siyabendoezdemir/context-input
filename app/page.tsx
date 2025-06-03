import { ContextInput } from "@/components/context-input";
import { WorkflowSteps } from "@/components/workflow-steps";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <WorkflowSteps />
      <ContextInput />
    </div>
  );
}
