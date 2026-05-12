"use client";

import { ChangeEvent, useId, useState } from "react";
import { StepList } from "./stepList";
import { Steps, stepSection } from "@/constants/stepEnum";
import { PreviewData } from "./previewData";
import { PlanMember } from "@/constants/plans";
import { motion } from "motion/react";

export function MultyStep() {
  const idBox = useId();
  const [step, setStep] = useState(Steps.PaymentMethod);
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
  });
  const [inputBox, setInputBox] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckedInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputBox(event.target.value);
  };

  const handleChangeStep = (newStep: Steps) => {
    setStep(newStep);
  };

  const handleSumbitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextPage = step + 1;
    if (nextPage < 3) setStep(nextPage);
  };

  const [userData, serUserData] = useState([]);

  const handleData = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_APLI_URL}/users`);

      console.log(data.json());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSumbitForm}
        className="w-[800px] p-1.5 bg-amber-50 rounded-sm"
      >
        <StepList
          step={stepSection}
          currentStep={step}
          handleChangeStep={handleChangeStep}
        />
        {step === Steps.PaymentMethod && (
          <div>
            <div className="flex flex-col gap-1.5">
              <label className="text-black font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="border-1 border-black w-[200px] text-black rounded-md"
                id="name"
                name="name"
                value={inputValue.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-black font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="border-1 border-black w-[200px] text-black rounded-md"
                id="email"
                name="email"
                value={inputValue.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
        {step === Steps.CustomerBilling && (
          <ul>
            {PlanMember.map(({ plan, info }) => {
              const id = `${plan}${idBox}`;
              return (
                <li key={id}>
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        required
                        value={plan}
                        checked={inputBox === plan}
                        onChange={handleCheckedInput}
                        id={plan}
                        name={plan}
                      />
                      <label htmlFor={plan}>{plan}</label>
                    </div>
                    <p>{info}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {step === Steps.ReviewConfirm && (
          <div>
            <PreviewData
              name={inputValue.name}
              email={inputValue.email}
              plan={inputBox}
            />
          </div>
        )}
        <button onClick={() => handleSumbitForm}>Continue</button>
        <motion.div
          className="w-[50px] h-[50px] border-r-[50%] bg-amber-400"
          transition={{
            type: "spring",
            ease: "easeInOut",
            stiffness: 200,
            damping: 25,
          }}
          animate={{
            y: 50,
          }}
        ></motion.div>

        <button className="bg-red-500" onClick={() => handleData()}>
          Data indo
        </button>
      </form>
    </>
  );
}
