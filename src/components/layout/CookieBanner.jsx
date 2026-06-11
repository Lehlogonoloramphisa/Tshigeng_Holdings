import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'tshigeng_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!saved);
  }, []);

  const saveChoice = (choice) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, savedAt: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-xl border border-border bg-card p-5 shadow-2xl shadow-primary/15">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-card-foreground">
                Cookie Notice
              </h2>
              <p className="mt-1 max-w-3xl font-body text-sm leading-relaxed text-muted-foreground">
                We use essential storage to remember your cookie choice and keep the website working properly. Optional analytics or marketing cookies are not currently active. Read our{' '}
                <Link to="/cookie-policy" className="font-semibold text-primary hover:underline">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="font-semibold text-primary hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              className="font-body font-semibold"
              onClick={() => saveChoice('essential-only')}
            >
              Essential Only
            </Button>
            <Button
              type="button"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold"
              onClick={() => saveChoice('accepted')}
            >
              Accept
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close cookie notice"
              onClick={() => saveChoice('dismissed')}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
