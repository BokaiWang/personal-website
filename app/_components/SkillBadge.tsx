import React, { FC, PropsWithChildren } from "react";

const SkillBadge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-brand-500 rounded-2xl px-2 py-1 text-xs flex justify-center items-center">
      <span>{children}</span>
    </div>
  );
};

export default SkillBadge;
