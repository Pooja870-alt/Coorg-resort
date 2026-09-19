import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SuitesSection from './components/SuitesSection'
import ExperiencesSection from './components/ExperiencesSection'
import TouristHubSection from './components/TouristHubSection'
import DiningSection from './components/DiningSection'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'
import MistDivider from './components/MistDivider'
import CursorGlow from './components/CursorGlow'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      <CursorGlow />
      <FloatingCTA />
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <HeroSection />
        <MistDivider />
        <SuitesSection />
        <MistDivider />
        <ExperiencesSection />
        <MistDivider />
        <TouristHubSection />
        <MistDivider />
        <DiningSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  )
}
