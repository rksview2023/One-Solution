/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlanningAreas } from './components/PlanningAreas';
import { WhyUs } from './components/WhyUs';
import { SipCalculator } from './components/SipCalculator';
import { HowItWorks } from './components/HowItWorks';
import { AboutUs } from './components/AboutUs';
import { EnquirySection } from './components/EnquirySection';
import { WhatsAppCta } from './components/WhatsAppCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedGoal, setSelectedGoal] = useState<string>('Wealth Creation');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹5,000–₹10,000');
  const [activeModal, setActiveModal] = useState<'disclaimer' | 'privacy' | 'commission' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    scrollToSection('sip-calculator');
  };

  const handleOpenEnquiry = (goal?: string) => {
    if (goal) {
      setSelectedGoal(goal);
    }
    scrollToSection('enquiry');
  };

  const handlePlanThisSip = ({ monthly }: { monthly: number }) => {
    if (monthly < 5000) {
      setSelectedBudget('₹2,000–₹5,000');
    } else if (monthly < 10000) {
      setSelectedBudget('₹5,000–₹10,000');
    } else if (monthly < 25000) {
      setSelectedBudget('₹10,000–₹25,000');
    } else {
      setSelectedBudget('₹25,000+');
    }
    scrollToSection('enquiry');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-emerald-100 selection:text-emerald-950 font-sans">
      {/* 1. Header / Navigation */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenCalculator={handleOpenCalculator}
      />

      <main className="grow">
        {/* 2. Hero Section with Large Family Lifestyle Image */}
        <Hero
          onCalculateClick={handleOpenCalculator}
          onEnquiryClick={() => handleOpenEnquiry()}
        />

        {/* 3. Goal Planning Cards (Child Education, Retirement, Wealth Creation, Future Goals) */}
        <PlanningAreas onSelectGoal={(goal) => handleOpenEnquiry(goal)} />

        {/* 4. Why One Solution (4 Attractive Icon Cards) */}
        <WhyUs />

        {/* 5. SIP Calculator (Pre-filled ₹5,000 / 15Yrs / 12% + Calculate Now) */}
        <SipCalculator onPlanThisSip={handlePlanThisSip} />

        {/* 6. Investment Journey (4-Step Visual Timeline) */}
        <HowItWorks onStartEnquiry={() => handleOpenEnquiry()} />

        {/* 7. About Us Section */}
        <AboutUs />

        {/* 8. SIP Enquiry & Consultation Section */}
        <EnquirySection
          initialGoal={selectedGoal}
          initialBudget={selectedBudget}
        />

        {/* 9. Direct WhatsApp CTA */}
        <WhatsAppCta />

        {/* 10. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* 11. Footer with Regulatory & Statutory Compliance */}
      <Footer onOpenModal={(type) => setActiveModal(type)} />

      {/* Legal & Regulatory Disclosures Modal */}
      <LegalModals
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* Floating WhatsApp and Quick Connect Actions */}
      <FloatingActions />
    </div>
  );
}
