"use client";
import { Steps } from "@/constants/stepEnum";
import clsx from "clsx";

interface StepProps {
  handleChangeStep: (current: Steps) => void;
  step: Array<{ value: Steps; label: string; text: string }>;
  currentStep: Steps;
}

export function StepList({ handleChangeStep, step, currentStep }: StepProps) {
  return (
    <div className="flex w-full h-[100px] bg-blue-500 justify-center gap-3.5">
      {step.map(({ value, label, text }) => (
        <li key={value}>
          <button
            type="button"
            onClick={() => handleChangeStep(value)}
            className={clsx(
              "rounded-[50%]",
              value === currentStep && "bg-blue-900 font-bold"
            )}
          >
            <div>{value}</div>
            <div>
              <h2>{label}</h2>
              <p>{text}</p>
            </div>
          </button>
        </li>
      ))}
    </div>
  );
}
