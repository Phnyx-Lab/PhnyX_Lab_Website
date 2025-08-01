import { ArrowRight, Newspaper } from "lucide-react";
import { Button } from "../ui/button";

export function NewsroomCTASection() {
	return (
		<section className="bg-white section-spacing">
			<div className="px-6 mx-auto max-w-7xl lg:px-8">
				<div className="p-12 text-white bg-gray-900 rounded-xl md:p-16">
					<div className="mx-auto max-w-4xl text-center">
						<div className="flex gap-3 justify-center items-center mb-6">
							<Newspaper className="w-8 h-8 text-red-500" />
							<h3 className="text-3xl font-bold md:text-4xl tracking-title">
								Stay Ahead of Biopharma Innovation
							</h3>
						</div>
						<p className="mb-8 text-xl text-gray-300 font-condensed tracking-body">
							Join thousands of biopharma professionals who trust PhnyX Lab
							insights. Discover how AI is transforming pharmaceutical research
							and development.
						</p>

						<Button
							size="lg"
							className="px-12 py-4 h-auto text-xl font-bold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 tracking-subtitle"
							onClick={() => {
								window.location.hash = "request-demo";
							}}
						>
							Schedule Technical Demo
							<ArrowRight className="ml-3 w-6 h-6" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
