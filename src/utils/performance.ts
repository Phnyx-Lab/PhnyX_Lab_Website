// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Mark the start of a performance measurement
  startMeasure(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(`${name}-start`);
    }
  }

  // End a performance measurement and log the result
  endMeasure(name: string): number | null {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        performance.mark(`${name}-end`);
        performance.measure(name, `${name}-start`, `${name}-end`);
        
        const measure = performance.getEntriesByName(name)[0];
        const duration = measure?.duration || 0;
        
        this.metrics.set(name, duration);
        
        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
        }
        
        // Send to analytics in production
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'timing_complete', {
            name: name,
            value: Math.round(duration)
          });
        }
        
        return duration;
      } catch (error) {
        console.warn('Performance measurement failed:', error);
        return null;
      }
    }
    return null;
  }

  // Get all collected metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Set a metric value
  setMetric(name: string, value: number): void {
    this.metrics.set(name, value);
  }

  // Monitor Core Web Vitals
  monitorCoreWebVitals(): void {
    if (typeof window !== 'undefined') {
      // Monitor LCP (Largest Contentful Paint)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('LCP', lastEntry.startTime);
        
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'web_vital', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            delta: Math.round(lastEntry.startTime)
          });
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID (First Input Delay)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.set('FID', entry.processingStart - entry.startTime);
          
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'web_vital', {
              name: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
              delta: Math.round(entry.processingStart - entry.startTime)
            });
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Monitor CLS (Cumulative Layout Shift)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.set('CLS', clsValue);
          }
        });
        
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'web_vital', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            delta: Math.round(clsValue * 1000)
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
}

// Error boundary utility
export class ErrorTracker {
  static track(error: Error, errorInfo?: any): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application Error:', error, errorInfo);
    }

    // Send to analytics/error tracking service in production
    if (typeof window !== 'undefined') {
      // Google Analytics error tracking
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false
        });
      }

      // You can also integrate with services like Sentry here
      // Sentry.captureException(error, { extra: errorInfo });
    }
  }

  static trackNetworkError(url: string, status: number): void {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'network_error', {
        event_category: 'Network',
        event_label: url,
        value: status
      });
    }
  }
}

// Initialize performance monitoring
export const initializePerformanceMonitoring = (): void => {
  if (typeof window !== 'undefined') {
    const monitor = PerformanceMonitor.getInstance();
    monitor.monitorCoreWebVitals();

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          monitor.setMetric('domContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
          monitor.setMetric('loadComplete', navigation.loadEventEnd - navigation.loadEventStart);
          monitor.setMetric('ttfb', navigation.responseStart - navigation.requestStart);
        }
      }, 0);
    });

    // Global error handler
    window.addEventListener('error', (event) => {
      ErrorTracker.track(new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      ErrorTracker.track(new Error(event.reason), {
        type: 'unhandledrejection'
      });
    });
  }
};