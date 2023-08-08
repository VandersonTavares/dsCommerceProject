import { ReactNode } from "react";

interface DefaultButtonRootProps {
  children: ReactNode;
}

export const DefaultButtonRoot = ({ children }: DefaultButtonRootProps) => {
  return (
    <div className="buttons mx-auto max-w-6xl flex flex-col gap-2 pt-5">
      {children}
    </div>
  );
};
