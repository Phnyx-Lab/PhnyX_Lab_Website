import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
import { Input } from "../ui/input";

export function NewsroomContentSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Product",
    "Technology & Research", 
    "Industry Insights",
    "Company News"
  ];

  const allArticles = [
    {
      id: 1,
      category: "Technology & Research",
      title: "The Power of Modular RAG in Biopharma",
      excerpt: "Discover how our revolutionary modular RAG architecture is transforming data processing and knowledge extraction in pharmaceutical research.",
      readTime: "7 min read",
      date: "Dec 15, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      category: "Industry Insights",
      title: "Why Vertical AI is the Future for Complex Industries",
      excerpt: "Generic AI solutions fall short in regulated industries. We explore why vertical AI approaches are essential for pharmaceutical innovation.",
      readTime: "5 min read",
      date: "Dec 12, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      category: "Product",
      title: "Cheiron vs. Generic LLMs: A Data-Driven Comparison",
      excerpt: "Real-world performance metrics demonstrate Cheiron's superiority over general-purpose language models in pharmaceutical document processing.",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      category: "Company News",
      title: "PhnyX Lab Expands Korean Operations",
      excerpt: "We've opened our new Seoul office to strengthen our presence in the Asian pharmaceutical market and accelerate global partnerships.",
      readTime: "3 min read",
      date: "Dec 8, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      category: "Technology & Research",
      title: "Breaking Down Data Silos in Drug Discovery",
      excerpt: "How AI-powered data integration is revolutionizing pharmaceutical research workflows and accelerating time-to-market for new treatments.",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      category: "Product",
      title: "Document Copilot: Q4 Feature Updates",
      excerpt: "New capabilities include advanced OCR processing, multi-language support, and enhanced regulatory compliance features.",
      readTime: "4 min read",
      date: "Dec 3, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      category: "Industry Insights",
      title: "The ROI of AI in Pharmaceutical Manufacturing",
      excerpt: "Quantifying the business impact of AI adoption in pharma manufacturing processes, from quality control to supply chain optimization.",
      readTime: "6 min read",
      date: "Nov 30, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 8,
      category: "Technology & Research",
      title: "Ensuring AI Safety in Clinical Research",
      excerpt: "Our approach to building trustworthy AI systems that meet the stringent safety and compliance requirements of clinical environments.",
      readTime: "9 min read",
      date: "Nov 28, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 9,
      category: "Company News",
      title: "PhnyX Lab Joins BioPharma Innovation Consortium",
      excerpt: "Partnership with leading pharmaceutical companies to advance AI standardization and best practices across the industry.",
      readTime: "4 min read",
      date: "Nov 25, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 10,
      category: "Product",
      title: "Cheiron Platform: New Analytics Dashboard",
      excerpt: "Enhanced visualization and reporting capabilities provide deeper insights into document processing workflows and performance metrics.",
      readTime: "5 min read",
      date: "Nov 22, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 11,
      category: "Industry Insights",
      title: "Future of Regulatory AI in Europe",
      excerpt: "Analysis of emerging EU regulations for AI in healthcare and their impact on pharmaceutical innovation and compliance strategies.",
      readTime: "7 min read",
      date: "Nov 20, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      id: 12,
      category: "Technology & Research",
      title: "Federated Learning for Pharmaceutical Research",
      excerpt: "How federated learning enables collaborative drug discovery while maintaining data privacy and regulatory compliance across organizations.",
      readTime: "10 min read",
      date: "Nov 18, 2024",
      image: "/api/placeholder/400/300"
    }
  ];

  // Filter articles based on active filter and search query
  const filteredArticles = allArticles.filter(article => {
    const matchesFilter = activeFilter === "All" || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const loadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 6, filteredArticles.length));
  };

  return (
    <section className="section-spacing-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
            Comprehensive<br />
            <span className="text-red-600">Content Library</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 tracking-body leading-body font-condensed">
            Find the information that matters most to you. Filter by category or search for specific topics.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setVisibleArticles(9);
              }}
              className={`px-6 py-3 rounded-xl font-medium tracking-subtitle transition-all duration-300 ${
                activeFilter === category
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.slice(0, visibleArticles).map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-red-200 transition-all duration-300 group">
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500 group-hover:text-gray-600 transition-colors">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Tag className="w-6 h-6" />
                  </div>
                  <div className="font-medium text-sm">Article Image</div>
                  <div className="text-xs">{article.category}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-subtitle leading-tight group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 font-condensed tracking-body leading-relaxed line-clamp-3">
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
                    className="text-red-600 hover:bg-red-50 font-medium tracking-subtitle text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleArticles < filteredArticles.length && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              size="lg"
              variant="outline"
              className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg px-12 py-5 h-auto font-medium tracking-body rounded-xl"
            >
              Load More Articles ({filteredArticles.length - visibleArticles} remaining)
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 font-condensed">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}