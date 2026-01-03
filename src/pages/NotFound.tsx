import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-6">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl font-heading font-bold text-primary">404</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <Link to="/">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold shadow-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
