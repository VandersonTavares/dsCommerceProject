import { ElementType } from "react"

interface HeaderClientButtonsProps {
    icon: ElementType,
    name: string
}

export const HeaderClientButtons = ({icon: Icon, name}: HeaderClientButtonsProps ) => {
  return (
    <div className="login flex items-center justify-center gap-5 text-[color:var(--dsItemName)]">
      <a href="#">
        <Icon size={17} title="Ir para o Carrinho" />
      </a>
      <a href="#" className="font-bold">
        {name}
      </a>
    </div>
  );
};
