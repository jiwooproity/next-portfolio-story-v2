import { ReactNode } from "react";

interface ContainerPropsType {
  children: ReactNode;
}

export default function Container({ children }: ContainerPropsType) {
  return <div className="main-container">{children}</div>;
}
