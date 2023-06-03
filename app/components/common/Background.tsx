"use client";

import { MouseEvent, ReactNode, useState } from "react";

interface BackgroundPropsType {
  children: ReactNode;
}

export default function Container({
  children,
}: BackgroundPropsType): JSX.Element {
  const [background, setBackground] = useState<string>(
    `radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)`
  );

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const changeBackground = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    setBackground(changeBackground);
  };

  return (
    <div
      className="main-container"
      style={{ background: background }}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}
