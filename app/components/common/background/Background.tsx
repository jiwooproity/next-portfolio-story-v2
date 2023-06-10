"use client";

import { MouseEvent, useState } from "react";

interface BackgroundPropsType {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundPropsType) {
  const [background, setBackground] = useState<string>(
    `radial-gradient(600px at 0px 0px, rgba(184, 117, 126, 0.15), transparent 80%)`
  );

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const changeBackground = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(184, 117, 126, 0.15), transparent 80%)`;
    setBackground(changeBackground);
  };

  return (
    <div style={{ background }} onMouseMove={onMouseMove}>
      {children}
    </div>
  );
}
