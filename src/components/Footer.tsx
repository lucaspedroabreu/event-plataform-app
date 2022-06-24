import { RocketSeatLogo } from "../assets/RocketSeat"
export function Footer() {
  return (
    <footer className="border-t border-primary-gray-strokeDivider max-w-[95%] mx-auto py-5 mt-10 flex justify-between">
      <div className="flex gap-5 items-center">
        <RocketSeatLogo />
        <span className="text-primary-gray-textSecondary">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <a href="#">Políticas de Privacidade</a>
    </footer>
  )
}
