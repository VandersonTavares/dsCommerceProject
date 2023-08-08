import { ReactNode } from "react";

interface ProductDetailsCardRootProps {
  children: ReactNode;
}

export const ProductDetailsCardRoot = ({ children }: ProductDetailsCardRootProps) => {
  return (
    <section className="details px-5">
      <div className="container mx-auto max-w-6xl bg-[color:var(--dsCardBg)] mt-5 rounded-md border">
        {children}
      </div>
    </section>
  );
};
