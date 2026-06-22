import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import AdminLayout from './components/layout/AdminLayout';
import { ThemeProvider } from './components/ThemeProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Lazy load components
const HomePage = lazy(() => import('./app/(site)/page'));
const PortfolioPage = lazy(() => import('./app/(site)/portfolio/page'));
const BlogPage = lazy(() => import('./app/(site)/blog/page'));
const ContactPage = lazy(() => import('./app/(site)/contact/page'));
const AboutPage = lazy(() => import('./app/(site)/about/page'));
const ServicesPage = lazy(() => import('./app/(site)/services/page'));
const CareersPage = lazy(() => import('./app/(site)/careers/page'));
const PrivacyPage = lazy(() => import('./app/(site)/privacy/page'));
const TermsPage = lazy(() => import('./app/(site)/terms/page'));

// Specific SEO / Service Pages
const WebDevelopmentPage = lazy(() => import('./app/(site)/web-development/page'));
const DigitalMarketingPage = lazy(() => import('./app/(site)/digital-marketing/page'));
const SEOServicesPage = lazy(() => import('./app/(site)/seo-services/page'));

// Admin Pages (Directly imported for stability)
import AdminLoginPage from './app/admin/login/page';
import AdminDashboard from './app/admin/dashboard/page';
import AdminLeads from './app/admin/leads/page';
import AdminServices from './app/admin/cms/services/page';
import AdminPortfolio from './app/admin/cms/portfolio/page';
import AdminTestimonials from './app/admin/cms/testimonials/page';
import AdminSEO from './app/admin/seo/page';
import AdminWidgets from './app/admin/widgets/page';

// Dynamic Routes
const PortfolioDetail = lazy(() => import('./app/(site)/portfolio/[slug]/page'));
const ServiceDetail = lazy(() => import('./app/(site)/services/[slug]/page'));
const BlogDetail = lazy(() => import('./app/(site)/blog/[slug]/page'));
const SEOLandingDetail = lazy(() => import('./app/[slug]/page'));

const Loading = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)]">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-4 border-[var(--color-electric)] opacity-20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-t-[var(--color-electric)] rounded-full animate-spin"></div>
      <div className="absolute inset-4 bg-gradient-premium rounded-full animate-pulse"></div>
    </div>
    <div className="mt-8 text-[var(--color-electric)] font-bold tracking-[0.2em] uppercase text-xs animate-pulse">
      Engineering Excellence...
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Public Site Routes */}
            <Route element={<SiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              
              {/* Specific SEO Pages */}
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/seo-services" element={<SEOServicesPage />} />
              
              {/* Root-level Dynamic Slugs (SEO Landing Pages) */}
              <Route path="/:slug" element={<SEOLandingDetail />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="leads" element={<AdminLeads />} />
              <Route path="cms/services" element={<AdminServices />} />
              <Route path="cms/portfolio" element={<AdminPortfolio />} />
              <Route path="cms/testimonials" element={<AdminTestimonials />} />
              <Route path="seo" element={<AdminSEO />} />
              <Route path="widgets" element={<AdminWidgets />} />
            </Route>

            {/* Catch-all - redirect to home or 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
