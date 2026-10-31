import { IconType } from 'react-icons'
import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/souhail-housni-01aa7b272',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/scohail',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:housni@housni.tech',
    icon: FaAt,
  },
]
