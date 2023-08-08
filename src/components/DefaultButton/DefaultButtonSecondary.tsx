interface DefaultButtonSecondaryProps {
  name: string;
}

export const DefaultButtonSecondary = ({ name }: DefaultButtonSecondaryProps) => {
  return (
    <button className="bg-[color:var(--dsSecondaryButtonBg)] text-[color:var(--dsSecondaryButtonText)] py-2 sm:w-56 font-bold text-base rounded border-[1px] border-[#3483FA] mx-5">
      {name}
    </button>
  );
};
