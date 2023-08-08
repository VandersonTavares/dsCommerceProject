interface ProductDetailsCardImageProps {
  imageUrl: string;
}

export const ProductDetailsCardImage = ({ imageUrl }: ProductDetailsCardImageProps) => {
  return (
    <div className="image border-b-2 flex justify-center h-[239px]">
      <div className="image w-[220px]">
        <img src={imageUrl} alt="imagem-pc" />
      </div>
    </div>
  );
};
