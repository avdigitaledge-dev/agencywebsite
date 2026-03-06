import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import WebDesignWollongong from "./pages/WebDesignWollongong";
import WebDesignIllawarra from "./pages/WebDesignIllawarra";
import WebDesignSydney from "./pages/WebDesignSydney";
import WebDesignTradies from "./pages/WebDesignTradies";
import WebDesignHealthcare from "./pages/WebDesignHealthcare";
import WebsiteReview from "./pages/WebsiteReview";
import ChecklistThankYou from "./pages/ChecklistThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/web-design-wollongong" element={<WebDesignWollongong />} />
          <Route path="/web-design-illawarra" element={<WebDesignIllawarra />} />
          <Route path="/web-design-sydney" element={<WebDesignSydney />} />
          <Route path="/web-design-tradies" element={<WebDesignTradies />} />
          <Route path="/web-design-healthcare" element={<WebDesignHealthcare />} />
          <Route path="/free-website-review" element={<WebsiteReview />} />
          <Route path="/checklist-thank-you" element={<ChecklistThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
