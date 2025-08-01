import { Footer } from "./Footer";
import { ArrowRight, Calendar, Clock, Share, User } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FinalCTASection } from "./FinalCTASection";

export function NewsroomPage() {
  const featuredStory = {
    category: "Company News",
    featured: true,
    title: "PhnyX Lab Raises $50M Series B to Accelerate AI-Driven Drug Discovery",
    excerpt: "New funding will support global expansion and development of next-generation AI models for pharmaceutical research and development.",
    author: "PhnyX Lab Team",
    date: "12/15/2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
  };

  const recentUpdates = [
    {
      title: "The Future of Medical Writing: How AI is Transforming Regulatory Documents",
      excerpt: "Discover how PhnyX Lab's technology is revolutionizing the way pharmaceutical companies approach regulatory documentation.",
      date: "12/10/2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Cheiron Platform Achieves 95% Accuracy in Clinical Document Processing",
      excerpt: "Latest benchmarks show our AI platform significantly outperforms traditional document processing methods.",
      date: "12/8/2024", 
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "PhnyX Lab Partners with Leading Pharma Companies for AI Integration",
      excerpt: "Strategic partnerships will accelerate adoption of AI-driven workflows across the pharmaceutical industry.",
      date: "12/5/2024",
      readTime: "4 min read", 
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-16">
      {/* Featured Story Section */}
      <section className="section-spacing-xl bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2 tracking-title">
              Featured Story
            </h1>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-lg border border-red-200">
                    {featuredStory.category}
                  </span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm font-medium rounded-lg border border-yellow-200">
                    Featured
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-title leading-tight">
                  {featuredStory.title}
                </h2>

                <p className="text-lg text-gray-600 mb-8 font-condensed tracking-body leading-relaxed">
                  {featuredStory.excerpt}
                </p>

                <div className="flex items-center gap-4 mb-8 text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-condensed">{featuredStory.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-condensed">{featuredStory.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-condensed">{featuredStory.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 h-auto font-bold tracking-subtitle rounded-lg"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-3 h-auto font-medium tracking-body rounded-lg"
                  >
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="lg:order-last">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={featuredStory.image}
                    alt="Brain neural network visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-2 tracking-title">
              Recent Updates
            </h2>
            <div className="w-12 h-1 bg-red-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentUpdates.map((article, index) => (
              <article 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-subtitle leading-tight group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-condensed tracking-body leading-relaxed text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-condensed">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="font-condensed">{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-12 py-5 h-auto font-medium tracking-body rounded-xl"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-900 p-12 md:p-16 rounded-xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-title">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-xl text-gray-300 mb-8 font-condensed tracking-body">
                Join thousands of biopharma professionals who trust PhnyX Lab insights. 
                Discover how AI is transforming pharmaceutical research and development.
              </p>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-4 h-auto font-bold tracking-subtitle shadow-lg rounded-lg"
                onClick={() => window.location.hash = "request-demo"}
              >
                Contact Us
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <FinalCTASection />
      <Footer />
    </div>
  );
}