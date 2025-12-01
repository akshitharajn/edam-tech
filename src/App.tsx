import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Technologies from "./pages/Technologies";
import Volunteer from "./pages/Volunteer";
import Join from "./pages/Join";
import Suggest from "./pages/Suggest";
import HundredDays from "./pages/HundredDays";
import Team from "./pages/Team.tsx";
import Spotlights from "./pages/Spotlights";
import EDAMChapters from "./pages/EDAMChapters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
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
            <Route path="/team" element={<Team />} />
            <Route path="/spotlights" element={<Spotlights />} />
            <Route path="/e-dam-chapters" element={<EDAMChapters />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
