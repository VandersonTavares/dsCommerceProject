interface ProductDetailsCardPriceProps {
  price: string;
}

export const ProductDetailsCardPrice = ({ price }: ProductDetailsCardPriceProps) => {
  return (
    <h1 className="text-[color:var(--dsPriceText)] font-bold text-xl pt-2 mx-5">
      {price}
    </h1>
  );
};
