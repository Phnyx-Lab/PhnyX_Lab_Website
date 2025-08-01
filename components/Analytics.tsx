import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  gaId?: string;
  hotjarId?: string;
}

export function Analytics({ 
  gaId = "G-XXXXXXXXXX", // Replace with actual GA4 ID
  hotjarId = "XXXXXXX" // Replace with actual Hotjar ID
}: AnalyticsProps) {
  
  useEffect(() => {
    // Google Analytics 4
    if (gaId && gaId !== "G-XXXXXXXXXX") {
      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);
      
      // Initialize GA4
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
    
    // Hotjar
    if (hotjarId && hotjarId !== "XXXXXXX") {
      (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
        h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = { hjid: hotjarId, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window as any, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
  }, [gaId, hotjarId]);
  
  return null;
}

// Utility functions for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_title,
      page_location
    });
  }
};