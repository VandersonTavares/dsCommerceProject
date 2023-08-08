interface ProductDetailsCardTextProps {
    description: string
}

export const ProductDetailsCardText = ({description}: ProductDetailsCardTextProps) => {
  return (
    <p className="font-normal text-xs text-[color:var(--dsItemDetails)] mx-5">
      {description}
    </p>
  );
};
