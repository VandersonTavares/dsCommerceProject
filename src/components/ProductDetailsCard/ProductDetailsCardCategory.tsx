interface ProductDetailsCardCategoryProps {
    categoryName: string
}

export const ProductDetailsCardCategory = ({categoryName}: ProductDetailsCardCategoryProps) => {
  return (
    <button className="bg-[color:var(--dsCategoryBg)] rounded-[4px] w-28 h-8 text-center text-[color:var(--dsCategoryText)] text-xs font-bold mb-1">
      {categoryName}
    </button>
  );
};
