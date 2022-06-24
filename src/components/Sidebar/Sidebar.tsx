import { useGetLessonsQuery } from "../../graphql/generated"
import { LessonCard } from "./LessonCard"

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-[348px] bg-primary-gray-elements p-6 border-l-2 border-primary-gray-strokeDivider">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-primary-gray-strokeDivider block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  )
}
