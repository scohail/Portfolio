import { IconType } from 'react-icons'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { IoLogoPwa } from 'react-icons/io5'
import {
  SiAnsible,
  SiApollographql,
  SiArduino,
  SiC,
  SiCpanel,
  SiCplusplus,
  SiDassaultsystemes,
  SiDocker,
  SiElectron,
  SiExpo,
  SiFramer,
  SiGit,
  SiGnubash,
  SiGraphql,
  SiJavascript,
  SiJira,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiRedux,
  SiSiemens,
  SiTailwindcss,
  SiTypescript,
  SiVim,
  SiVisualstudiocode,
  SiMicrosoftoffice,
  SiPowerbi,
  SiTableau,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiLatex,
  SiFlask,
  SiApacheecharts,
  SiUnity,
  SiStreamlit,
  SiMicrosoftsqlserver,
  SiApachehadoop,
  SiApachespark,
  SiApachekafka,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiDotnet


  
  



} from 'react-icons/si'

import { SiMathworks,SiZebratechnologies, SiKeysight, SiLangchain, SiHuggingface} from "../components/Icons";


import { 
    FaGreaterThan,
    FaJava,
 } from 'react-icons/fa'



export type SkillCategory =
  | 'engineering'
  | 'embedded systems'
  | 'Programming Languages'
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'desktop'
  | 'Data Engineering & Big Data Tools'
  | 'Machine Learning & AI'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  engineering: [
    { name: 'Solidworks', icon: SiDassaultsystemes, },
    { name: 'Catiav5', icon: SiDassaultsystemes,},
    { name: 'Matlab', icon: SiMathworks, },
    { name: 'Minitab', icon: FaGreaterThan, },
    { name: 'Unity', icon: SiUnity, },
    { name: 'Adaptive Vision', icon: SiZebratechnologies, },
    { name: 'ProCast', icon: SiKeysight, },

  ],  
  'Programming Languages': [
    { name: 'Python', icon: SiPython,},
    { name: 'Java', icon: FaJava },
    { name: 'C#', icon: SiCsharp,},
    { name: 'Javascript', icon: SiJavascript },
    { name: 'SQL', icon: SiMysql },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'Latex', icon: SiLatex },
  ],
  'embedded systems': [
    {
      name: 'C',
      icon: SiC,
    },
    {
      name: 'C++',
      icon: SiCplusplus,
    },
    {
      name: 'Arduino',
      icon: SiArduino,
    },
    {
      name: 'Raspberry Pi',
      icon: SiRaspberrypi,
    },
  ],
  backend: [
    { name: 'Node', icon: SiNodedotjs, },
    { name: 'Typescript', icon: SiTypescript, },
    { name: 'Flask', icon: SiFlask, },
  ],
  frontend: [
    { name: 'React', icon: SiReact, },
    { name: 'NextJS', icon: SiNextdotjs, },
    { name: 'Streamlit', icon: SiStreamlit, },
  ],
  database: [
    { name: 'PostgreSQL',icon: SiPostgresql,},
    { name: 'MySQL', icon: SiMysql, },
    { name: 'MongoDb', icon: SiMongodb, },
    { name: 'Microsoft SQL Server', icon: SiMicrosoftsqlserver, },
  ],
  cicd: [
    { name: 'Docker',icon: SiDocker,},
    { name: 'Github Actions' , icon: SiGit, },
  ],
  'ui frameworks': [
    { name: 'TailwindCSS', icon: SiTailwindcss,},
    { name: 'Shadcn', icon: SiNextdotjs,},
  ],
  'productivity boost': [
    { name: 'VS Code', icon: SiVisualstudiocode },
    { name: 'Git', icon: SiGit },
    { name: 'Jira', icon: SiJira },
    { name: 'Microsoft office', icon: SiMicrosoftoffice }, // Add SiMicrosoftoffice to imports
    { name: 'Power BI', icon: SiPowerbi }, // Add SiPowerbi to imports
    { name: 'Tableau', icon: SiTableau },
  ],
  'Data Engineering & Big Data Tools': [
    { name: 'Apache Hadoop', icon: SiApachehadoop },
    { name: 'Apache Spark', icon: SiApachespark },
    { name: 'Apache Kafka', icon: SiApachekafka },
    { name: 'Linux', icon: SiLinux },
  ],
  'Machine Learning & AI': [
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Scikit-learn', icon: SiScikitlearn },
    { name: 'Keras', icon: SiKeras },
    { name: 'LangChain', icon: SiLangchain },
    { name: 'Hugging Face', icon: SiHuggingface },
    { name: 'TensorBoard', icon: SiTensorflow  },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],
  desktop: [
    {name: 'Electron',icon: SiElectron,},
    {name: 'PyQt', icon: SiPython,},
    {name: '.NET', icon: SiDotnet, },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
