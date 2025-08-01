import { MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CareersLocationsSection() {
  const locations = [
    {
      city: "Palo Alto",
      country: "USA",
      role: "Tech HQ",
      description: "Our technology headquarters is located in the epicenter of global innovation, giving us access to the world's leading AI research and talent.",
      highlights: [
        "Heart of Silicon Valley",
        "Access to Stanford Research",
        "Top-tier AI talent pool",
        "Innovation ecosystem"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Team Size", value: "12+" },
        { label: "Founded", value: "2023" },
        { label: "Office Space", value: "2,500 sq ft" }
      ]
    },
    {
      city: "Seoul",
      country: "Korea",
      role: "Business HQ",
      description: "Our business headquarters in Seoul drives our commercial strategy and provides a crucial gateway to the dynamic Asian biopharma market.",
      highlights: [
        "Gateway to Asian markets",
        "Strong biopharma presence",
        "Tech innovation hub",
        "Cultural diversity"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Team Size", value: "8+" },
        { label: "Market Focus", value: "Asia-Pacific" },
        { label: "Office Space", value: "1,800 sq ft" }
      ]
    }
  ];

  return (
    <section className="section-spacing-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">


          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
            Our <span className="text-red-600">Hubs</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-body leading-body font-condensed">
            Innovating from the two most dynamic tech hubs in the world. Choose the location that 
            best fits your lifestyle and career goals.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <div key={index} className="group">
              {/* Location Image */}
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-xl mb-8">
                <ImageWithFallback
                  src={location.image}
                  alt={`${location.city} office location`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Location Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-subtitle">
                      {location.city}
                    </h3>
                    <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-lg border border-red-200">
                      {location.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="font-condensed tracking-body">{location.country}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 font-condensed tracking-body leading-relaxed">
                {location.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-4 tracking-subtitle">Why This Location:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {location.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 font-condensed tracking-body">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {location.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center">
                    <div className="font-bold text-gray-900 mb-1 tracking-subtitle">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-condensed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}