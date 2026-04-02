import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CaseStudyTravelGuide from "./pages/CaseStudyTravelGuide.tsx";
import CaseStudyFlex2Ride from "./pages/CaseStudyFlex2Ride.tsx";
import CaseStudyConnekt from "./pages/CaseStudyConnekt.tsx";
import CaseStudyYumdash from "./pages/CaseStudyYumdash.tsx";
import CaseStudySportrex from "./pages/CaseStudySportrex.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/travelguide" element={<CaseStudyTravelGuide />} />
          <Route path="/case-study/flex2ride" element={<CaseStudyFlex2Ride />} />
          <Route path="/case-study/connekt" element={<CaseStudyConnekt />} />
          <Route path="/case-study/yumdash" element={<CaseStudyYumdash />} />
          <Route path="/case-study/sportrex" element={<CaseStudySportrex />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
