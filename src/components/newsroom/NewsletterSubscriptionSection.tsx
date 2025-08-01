import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowRight, CheckCircle, TrendingUp, Bell, Users } from "lucide-react";

export function NewsletterSubscriptionSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  // TODO: Add a form to subscribe to the newsletter
  return (
    <section className="section-spacing-lg bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header - Updated to red */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
              Stay Ahead of<br />
              <span className="text-red-600">the Curve</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 tracking-body leading-body font-condensed">
              Get the latest from PhnyX Lab, delivered to your inbox. Industry insights, 
              product updates, and breakthrough research - all in one weekly digest.
            </p>
          </div>

          {/* Newsletter Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-subtitle">Industry Insights</h3>
              <p className="text-sm text-gray-600 font-condensed tracking-body">
                Weekly analysis of biopharma trends and market dynamics
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-subtitle">Product Updates</h3>
              <p className="text-sm text-gray-600 font-condensed tracking-body">
                First access to new features and platform improvements
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 tracking-subtitle">Exclusive Content</h3>
              <p className="text-sm text-gray-600 font-condensed tracking-body">
                Research papers and technical deep-dives for subscribers only
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-lg">
            {!isSubscribed ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-subtitle">
                    Join <span className="text-red-600">5,000+</span> Industry Professionals
                  </h3>
                  <p className="text-gray-600 font-condensed tracking-body">
                    Subscribe to our weekly newsletter and never miss important updates from the world of AI-powered biopharma.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="py-4 px-4 rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500 font-condensed tracking-body"
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-red-600 text-white hover:bg-red-700 px-6 py-4 font-bold tracking-subtitle whitespace-nowrap shadow-md rounded-full"
                    >
                      Subscribe
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center font-condensed">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                  </p>
                </form>

                {/* Social Proof - Updated subscriber count to red */}
                <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-600 mb-1">5,000+</div>
                    <div className="text-sm text-gray-600 font-condensed">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 mb-1">95%</div>
                    <div className="text-sm text-gray-600 font-condensed">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 mb-1">Weekly</div>
                    <div className="text-sm text-gray-600 font-condensed">Delivery</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                {/* Success state updated to red */}
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-subtitle">
                  Thank you for subscribing!
                </h3>
                <p className="text-gray-600 font-condensed tracking-body max-w-md mx-auto">
                  You'll receive our next newsletter on Tuesday. Welcome to the <span className="text-red-600 font-semibold">PhnyX Lab</span> community!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}