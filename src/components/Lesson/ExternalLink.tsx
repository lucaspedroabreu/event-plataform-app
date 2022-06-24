import { DiscordLogo, IconProps, Lightning } from "phosphor-react"
import { AnchorHTMLAttributes, ReactElement } from "react"

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: LinkType
  title?: requiredTitle<LinkType>
  logo?: requiredLogo<LinkType>
}

type LinkType = "discord" | "chellange" | "other"
type requiredTitle<T> = T extends "other" ? string : undefined
type requiredLogo<T> = T extends "other" ? ReactElement : undefined

export function ExternalLink({
  variant,
  title,
  logo,
  className: classNameProp,
  ...rest
}: ExternalLinkProps) {
  if (variant === "discord") {
    title = "Comunidade do Discord"
    logo = <DiscordLogo size={24} />
    return (
      <a
        className="p-4 text-sm bg-primary-green-regular text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-primary-green-light transition-colors"
        {...rest}
      >
        {logo}
        {title}
      </a>
    )
  } else if (variant === "chellange") {
    title = "Acesse o desafio"
    logo = <Lightning size={24} />
    return (
      <a
        className="p-4 text-sm text-primary-blue border border-primary-blue flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-primary-blue hover:text-primary-gray-elements transition-colors"
        {...rest}
      >
        {logo}
        {title}
      </a>
    )
  } else {
    return (
      <a
        {...rest}
        className={[
          "p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center bg-primary-green-regular border-primary-gray-background",
          classNameProp,
        ].join(" ")}
      >
        {logo}
        {title}
      </a>
    )
  }
}
