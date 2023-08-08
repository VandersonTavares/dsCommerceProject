interface DefaultButtonPrimaryProps {
  name: string;
}

export const DefaultButtonPrimary = ({ name }: DefaultButtonPrimaryProps) => {
  return (
    <button className="bg-[color:var(--dsDefaultButtonBg)] text-[color:var(--dsDefaultButtonText)] py-2 sm:w-56 font-bold text-base rounded mx-5">
      {name}
    </button>
  );
};
