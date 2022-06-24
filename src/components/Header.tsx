import { Logo } from "../assets/Logo"

export function Header() {
  return (
    <header className="w-full py-5 px-[0.125rem] flex justify-center items-center bg-primary-gray-elements border-b-2 border-primary-gray-strokeDivider">
      <Logo />
    </header>
  )
}
