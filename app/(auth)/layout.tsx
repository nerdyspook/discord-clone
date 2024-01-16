import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-screen flex items-center justify-center bg-stone-100">
      {children}
    </div>
  );
}
