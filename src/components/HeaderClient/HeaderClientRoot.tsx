import { ReactNode } from "react"

interface HeaderClientRootProps {
    children: ReactNode
}

export const HeaderClientRoot = ({children}: HeaderClientRootProps) => {
  return (
    <nav className="bg-[color:var(--dsNavbarBg)] px-5">
      <div className="container h-12 mx-auto max-w-6xl flex justify-between items-center">
        {children}
      </div>
    </nav>
  )
}
