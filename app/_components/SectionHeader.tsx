import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeader = ({ children }: Props) => {
  return <h2 className="text-4xl my-3 text-center">{children}</h2>;
};

export default SectionHeader;
