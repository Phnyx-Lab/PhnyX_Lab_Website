import { useState } from "react";
import {
	Layers,
	Zap,
	Shield,
	Boxes,
	CheckCircle,
} from "lucide-react";

export function CompanyTechnologySection() {
	const [activeTab, setActiveTab] = useState("scalability");

	const techFeatures = {
		scalability: {
			icon: Layers,
			title: "Scalability",
			subtitle: "Modular 'Lego Block' Architecture",
			description:
				"Our modular architecture allows us to dynamically build and adapt AI pipelines for any data source or workflow. This approach reduces deployment time by over 50% and improves performance by up to 40%.",
			benefits: [
				"50% faster deployment time",
				"40% performance improvement",
				"Unlimited pipeline combinations",
				"Dynamic adaptation to new data sources",
			],
		},
		flexibility: {
			icon: Zap,
			title: "Flexibility",
			subtitle: "Auto-Optimization Engine",
			description:
				"With over 400 million theoretical pipeline combinations, our Auto-Optimization Engine finds the perfect configuration for your specific needs, ensuring you always have the best-performing, most up-to-date technology.",
			benefits: [
				"400M+ pipeline combinations",
				"Automatic optimization",
				"Always up-to-date technology",
				"Custom configuration per use case",
			],
		},
		security: {
			icon: Shield,
			title: "Security",
			subtitle: "Zero-Trust Enterprise Model",
			description:
				"From dedicated VPC environments to our Zero-Trust model, we provide enterprise-grade security that meets stringent biopharma compliance standards like GxP and HIPAA.",
			benefits: [
				"Dedicated VPC environments",
				"Zero-Trust security model",
				"GxP & HIPAA compliant",
				"Enterprise-grade protection",
			],
		},
	};

	return (
		<section className="section-spacing bg-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8 md:mb-20">
					<h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-hero leading-hero">
						Why Our Technology
						<br />
						<span className="text-gray-600">Is Fundamentally Different</span>
					</h2>

					<p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto tracking-body leading-relaxed font-condensed">
						Generic AI solutions fail in the complex, regulated world of
						biopharma. We built our
						<span className="text-gray-900 font-semibold">
							{" "}
							PhnyX Modular RAG architecture
						</span>{" "}
						from the ground up to solve the industry's core challenges:
						fragmented data and inefficient workflows.
					</p>
				</div>

				{/* Core Differentiator */}
				<div className="mb-12 md:mb-24">
					<div className="bg-gray-50 p-12 md:p-16 rounded-xl border border-gray-200">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-title text-gray-900">
									PhnyX Modular RAG Architecture
								</h3>
								<div className="space-y-6 text-lg text-gray-600 font-condensed tracking-body leading-relaxed">
									<p>
										Unlike monolithic AI systems, our modular approach treats
										each component as an interchangeable "Lego block" that can
										be dynamically combined and optimized.
									</p>
									<p>
										This revolutionary design delivers unparalleled{" "}
										<span className="text-gray-900 font-semibold">
											Scalability
										</span>
										,
										<span className="text-gray-900 font-semibold">
											{" "}
											Flexibility
										</span>
										, and
										<span className="text-gray-900 font-semibold">
											{" "}
											Security
										</span>{" "}
										- the three pillars that make PhnyX Lab fundamentally
										different by design.
									</p>
								</div>

								<div className="grid grid-cols-3 gap-6 mt-12">
									<div className="text-center">
										<div className="text-2xl font-bold text-gray-900 mb-1">
											400M+
										</div>
										<div className="text-xs text-gray-500 font-condensed">
											Pipeline Combinations
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-gray-900 mb-1">
											50%
										</div>
										<div className="text-xs text-gray-500 font-condensed">
											Faster Deployment
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-gray-900 mb-1">
											100%
										</div>
										<div className="text-xs text-gray-500 font-condensed">
											Compliant & Secure
										</div>
									</div>
								</div>
							</div>

							{/* Architecture Visualization */}
							<div className="relative">
								<div className="aspect-square bg-white rounded-xl border border-gray-200 p-8 flex items-center justify-center">
									<div className="text-center">
										{/* Modular Block Visualization */}
										<div className="grid grid-cols-3 gap-3 mb-8">
											{[...Array(9)].map((_, i) => (
												<div
													key={i}
													className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center"
												>
													<Boxes className="w-6 h-6 text-gray-600" />
												</div>
											))}
										</div>
										<div className="text-gray-900 font-medium mb-2">
											Modular RAG Architecture
										</div>
										<div className="text-gray-600 text-sm font-condensed">
											Dynamic • Scalable • Secure
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Simple Feature Tabs */}
				<div className="mb-10 md:mb-20">
					<h3 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 tracking-title text-gray-900">
						Three Core Strengths
					</h3>

					{/* Tab Navigation */}
					<div className="flex justify-center mb-6 md:mb-12">
						<div className="inline-flex bg-gray-100 p-2 rounded-xl border border-gray-200">
							{Object.entries(techFeatures).map(([key, feature]) => (
								<button
									key={key}
									onClick={() => setActiveTab(key)}
									className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 font-medium tracking-body ${
										activeTab === key
											? "bg-white text-gray-900 shadow-sm border border-gray-200"
											: "text-gray-600 hover:text-gray-900"
									}`}
								>
									<feature.icon className="w-5 h-5" />
									<div className="text-left">
										<div className="font-semibold">{feature.title}</div>
										<div className="text-xs opacity-70">{feature.subtitle}</div>
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Tab Content */}
					<div className="max-w-6xl mx-auto">
						{Object.entries(techFeatures).map(([key, feature]) => (
							<div
								key={key}
								className={`${activeTab === key ? "block" : "hidden"} transition-all duration-500`}
							>
								<div className="bg-gray-50 p-12 md:p-16 rounded-xl border border-gray-200">
									<div className="grid lg:grid-cols-2 gap-12 items-center">
										<div>
											<div className="flex items-center gap-4 mb-6">
												<div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
													<feature.icon className="w-8 h-8 text-gray-600" />
												</div>
												<div>
													<h4 className="text-2xl font-bold text-gray-900 tracking-subtitle">
														{feature.title}
													</h4>
													<div className="text-sm text-gray-600 font-condensed">
														{feature.subtitle}
													</div>
												</div>
											</div>

											<p className="text-lg text-gray-600 mb-8 font-condensed tracking-body leading-relaxed">
												{feature.description}
											</p>

											<div className="space-y-3">
												{feature.benefits.map((benefit, index) => (
													<div key={index} className="flex items-center gap-3">
														<CheckCircle className="w-5 h-5 text-gray-400" />
														<span className="text-gray-600 font-condensed tracking-body">
															{benefit}
														</span>
													</div>
												))}
											</div>
										</div>

										{/* Feature Visualization */}
										<div className="relative">
											<div className="aspect-square bg-white rounded-xl border border-gray-200 flex items-center justify-center p-8">
												<div className="text-center">
													<div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
														<feature.icon className="w-12 h-12 text-gray-600" />
													</div>
													<div className="text-gray-900 font-bold text-xl mb-2">
														{feature.title}
													</div>
													<div className="text-gray-600 text-sm font-condensed">
														{feature.subtitle}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Simple CTA Section */}
				{/* <div className="text-center">
					<div className="bg-gray-900 p-12 md:p-16 rounded-xl text-white">
						<div className="max-w-4xl mx-auto">
							<h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-title">
								Experience the PhnyX Difference
							</h3>
							<p className="text-xl text-gray-300 mb-8 font-condensed tracking-body">
								See how our fundamentally different technology approach delivers
								unmatched results in real biopharma environments. Schedule your
								technical deep-dive today.
							</p>
							<Button
								size="lg"
								className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-16 py-4 h-auto font-bold tracking-subtitle shadow-lg rounded-lg"
								onClick={() => {
									window.location.hash = "request-demo";
								}}
							>
								Schedule Technical Demo
								<ArrowRight className="w-6 h-6 ml-3" />
							</Button>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
}
