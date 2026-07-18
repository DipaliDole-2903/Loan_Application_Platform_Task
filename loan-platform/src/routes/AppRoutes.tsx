import { Routes, Route, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import PersonalLoan from '../pages/PersonalLoan'
import BusinessLoan from '../pages/BusinessLoan'
import CreditTracker from '../pages/CreditTracker'
import Partners from '../pages/Partners'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Terms from '../pages/Terms'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Splash & Auth */}
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />

      {/* Main App with persistent Header/Footer */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/credit-tracker" element={<CreditTracker />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
