import { CaretRight, FileArrowDown, ImageSquare } from "phosphor-react"

export function Downloadables() {
  return (
    <div className="gap-8 mt-20 grid grid-cols-2">
      <a
        href=""
        className="bg-primary-gray-elements rounded overflow-hidden flex items-stretch gap-6 hover:bg-primary-gray-strokeDivider transition-colors"
      >
        <div className="bg-primary-green-regular h-full p-6 flex items-center">
          <FileArrowDown size={40} />
        </div>
        <div className="py-6 leadding-relaxed">
          <strong className="text-2xl">Material Complementar</strong>
          <p className="text-sm text-primary-gray-tittle mt-2">
            Acesse o material complementar para acelerar o seu desenvolvimento
          </p>
        </div>
        <div className="h-full p-6 flex items-center">
          <CaretRight size={24} />
        </div>
      </a>

      <a
        href=""
        className="bg-primary-gray-elements rounded overflow-hidden flex items-stretch gap-6 hover:bg-primary-gray-strokeDivider transition-colors"
      >
        <div className="bg-primary-green-regular h-full p-6 flex items-center">
          <ImageSquare size={40} />
        </div>
        <div className="py-6 leadding-relaxed">
          <strong className="text-2xl">Wallpaper exclusivos</strong>
          <p className="text-sm text-primary-gray-tittle mt-2">
            Faça o download do seu bônus exclusivo
          </p>
        </div>
        <div className="h-full p-6 flex items-center">
          <CaretRight size={24} />
        </div>
      </a>
    </div>
  )
}
