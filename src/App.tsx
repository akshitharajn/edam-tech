import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technologies from "./pages/Technologies";
import Volunteer from "./pages/Volunteer";
import Join from "./pages/Join";
import Suggest from "./pages/Suggest";
import HundredDays from "./pages/HundredDays";
import OurTeam from "./pages/OurTeam";
import Spotlights from "./pages/Spotlights";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/join" element={<Join />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/hundred-days" element={<HundredDays />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/spotlights" element={<Spotlights />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
