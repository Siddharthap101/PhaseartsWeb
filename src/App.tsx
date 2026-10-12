import React, { useState, useEffect } from 'react';
import { NavigationPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { QuotePage } from './components/pages/QuotePage';
import { ContactPage } from './components/pages/ContactPage';
import { ExhibitionsPage } from './components/pages/ExhibitionsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [prefilledSignageType, setPrefilledSignageType] = useState<string>('');

  // Handle URL hash navigation for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationPage;
      const validPages: NavigationPage[] = ['home', 'about', 'products', 'projects', 'quote', 'contact', 'exhibitions'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavigationPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductForQuote = (productName: string) => {
    setPrefilledSignageType(productName);
    handleNavigate('quote');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-16 sm:pb-0">
      {/* Top Header strictly complying with Top Bar Contract */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProductForQuote={handleSelectProductForQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onSelectProductForQuote={handleSelectProductForQuote}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProductForQuote={handleSelectProductForQuote}
          />
        )}

        {currentPage === 'quote' && (
          <QuotePage
            initialSignageType={prefilledSignageType}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'exhibitions' && (
          <ExhibitionsPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick WhatsApp & Call Floating Assistant */}
      <FloatingActions onNavigate={handleNavigate} />
    </div>
  );
}
