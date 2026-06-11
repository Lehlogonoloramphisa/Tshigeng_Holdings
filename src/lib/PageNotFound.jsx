import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8">
          <span className="font-heading text-3xl font-bold text-primary">404</span>
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="font-body font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}