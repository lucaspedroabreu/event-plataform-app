import { useEffect } from "react"
import { Footer } from "../Footer"
import { LessonArticle } from "./LessonArticle"
import { PlayerComponent } from "./PlayerComponent"
import { useGetLessonBySlugQuery } from "../../graphql/generated"

interface VideoProps {
  lessonSlug: string
}

export function LessonSection(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: { slug: props.lessonSlug },
  })

  useEffect(() => {}, [data])

  if (!data || !data.lesson || !data.lesson.teacher) {
    return (
      <section className="flex-grow">
        <div className="flex-grow">
          <p>Carregando...</p>
        </div>
        <Footer />
      </section>
    )
  }

  return (
    <section className="flex-grow">
      <PlayerComponent
        videoId={data.lesson.videoId}
        availableAt={data.lesson.availableAt}
      />
      <LessonArticle lesson={data.lesson} />
      <Footer />
    </section>
  )
}
