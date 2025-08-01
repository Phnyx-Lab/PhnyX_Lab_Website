import { Button } from "../ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export function FeaturedArticlesSection() {
  const featuredArticles = [
    {
      id: 1,
      category: "Technology & Research",
      title: "The Power of Modular RAG in Biopharma",
      excerpt: "Discover how our revolutionary modular RAG architecture is transforming data processing and knowledge extraction in pharmaceutical research, delivering unprecedented accuracy and flexibility.",
      readTime: "7 min read",
      date: "Dec 15, 2024",
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      category: "Industry Insights", 
      title: "Why Vertical AI is the Future for Complex Industries",
      excerpt: "Generic AI solutions fall short in regulated industries. We explore why vertical AI approaches are essential for pharmaceutical innovation and compliance.",
      readTime: "5 min read",
      date: "Dec 12, 2024",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      category: "Product Update",
      title: "Cheiron vs. Generic LLMs: A Data-Driven Comparison",
      excerpt: "Real-world performance metrics demonstrate Cheiron's superiority over general-purpose language models in pharmaceutical document processing and analysis.",
      readTime: "6 min read", 
      date: "Dec 10, 2024",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section className="featured-articles-section section-spacing-lg bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - Updated to red */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
            Latest Insights &<br />
            <span className="text-red-600">Featured Stories</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-body leading-body font-condensed">
            Stay informed with our most important updates, breakthrough research, and industry analysis.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Featured Article - Updated hover state to red */}
          <div className="lg:row-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-red-200 transition-all duration-300 h-full">
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Tag className="w-8 h-8" />
                  </div>
                  <div className="font-medium">Featured Article Image</div>
                  <div className="text-sm">Modular RAG Technology</div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                    {featuredArticles[0].category}
                  </span>
                  {/* Featured badge changed from blue to red */}
                  <span className="px-3 py-1 bg-red-600 rounded-lg text-xs font-medium text-white">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-subtitle leading-title">
                  {featuredArticles[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 font-condensed tracking-body leading-relaxed">
                  {featuredArticles[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-condensed">{featuredArticles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-condensed">{featuredArticles[0].readTime}</span>
                    </div>
                  </div>
                  
                  {/* Read More button changed from blue to red */}
                  <Button 
                    variant="ghost" 
                    className="text-red-600 hover:bg-red-50 font-semibold tracking-subtitle"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Featured Articles */}
          <div className="space-y-8">
            {featuredArticles.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <div className="flex">
                  {/* Placeholder Image */}
                  <div className="w-1/3 aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-8 h-8 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-medium">Article Image</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-subtitle">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 font-condensed tracking-body leading-relaxed line-clamp-2">
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
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-gray-700 hover:bg-gray-100 font-medium tracking-subtitle text-sm"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to All Articles */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-10 py-5 h-auto font-medium tracking-body rounded-xl"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}