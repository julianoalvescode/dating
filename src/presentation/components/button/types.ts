import { MouseEventHandler } from "react";

export type Button = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};
