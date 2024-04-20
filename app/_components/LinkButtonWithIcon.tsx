import classNames from "classnames";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  children: ReactNode;
  href: string;
  icon: IconType;
  secondary?: boolean;
}

const LinkButtonWithIcon: FC<Props> = ({
  children,
  href,
  icon: Icon,
  secondary = false,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={classNames(
        "flex justify-center items-center gap-1 px-4 rounded-full transition-colors text-md",
        {
          "bg-brand-500 hover:bg-brand-600": !secondary,
          "bg-brand-100 border border-brand-500 hover:bg-brand-600": secondary,
        }
      )}
    >
      {children}
      <Icon />
    </Link>
  );
};

export default LinkButtonWithIcon;
