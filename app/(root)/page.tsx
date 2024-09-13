import CategorySection from '@/components/pages/home/CategorySection'
import FeaturesSection from '@/components/pages/home/FeaturesSection'
import HeroSection from '@/components/pages/home/HeroSection'
import HowWorks from '@/components/pages/home/HowWorks'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CategorySection />
            <FeaturesSection />
            <HowWorks />
        </>
    )
}

export default HomePage