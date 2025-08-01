import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, User, LogOut } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="gradient-primary shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left - Home */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
        >
          <Home className="w-5 h-5" />
          <span className="font-semibold">Home</span>
        </Link>

        {/* Center - Brand */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl font-bold text-primary-foreground/90">
            RoomieMatch
          </h1>
        </div>

        {/* Right - Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card border-border">
            <div className="mt-8 space-y-4">
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-12 text-base"
                  onClick={() => handleNavigation("/profile")}
                >
                  <User className="w-5 h-5" />
                  Profile Settings
                </Button>
                
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-12 text-base"
                  onClick={() => handleNavigation("/")}
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;