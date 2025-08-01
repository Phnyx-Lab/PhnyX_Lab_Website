import { Button } from "../ui/button";
import { Brain, Search, Zap, ArrowRight } from "lucide-react";

export function CheironSection() {
	return (
		<section
			id="cheiron-search"
			className="overflow-hidden relative bg-gradient-to-br from-gray-50 to-white section-spacing-xl"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
				<div className="absolute right-1/3 bottom-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
				{/* Header */}
				<div className="mb-20 text-center">
					<h2 className="mb-6 text-6xl font-bold text-red-600 md:text-7xl lg:text-8xl tracking-hero leading-hero">
						Cheiron Search
					</h2>

					<p className="mx-auto max-w-4xl text-xl text-gray-600 md:text-2xl tracking-body leading-body font-condensed">
						Integrate all your internal and external data to provide credible,
						accurate, and traceable answers from 20+ databases.
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid gap-16 items-center mb-20 lg:grid-cols-2">
					{/* Left: Features */}
					<div className="space-y-8">
						<div className="grid gap-6">
							<div className="flex gap-4 items-start p-6 bg-white border border-gray-200">
								<div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-red-50 border border-red-200">
									<Search className="w-6 h-6 text-red-600" />
								</div>
								<div>
									<h4 className="mb-2 text-xl font-bold text-gray-900 tracking-subtitle">
										Answer Engine
									</h4>
									<p className="text-gray-600 font-condensed tracking-body">
										20+ databases integrated with real-time source verification
									</p>
								</div>
							</div>

							<div className="flex gap-4 items-start p-6 bg-white border border-gray-200">
								<div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-red-50 border border-red-200">
									<Brain className="w-6 h-6 text-red-600" />
								</div>
								<div>
									<h4 className="mb-2 text-xl font-bold text-gray-900 tracking-subtitle">
										AI Research
									</h4>
									<p className="text-gray-600 font-condensed tracking-body">
										Automated literature reviews and data analysis
									</p>
								</div>
							</div>

							<div className="flex gap-4 items-start p-6 bg-white border border-gray-200">
								<div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-red-50 border border-red-200">
									<Zap className="w-6 h-6 text-red-600" />
								</div>
								<div>
									<h4 className="mb-2 text-xl font-bold text-gray-900 tracking-subtitle">
										Fast Results
									</h4>
									<p className="text-gray-600 font-condensed tracking-body">
										Get expert-level insights in minutes, not weeks
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right: Demo Video */}
					<div className="relative">
						<div className="aspect-[4/3] bg-gray-100 overflow-hidden shadow-2xl border border-gray-200 rounded-2xl">
							<div className="flex justify-center items-center w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
								<iframe
									className="w-full h-full border-none"
									src="https://www.youtube.com/embed/y34ozFW7FI8?si=jEo4cMvSNVMTa-Ku"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
								{/* <div className="text-center">
                  <div className="flex justify-center items-center mx-auto mb-8 w-24 h-24 bg-white border border-gray-300 shadow-lg">
                    <Play className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="mb-3 text-2xl font-bold text-gray-700 tracking-subtitle">Cheiron Search Demo</div>
                  <div className="text-base text-gray-500 font-condensed">See how research teams save 80% of their time</div>
                </div> */}
							</div>
						</div>

						{/* Performance Stats Overlay */}
						{/* <div className="absolute -bottom-4 -left-4 p-6 bg-white border border-gray-200 shadow-lg">
							<div className="text-center">
								<div className="mb-1 text-2xl font-bold text-red-600">20+</div>
								<div className="text-xs text-gray-600 font-condensed">
									Databases
								</div>
							</div>
						</div>

						<div className="absolute -top-4 -right-4 p-6 bg-white border border-gray-200 shadow-lg">
							<div className="text-center">
								<div className="mb-1 text-2xl font-bold text-gray-900">95%</div>
								<div className="text-xs text-gray-600 font-condensed">
									Accuracy
								</div>
							</div>
						</div> */}
					</div>
				</div>

				{/* CTA */}
				<div className="text-center">
					<Button
						size="lg"
						className="px-12 py-4 h-auto text-xl font-bold text-white bg-red-600 shadow-lg hover:bg-red-700 tracking-subtitle"
						onClick={() => {
							window.open("https://cheiron.phnyx.ai/", "_blank", "noopener");
						}}
					>
						Try Cheiron Search
						<ArrowRight className="ml-3 w-6 h-6" />
					</Button>
				</div>
			</div>
		</section>
	);
}
