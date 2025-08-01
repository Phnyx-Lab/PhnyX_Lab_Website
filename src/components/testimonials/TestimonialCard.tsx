import { Testimonial } from "./testimonialData";

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 min-w-[400px] max-w-[400px] flex-shrink-0">
			{/* Company Logo/Name */}
			<div className="mb-6">
				<div className="flex justify-between items-center mb-4">
					<div className="flex justify-center items-center p-2 bg-gray-100 rounded-[4px]">
						<span className="text-sm font-bold text-gray-600">
							{testimonial.logo}
						</span>
					</div>
				</div>
				<h3 className="text-lg font-bold text-gray-900 tracking-subtitle">
					{testimonial.company}
				</h3>
			</div>

			{/* Quote */}
			<blockquote className="text-base leading-relaxed text-gray-600 tracking-body">
				"{testimonial.quote}"
			</blockquote>
		</div>
	);
}
