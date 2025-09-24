"use client";
import { Appbar } from "@/components/Appbar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import ZapCell from "@/components/ZapCell";
import { useState } from "react";

export default function CreateZapPage() {
  const [selectedTrigger, setSelectedTrigger] = useState("");
  const [selectedAction, setSelectedAction] = useState<
    {
      availableActionId: string;
      availableActionName: string;
    }[]
  >([]);
  return (
    <div>
      <Appbar />
      <div className="w-full flex flex-col justify-center min-h-screen bg-slate-200">
        <div className="flex justify-center w-full">
          <ZapCell
            name={selectedTrigger ? selectedTrigger : "Trigger"}
            index={1}
          />
        </div>
        <div className="flex flex-col gap-4 py-2 justify-center w-full">
          {selectedAction.map((action, index) => (
            <div key={index} className="flex justify-center w-full">
              <ZapCell
                name={
                  action.availableActionName
                    ? action.availableActionName
                    : "Action"
                }
                index={index + 2}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div>
            <PrimaryButton
              onClick={() => {
                setSelectedAction((a) => [
                  ...a,
                  {
                    availableActionId: "",
                    availableActionName: "",
                  },
                ]);
              }}
            >
              Add Action
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
