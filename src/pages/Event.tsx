import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { LessonSection } from "../components/Lesson/LessonSection"
import { Sidebar } from "../components/Sidebar/Sidebar"

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow">
        {slug ? (
          <LessonSection lessonSlug={slug} />
        ) : (
          <div className="flex flex-col gap-5 flex-grow justify-center items-center">
            <h1 className="text-7xl text-primary-green-light">
              Seja bem vindo(a)!
            </h1>
            <p className="text-3xl text-white">
              Selecione uma aula ao lado e começe a{" "}
              <span className="text-primary-blue">decolar</span>.
            </p>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  )
}
