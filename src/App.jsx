import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Offer from "./pages/Offer";
import "@/App.css";

/**
 * Project: Chinora Fashion Academy
 * Author: Laziz
 * Date: 2025-09-07
 */

const queryClient = new QueryClient();
console.log(
  "%c Developed with ❤️ by Laziz ",
  "color: white; background: linear-gradient(90deg, #6366f1, #4ade80, #06b6d4); font-size:18px; font-weight:bold; padding:8px 16px; border-radius:8px;"
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offer" element={<Offer />} />
          {/* <Route path="/offer-v2" element={<OfferV2 />} /> */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;