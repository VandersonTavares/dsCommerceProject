import { ReactNode } from "react"

interface ProductDetailsCardCategoriesProps {
    children: ReactNode
}

export const ProductDetailsCardCategories = ({children}: ProductDetailsCardCategoriesProps) => {
  return (
    <div className="categories py-5 flex flex-col sm:flex-row gap-1 mx-5">
        {children}
    </div>
  );
};
