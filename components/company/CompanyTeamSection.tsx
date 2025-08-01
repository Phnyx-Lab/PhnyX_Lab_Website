import { Users, ExternalLink, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CompanyTeamSection() {
  const coFounders = [
    {
      name: "Minseok Bae",
      role: "CEO & Co-Founder",
      education: "B.S. & M.S. in CS, Stanford University",
      description: "Visionary leader bridging AI innovation with enterprise needs. Previously led AI initiatives at SK Networks.",
      image: "/api/placeholder/300/300",
      linkedin: "#"
    },
    {
      name: "Jason Park", 
      role: "CPO & Co-Founder",
      education: "B.S. in Mathematics, M.S. in CS, Stanford University",
      achievements: "2x USAMO Qualifier",
      description: "Product strategist with deep expertise in mathematical optimization and user experience design.",
      image: "/api/placeholder/300/300",
      linkedin: "#"
    },
    {
      name: "Harshit Gupta",
      role: "CTO & Co-Founder", 
      education: "B.S. in CS, IIT Bombay; M.S. in CS, Stanford University",
      achievements: "Gold Medalist, Indian Physics Olympiad",
      description: "Technical architect behind PhnyX's revolutionary modular AI infrastructure.",
      image: "/api/placeholder/300/300", 
      linkedin: "#"
    }
  ];

  const locations = [
    {
      city: "Palo Alto",
      country: "USA",
      description: "Our technology headquarters is located in the epicenter of global innovation, giving us access to the world's leading AI research and talent.",
      highlights: [
        "Heart of Silicon Valley",
        "Access to Stanford Research",
        "Top-tier AI talent pool",
        "Innovation ecosystem"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      city: "Seoul",
      country: "Korea",
      description: "Our business headquarters in Seoul drives our commercial strategy and provides a crucial gateway to the dynamic Asian biopharma market.",
      highlights: [
        "Gateway to Asian markets",
        "Strong biopharma presence",
        "Tech innovation hub",
        "Cultural diversity"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section-spacing-xl bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-8 tracking-hero leading-hero">
            The Minds Behind<br />
            <span className="text-gray-600">the Mission</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto tracking-body leading-body font-condensed">
            We are a team of world-class engineers, scientists, and business leaders 
            united by a single vision: <span className="text-gray-900 font-semibold">transforming how the world's most critical work gets done.</span>
          </p>
        </div>

        {/* Co-Founders */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-title text-gray-900">
            Co-Founders
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coFounders.map((founder, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
                {/* Profile Image Placeholder */}
                <div className="aspect-square bg-gray-100 rounded-xl mb-6 flex items-center justify-center border border-gray-200">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-500" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 tracking-subtitle">{founder.name}</h4>
                    <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="text-gray-600 font-medium text-sm mb-2">{founder.role}</div>
                  <div className="text-gray-500 text-xs font-condensed mb-1">{founder.education}</div>
                  {founder.achievements && (
                    <div className="text-gray-700 text-xs font-medium mb-3">{founder.achievements}</div>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm font-condensed tracking-body leading-relaxed">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Culture */}
        <div className="mb-20">
          <div className="bg-gray-900 p-12 md:p-16 rounded-xl text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-title">
                Built by Exceptional People
              </h3>
              <p className="text-xl text-gray-300 mb-8 font-condensed tracking-body">
                Our team combines world-class technical expertise with deep industry knowledge. 
                From Stanford PhD researchers to Olympiad medalists, we attract individuals who 
                share our passion for solving humanity's most important challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Stanford & IIT</div>
                  <div className="text-sm text-gray-400 font-condensed">World-class education</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Olympiad Level</div>
                  <div className="text-sm text-gray-400 font-condensed">Competition excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Global Experience</div>
                  <div className="text-sm text-gray-400 font-condensed">Cross-cultural expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Hubs Section - No Role Badges */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-title leading-title">
              Our <span className="text-red-600">Hubs</span>
            </h3>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-body leading-body font-condensed">
              Innovating from the two most dynamic tech hubs in the world. Choose the location that 
              best fits your lifestyle and career goals.
            </p>
          </div>

          {/* Locations Grid - No Role Badges */}
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

                {/* Location Header - No Badge */}
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 tracking-subtitle mb-2">
                    {location.city}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="font-condensed tracking-body">{location.country}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-condensed tracking-body leading-relaxed">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}