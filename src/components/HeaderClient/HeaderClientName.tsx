interface HeaderClientNameProps {
    nome: string
}

export const HeaderClientName = ({nome}: HeaderClientNameProps) => {
  return (
    <h1 className="text-[color:var(--dsNavbarText)] font-bold text-xl">{nome}</h1>
  )
}
