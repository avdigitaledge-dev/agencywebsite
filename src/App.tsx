import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDesignWollongong = lazy(() => import("./pages/WebDesignWollongong"));
const WebDesignIllawarra = lazy(() => import("./pages/WebDesignIllawarra"));
const WebDesignSydney = lazy(() => import("./pages/WebDesignSydney"));
const WebDesignTradies = lazy(() => import("./pages/WebDesignTradies"));
const WebDesignHealthcare = lazy(() => import("./pages/WebDesignHealthcare"));
const WebsiteReview = lazy(() => import("./pages/WebsiteReview"));
const ChecklistThankYou = lazy(() => import("./pages/ChecklistThankYou"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioProject = lazy(() => import("./pages/PortfolioProject"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const AeoGeoServices = lazy(() => import("./pages/AeoGeoServices"));
const CompareWix = lazy(() => import("./pages/CompareWix"));
const CompareSquarespace = lazy(() => import("./pages/CompareSquarespace"));
const CompareCheapDesigners = lazy(() => import("./pages/CompareCheapDesigners"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:category" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/web-design-wollongong" element={<WebDesignWollongong />} />
          <Route path="/web-design-illawarra" element={<WebDesignIllawarra />} />
          <Route path="/web-design-sydney" element={<WebDesignSydney />} />
          <Route path="/web-design-tradies" element={<WebDesignTradies />} />
          <Route path="/web-design-healthcare" element={<WebDesignHealthcare />} />
          <Route path="/free-website-review" element={<WebsiteReview />} />
          <Route path="/services/aeo-geo" element={<AeoGeoServices />} />
          <Route path="/checklist-thank-you" element={<ChecklistThankYou />} />
          <Route path="/vs/wix" element={<CompareWix />} />
          <Route path="/vs/squarespace" element={<CompareSquarespace />} />
          <Route path="/vs/cheap-web-designers" element={<CompareCheapDesigners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
