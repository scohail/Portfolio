export type Company = 'MSMP' | 'DATATIKA' | 'TMPA' | 'TE'
export type CompanyDetail = {
  name: string
  longName?: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  MSMP: {
    name: 'MSMP',
    url: 'https://www.msmp.eu/',
    position: 'Machine Learning & Data Driven Engineer',
    duration: 'February 2025 - July 2025',
    logo: {
      light: '/worked_at_logos/ENSAM/AM_logo.png',
      dark:  '/worked_at_logos/ENSAM/AM_Logo_dark.png',
    },
    roles: [
      <>
        Set up a metamodel in order to finalize the virtual representation of the physical process (low-pressure foundry platform).
      </>,
      <>
        Implemented a full data-driven architecture, covering the entire pipeline from data generation and collection to preprocessing, model training, and deployment within a digital twin framework.
      </>,
      <>Developed a user interface for testing and validating machine learning models.</>,
    ],
  },
  
  TMPA : {
    name: 'Tanger Med Port Authority',
    longName: 'TMPA.',
    url: 'https://www.tangermedport.com/en/',
    position: 'Industrial Engineer',
    duration: 'August 2024 - September 2024',
    logo: {
      light: '/worked_at_logos/TMPA/TMPA_Logo.png',
      dark: '/worked_at_logos/TMPA/TMPA_Logo_dark.png',
    },  
    roles: [
      <>
        Designed a fraud detection system for TIR flows using open-source computer vision models.
      </>,
      <>
        Automated the identification of truck brands and license plates using Optical Character Recognition (OCR) techniques.
      </>,
      <>Developed a user interface for report visualization and real-time truck supervision.</>,
    ],
  },
  DATATIKA: {
    name: 'DATATIKA',
    longName: 'DATATIKA.',
    url: 'https://datatika.com/',
    position: 'Digitalization Engineer',
    duration: 'June 2024 - August 2024',
    logo: {
      light: '/worked_at_logos/DATATIKA/DATATIKA_Logo_White.png',
      dark: '/worked_at_logos/DATATIKA/DATATIKA_Logo.png',
    },
    roles: [
      <>
        Implemented a Retrieval-Augmented Generation (RAG) architecture for an industrial use case using open-source language models.
      </>,
      <>
        Developed a machine learning model for forecasting industrial product prices for upcoming years based on historical sales data.
      </>,
    
    ],
  },
  TE: {
    name: 'TE connectivity',
    longName: 'TE.',
    url: 'https://www.te.com/en/home.html',
    position: 'Industrial Observation Intern',
    duration: 'July 2023 - August 2023',
    logo: {
      light: '/worked_at_logos/TE/te-connectivity-logo.png',
      dark: '/worked_at_logos/TE/te-connectivity-logo.png',
    },
    roles: [
      <>
        Gained foundational knowledge in the automotive sector, including cabling, assembly, and plastic injection processes.


      </>,
      <>
        Optimized a production line by applying Lean Six Sigma methodologies to enhance efficiency and reduce defects.  </>,
    ],
  },
  
  
}

export const ExperiencesList = [Experiences.MSMP, Experiences.TMPA, Experiences.DATATIKA, Experiences.TE];
