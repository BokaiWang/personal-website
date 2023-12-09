import React, { PropsWithChildren } from "react";

const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="ml-auto mr-auto w-full sm:w-3/5">{children}</div>;
};

export default PageContainer;
