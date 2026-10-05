import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { SavedProvider } from './context/SavedContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { InternshipsPage } from './pages/InternshipsPage';
import { HackathonsPage } from './pages/HackathonsPage';
import { CoursesPage } from './pages/CoursesPage';
import { AcademicResourcesPage } from './pages/AcademicResourcesPage';
import { GlobalSearchPage } from './pages/GlobalSearchPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { AdminDashboard } from './pages/AdminDashboard';

// Auto scroll to top upon page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SavedProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/scholarships" element={<ScholarshipsPage />} />
                  <Route path="/internships" element={<InternshipsPage />} />
                  <Route path="/hackathons" element={<HackathonsPage />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/resources" element={<AcademicResourcesPage />} />
                  <Route path="/search" element={<GlobalSearchPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/dashboard" element={<StudentDashboard />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </SavedProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
