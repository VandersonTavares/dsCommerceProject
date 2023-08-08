interface ProductDetailsCardNameProps {
  productName: string;
}

export const ProductDetailsCardName = ({productName}: ProductDetailsCardNameProps) => {
  return (
    <span className="font-bold text-xs text-[color:var(--dsItemName)] mx-5">
      {productName}
    </span>
  );
};
