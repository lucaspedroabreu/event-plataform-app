import { CheckCircle, Lock } from "phosphor-react"
import { BsDot } from "react-icons/bs"
import { isPast, isThisHour, format, addMinutes } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import classNames from "classnames"

interface LessonCardProps {
  title: string
  slug: string
  availableAt: Date
  type: "live" | "class"
}

export function LessonCard(props: LessonCardProps) {
  const { slug } = useParams<{ slug?: string }>()
  const isLessonAvailable = isPast(props.availableAt)
  const isLive = isLessonAvailable && !isPast(addMinutes(props.availableAt, 90))
  const availableDateFormated = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  )

  const isActiveLesson = slug === props.slug

  return (
    <div className="group">
      <span className="text-primary-gray-textSecondary text-sm inline-block mx-auto group-hover:text-primary-green-regular">
        {availableDateFormated}
      </span>

      <Link to={`/event/lesson/${props.slug}`}>
        <div
          className={classNames(
            "rounded border border-primary-gray-strokeDivider p-4 mt-2 group-hover:border-primary-green-regular relative",
            {
              "bg-primary-green-regular": isActiveLesson && isLessonAvailable,
              "bg-primary-gray-strokeDivider":
                isActiveLesson && !isLessonAvailable,
            }
          )}
        >
          {isActiveLesson && (
            <div
              className={classNames(
                "w-5 h-5 rotate-45 -z-4 absolute -left-2 top-[50%]",
                {
                  "bg-primary-gray-strokeDivider": !isLessonAvailable,
                  "bg-primary-green-regular": isLessonAvailable,
                }
              )}
            ></div>
          )}
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span
                className={classNames(
                  "text-sm  font-medium flex items-center gap-2",
                  {
                    "text-primary-blue": !isActiveLesson,
                    "text-white": isActiveLesson,
                  }
                )}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-primary-warning font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            {props.type === "live" ? (
              <div
                className={classNames(
                  "rounded  border px-2 py-[0.125rem] items-center justify-center",
                  {
                    "border-white": isActiveLesson,
                    "border-primary-green-regular ": !isActiveLesson,
                  }
                )}
              >
                {isLive && (
                  <BsDot className="inline-block text-primary-redError text-2xl align-center leading-tight ml-[-5px] pl-[-5px]" />
                )}
                <span
                  className={classNames("font-bold", {
                    "text-xs text-primary-green-light":
                      isLive && !isActiveLesson,
                    "text-xs text-white": isLive && isActiveLesson,
                    "text-sm text-white": !isLive,
                  })}
                >
                  AO VIVO
                </span>
              </div>
            ) : (
              <div className="rounded  border border-primary-green-regular px-2 py-[0.125rem] items-center justify-center">
                <span className="text-xs text-white font-bold">
                  AULA PRÁTICA
                </span>
              </div>
            )}
          </header>
          <strong
            className={classNames("mt-5 block", {
              "text-primary-gray-text": !isActiveLesson,
              "text-white": isActiveLesson,
            })}
          >
            {props.title}
          </strong>
        </div>
      </Link>
    </div>
  )
}
