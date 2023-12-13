import React from 'react'
import NavBar from './NavBar'
import SliderSection from './SliderSection'
import SidebarMenu from './SidebarMenu'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import FunFactsSection from './FunFactsSection'
import PortfolioSection from './PortfolioSection'
import TestimonialSection from './TestimonialSection'
import BlogSection from './BlogSection'
import Footer from './Footer'
import TypedSection from './TypedSection'

export default function Home() {
  return (
    <>
        <NavBar />
        <SidebarMenu />
        <SliderSection />
        <AboutSection />
        <ServicesSection />
        <FunFactsSection />
        <PortfolioSection />
        <TestimonialSection />
        <BlogSection />
        <TypedSection />
        <Footer />
    </>
  )
}
