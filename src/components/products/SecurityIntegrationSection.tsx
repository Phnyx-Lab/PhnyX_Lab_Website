import { Shield, Lock, Globe } from "lucide-react";

export function SecurityIntegrationSection() {
	const securityFeatures = [
		{
			icon: Lock,
			title: "Zero-Trust Architecture",
			description:
				"Customer data is never used for model training and is securely protected in an isolated VPC environment.",
			highlight: "100% Data Privacy",
		},
		{
			icon: Globe,
			title: "Global Infrastructure",
			description:
				"Built on AWS global infrastructure ensuring 99.9% availability and regional data sovereignty.",
			highlight: "99.9% Uptime SLA",
		},
		{
			icon: Shield,
			title: "Regulatory Compliance",
			description:
				"Compliant with industry standards including HIPAA, GxP, and SOX for safe use in regulated environments.",
			highlight: "Coming Soon",
			isUpcoming: true,
		},
	];

	return (
		<section
			id="enterprise-security"
			className="overflow-hidden relative bg-gradient-to-br from-white to-gray-50 section-spacing-xl"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
				<div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
				{/* Header */}
				<div className="mb-20 text-center">
					<h2 className="mb-6 text-6xl font-bold text-black md:text-7xl lg:text-8xl tracking-hero leading-hero">
						<span className="text-brand-gradient">About Our Security</span>
					</h2>

					<h3 className="mb-8 text-3xl font-semibold text-gray-700 md:text-4xl tracking-subtitle">
						Enterprise-Grade Security for Biopharma Data
					</h3>

					<p className="mx-auto max-w-4xl text-xl text-gray-600 md:text-2xl tracking-body leading-body font-condensed">
						Built from the ground up with enterprise-grade security and
						compliance. Your most sensitive data deserves the highest protection
						standards.
					</p>
				</div>

				{/* Security Features Grid */}
				<div className="grid gap-8 mb-20 lg:grid-cols-3">
					{securityFeatures.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col p-8 text-center bg-white border border-gray-200"
						>
							<div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-gray-600">
								<feature.icon className="w-8 h-8 text-white" />
							</div>
							<h4 className="mb-4 text-xl font-bold text-gray-900 tracking-subtitle">
								{feature.title}
							</h4>
							<p className="flex-grow mb-6 text-gray-600 font-condensed tracking-body">
								{feature.description}
							</p>
							<div
								className={`inline-block px-3 py-1 text-sm font-medium border self-center ${
									feature.isUpcoming
										? "bg-yellow-50 text-yellow-700 border-yellow-200"
										: "bg-gray-100 text-gray-700 border-gray-200"
								}`}
							>
								{feature.highlight}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
