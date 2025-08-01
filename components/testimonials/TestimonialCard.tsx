import { Testimonial } from "./testimonialData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 min-w-[400px] max-w-[400px] flex-shrink-0">
      {/* Company Logo/Name */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-bold text-sm">{testimonial.logo}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 tracking-subtitle">{testimonial.company}</h3>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-600 leading-relaxed tracking-body text-base">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );
}