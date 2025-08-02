import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import AvatarSelection from "./pages/AvatarSelection";
import MatchResult from "./pages/MatchResult";
import ProfileSettings from "./pages/ProfileSettings";
import NotFound from "./pages/NotFound";
import VoiceAgent from "./components/VoiceAgent";
import RoomSelection from "./pages/RoomSelection";
import Confirmation from "./pages/Confirmation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />

          <VoiceAgent />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/avatar-selection" element={<AvatarSelection />} />
            <Route path="/match-result" element={<MatchResult />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/rooms" element={<RoomSelection />} />
            <Route path="/confirmation" element={<Confirmation />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
