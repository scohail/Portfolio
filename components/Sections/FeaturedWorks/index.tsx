import {
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
import { motion } from 'framer-motion'
import { memo } from 'react'
import FeaturedCard from './FeaturedCard'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the projects I built during my internships and
        academic work.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="AI Assistant"
            description="A private AI assistant, built during an internship, that runs entirely on your own machine. Chat with local LLMs through Ollama, ask questions about your PDFs with a RAG pipeline that cites the source file and page, and forecast next year's product prices with machine learning."
            src="/works/assistant-ia.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/scohail/Assistant-IA"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="TIR Fraud Detection"
            description="A computer vision system, built during my internship at Tanger Med Port Authority, that compares a TIR trailer at the port entry and exit to detect trailer swaps. It segments the trailer, compares its color palette with K-Means in CIELAB and reads its brand with EasyOCR, then flags a possible fraud in a Streamlit app."
            src="/works/tir-fraud-detection.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/scohail/TIR_Fraude-Detection"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Diversity Metrics"
            description="A desktop app, Python library and REST API for measuring how differently the models of an ensemble behave. It computes 24 diversity metrics, shows which models are redundant and prunes them: on the sample dataset, it removes two of six models with no loss in accuracy."
            src="/works/diversity-metrics.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/scohail/API_DiversityMetrics"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Fraud Detection"
            description="How do you train a classifier when only 1 transaction in 600 is a fraud? An academic benchmark of 16 rebalancing strategies across 5 classifiers on 284k real credit-card transactions, using a strict leakage-free protocol. The best combination reaches a PR-AUC of 0.853."
            src="/works/fraud-detection.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/scohail/Fraud_Detection"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
