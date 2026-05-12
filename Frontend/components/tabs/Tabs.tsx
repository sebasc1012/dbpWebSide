"use client";

import React, { useState, ReactElement, ReactNode } from "react";
import { TabProps } from "./Tab";

interface TabsProps {
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> => React.isValidElement(child)
  );
  return (
    <div className="flex gap-[16px] cursor-pointer">
      <ul>
        {tabElements.map((child, index) => (
          <li
            key={index}
            className={`${
              index === activeIndex ? "border-b-black" : ""
            } w-[100px] bg-amber-800`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>
      <p className="w-[100px] bg-amber-300 mx-[24px] p-[16px] border-r-[8px]">
        {tabElements[activeIndex]}
      </p>
    </div>
  );
};
