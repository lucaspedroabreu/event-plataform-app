import { GetLessonBySlugQuery } from "../../graphql/generated"
import { Downloadables } from "./Downloadables"
import { EducatorAvatar } from "./EducatorAvatar"
import { ExternalLink } from "./ExternalLink"

export function LessonArticle({ lesson }: GetLessonBySlugQuery) {
  return (
    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <article className="flex-grow">
          <h1 className="text-2xl font-bold">{lesson?.title}</h1>
          <p className="mt-4 text-primary-gray-text leading-relaxed">
            {lesson?.description}
          </p>
          <div>
            {lesson?.teacher && <EducatorAvatar teacher={lesson.teacher} />}
          </div>
        </article>
        <div className="flex flex-col gap-4 min-w-fit">
          <ExternalLink variant="discord" />
          <ExternalLink variant="chellange" />
        </div>
      </div>
      <Downloadables />
    </div>
  )
}
