import { Teacher } from "../../graphql/generated"

type teacherProp = {
  teacher: Partial<Teacher>
}

export function EducatorAvatar({ teacher }: teacherProp) {
  return (
    <div className="flex items-center gap-4 mt-6">
      <img
        className="h-16 w-16 rounded-full border-2 border-primary-blue"
        src={teacher.avatarURL}
        alt={teacher.name}
      />

      <div>
        <strong className="font-bold text-2xl block">{teacher.name}</strong>
        <span className="text-primary-gray-textSecondary text-sm block">
          {teacher.bio}
        </span>
      </div>
    </div>
  )
}
