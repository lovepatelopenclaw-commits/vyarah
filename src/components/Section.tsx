import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`max-w-container mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}
