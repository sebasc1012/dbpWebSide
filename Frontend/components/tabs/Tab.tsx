import React, { ReactNode } from "react";

export interface TabProps extends React.PropsWithChildren {
  label: string;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ label, children }) => {
  return (
    <>
      <em className="text-black text-2xl cursor-pointer">{label}</em>
      <span className="text-black">{children}</span>
    </>
  );
};
