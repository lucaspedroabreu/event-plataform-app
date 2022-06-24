import { useEffect } from "react"
import ReactPlayer from "react-player"
import { format, isPast } from "date-fns"
import { ptBR } from "date-fns/locale"

interface playerProps {
  videoId: string
  availableAt: string
}

export function PlayerComponent(props: playerProps) {
  useEffect(() => {}, [])

  const videoDate = new Date(props.availableAt)
  const isAvailable = isPast(videoDate)
  const availableDateFormated = format(
    videoDate,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  )

  if (!isAvailable) {
    return (
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video flex flex-col justify-center items-center">
          <h1 className="text-7xl mb-5">Disponível em breve!</h1>
          <p className="text-5xl text-primary-warning">
            {availableDateFormated}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black flex justify-center">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${props.videoId}`}
          controls
          height="100%"
          width="100%"
          className="h-full w-full"
        />
      </div>
    </div>
  )
}
