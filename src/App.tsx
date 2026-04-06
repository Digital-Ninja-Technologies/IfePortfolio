import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import CaseStudyTravelGuide from "./pages/CaseStudyTravelGuide.tsx";
import CaseStudyFlex2Ride from "./pages/CaseStudyFlex2Ride.tsx";
import CaseStudyConnekt from "./pages/CaseStudyConnekt.tsx";
import CaseStudyYumdash from "./pages/CaseStudyYumdash.tsx";
import CaseStudySportrex from "./pages/CaseStudySportrex.tsx";
import CaseStudyBibleVerse from "./pages/CaseStudyBibleVerse.tsx";
import CaseStudyEskro from "./pages/CaseStudyEskro.tsx";
import CaseStudyTaptapSend from "./pages/CaseStudyTaptapSend.tsx";
import CaseStudySylostem from "./pages/CaseStudySylostem.tsx";
import CaseStudyConektWebsite from "./pages/CaseStudyConektWebsite.tsx";
import CaseStudySalsaSangria from "./pages/CaseStudySalsaSangria.tsx";
import CaseStudyGigatalik from "./pages/CaseStudyGigatalik.tsx";
import CaseStudyBlowX from "./pages/CaseStudyBlowX.tsx";
import CaseStudyRippleCat from "./pages/CaseStudyRippleCat.tsx";
import CaseStudySPTAirdrop from "./pages/CaseStudySPTAirdrop.tsx";
import CaseStudyGamersWallet from "./pages/CaseStudyGamersWallet.tsx";
import CaseStudyRaySup from "./pages/CaseStudyRaySup.tsx";
import CaseStudyVRExperience from "./pages/CaseStudyVRExperience.tsx";
import CaseStudyFarmLease from "./pages/CaseStudyFarmLease.tsx";
import CaseStudyBigJay from "./pages/CaseStudyBigJay.tsx";
import CaseStudyQuickRead from "./pages/CaseStudyQuickRead.tsx";
import CaseStudySquadPay from "./pages/CaseStudySquadPay.tsx";
import CaseStudyKorlodworks from "./pages/CaseStudyKorlodworks.tsx";
import CaseStudyKidsZone from "./pages/CaseStudyKidsZone.tsx";
import Works from "./pages/Works.tsx";
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
          <Route path="/works" element={<Works />} />
          <Route path="/case-study/travelguide" element={<CaseStudyTravelGuide />} />
          <Route path="/case-study/flex2ride" element={<CaseStudyFlex2Ride />} />
          <Route path="/case-study/connekt" element={<CaseStudyConnekt />} />
          <Route path="/case-study/yumdash" element={<CaseStudyYumdash />} />
          <Route path="/case-study/sportrex" element={<CaseStudySportrex />} />
          <Route path="/case-study/bible-verse" element={<CaseStudyBibleVerse />} />
          <Route path="/case-study/eskro" element={<CaseStudyEskro />} />
          <Route path="/case-study/taptap-send" element={<CaseStudyTaptapSend />} />
          <Route path="/case-study/sylostem" element={<CaseStudySylostem />} />
          <Route path="/case-study/conekt-website" element={<CaseStudyConektWebsite />} />
          <Route path="/case-study/salsa-sangria" element={<CaseStudySalsaSangria />} />
          <Route path="/case-study/gigatalik" element={<CaseStudyGigatalik />} />
          <Route path="/case-study/blowx" element={<CaseStudyBlowX />} />
          <Route path="/case-study/ripplecat" element={<CaseStudyRippleCat />} />
          <Route path="/case-study/spt-airdrop" element={<CaseStudySPTAirdrop />} />
          <Route path="/case-study/gamers-wallet" element={<CaseStudyGamersWallet />} />
          <Route path="/case-study/raysup" element={<CaseStudyRaySup />} />
          <Route path="/case-study/vr-experience" element={<CaseStudyVRExperience />} />
          <Route path="/case-study/farmlease" element={<CaseStudyFarmLease />} />
          <Route path="/case-study/bigjay" element={<CaseStudyBigJay />} />
          <Route path="/case-study/quickread" element={<CaseStudyQuickRead />} />
          <Route path="/case-study/squadpay" element={<CaseStudySquadPay />} />
          <Route path="/case-study/korlodworks" element={<CaseStudyKorlodworks />} />
          <Route path="/case-study/kids-zone" element={<CaseStudyKidsZone />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
