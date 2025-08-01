import { MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import LinkedinIcon from "@/src/assets/svg/LinkedinIcon";

// Import team member images
import MinseokImage from "../../assets/images/Minseok.png";
import JasonImage from "../../assets/images/Jason.png";
import HarshitImage from "../../assets/images/Harshit.png";

export function CompanyTeamSection() {
	const coFounders = [
		{
			name: "Minseok Bae",
			role: "CEO & Co-Founder",
			education: "B.S. & M.S. in CS, Stanford University",
			description: "",
			image: MinseokImage,
			linkedin: "https://www.linkedin.com/in/minseok-bae-236955244/",
		},
		{
			name: "Jason Park",
			role: "CPO & Co-Founder",
			education: "B.S. in Mathematics, M.S. in CS, Stanford University",
			achievements: "2x USAMO Qualifier",
			description: "",
			image: JasonImage,
			linkedin: "https://www.linkedin.com/in/jpark26/",
		},
		{
			name: "Harshit Gupta",
			role: "CTO & Co-Founder",
			education: "B.S. in CS, IIT Bombay; M.S. in CS, Stanford University",
			achievements: "Gold Medalist, Indian Physics Olympiad",
			description: "",
			image: HarshitImage,
			linkedin: "https://www.linkedin.com/in/harshitgupta412/",
		},
	];

	const locations = [
		{
			city: "Palo Alto",
			country: "USA",
			description:
				"Our technology headquarters is located in the epicenter of global innovation, giving us access to the world's leading AI research and talent.",
			highlights: [
				"Heart of Silicon Valley",
				"Access to Stanford Research",
				"Top-tier AI talent pool",
				"Innovation ecosystem",
			],
			image:
				"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
		{
			city: "Seoul",
			country: "Korea",
			description:
				"Our business headquarters in Seoul drives our commercial strategy and provides a crucial gateway to the dynamic Asian biopharma market.",
			highlights: [
				"Gateway to Asian markets",
				"Strong biopharma presence",
				"Tech innovation hub",
				"Cultural diversity",
			],
			image:
				"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
		},
	];

	return (
		<section className="bg-gray-50 section-spacing-xl">
			<div className="px-6 mx-auto max-w-7xl lg:px-8">
				{/* Header */}
				<div className="mb-20 text-center">
					<h2 className="mb-8 text-4xl font-bold text-black md:text-6xl lg:text-7xl xl:text-8xl tracking-hero leading-hero">
						The Minds Behind
						<br />
						<span className="text-gray-600">the Mission</span>
					</h2>

					<p className="mx-auto max-w-4xl text-xl text-gray-600 md:text-2xl tracking-body leading-body font-condensed">
						We are a team of world-class engineers, scientists, and business
						leaders united by a single vision:{" "}
						<span className="font-semibold text-gray-900">
							transforming how the world's most critical work gets done.
						</span>
					</p>
				</div>

				{/* Co-Founders */}
				<div className="mb-20">
					<h3 className="mb-16 text-3xl font-bold text-center text-gray-900 md:text-4xl tracking-title">
						Co-Founders
					</h3>

					<div className="grid gap-8 mx-auto max-w-5xl transition-all duration-300 md:grid-cols-3">
						{coFounders.map((founder) => (
							<a
								key={founder.name}
								href={founder.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md group"
							>
								{/* Profile Image Placeholder */}
								<div className="flex justify-center items-center mb-6 aspect-square">
									<ImageWithFallback
										src={founder.image}
										alt={founder.name}
										className="rounded-xl"
									/>
								</div>

								<div className="mb-4">
									<div className="flex justify-between items-start mb-2">
										<h4 className="text-xl font-bold text-gray-900 tracking-subtitle">
											{founder.name}
										</h4>

										<LinkedinIcon />
										{/* <ExternalLink className="w-5 h-5" /> */}
									</div>
									<div className="mb-2 text-sm font-medium text-gray-600">
										{founder.role}
									</div>
									<div className="mb-1 text-xs text-gray-500 font-condensed">
										{founder.education}
									</div>
									{founder.achievements && (
										<div className="mb-3 text-xs font-medium text-gray-700">
											{founder.achievements}
										</div>
									)}
								</div>

								<p className="text-sm leading-relaxed text-gray-600 font-condensed tracking-body">
									{founder.description}
								</p>
							</a>
						))}
					</div>
				</div>

				{/* Team Culture */}
				<div className="mb-20">
					<div className="p-12 text-white bg-gray-900 rounded-xl md:p-16">
						<div className="mx-auto max-w-4xl">
							<h3 className="mb-6 text-3xl font-bold md:text-4xl tracking-title">
								Built by Exceptional People
							</h3>
							<p className="mb-8 text-xl text-gray-300 font-condensed tracking-body">
								Our team combines world-class technical expertise with deep
								industry knowledge. From Stanford researchers to Olympiad
								medalists, we attract individuals who share our passion for
								solving humanity's most important challenges.
							</p>
							<div className="grid gap-8 md:grid-cols-3">
								<div className="text-center">
									<div className="mb-2 text-2xl font-bold">Stanford & IIT</div>
									<div className="text-sm text-gray-400 font-condensed">
										World-class education
									</div>
								</div>
								<div className="text-center">
									<div className="mb-2 text-2xl font-bold">Olympiad Level</div>
									<div className="text-sm text-gray-400 font-condensed">
										Competition excellence
									</div>
								</div>
								<div className="text-center">
									<div className="mb-2 text-2xl font-bold">
										Global Experience
									</div>
									<div className="text-sm text-gray-400 font-condensed">
										Cross-cultural expertise
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Our Hubs Section - No Role Badges */}
				<div className="mb-20">
					<div className="mb-16 text-center">
						<h3 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl tracking-title leading-title">
							Our <span className="text-red-600">Hubs</span>
						</h3>

						<p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl tracking-body leading-body font-condensed">
							Innovating from the two most dynamic tech hubs in the world.
							Choose the location that best fits your lifestyle and career
							goals.
						</p>
					</div>

					{/* Locations Grid - No Role Badges */}
					<div className="grid gap-12 lg:grid-cols-2">
						{locations.map((location) => (
							<div
								key={`${location.city}-${location.country}`}
								className="group"
							>
								{/* Location Image */}
								<div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-xl mb-8">
									<ImageWithFallback
										src={location.image}
										alt={`${location.city} office location`}
										className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								{/* Location Header - No Badge */}
								<div className="mb-6">
									<h4 className="mb-2 text-2xl font-bold text-gray-900 tracking-subtitle">
										{location.city}
									</h4>
									<div className="flex gap-2 items-center text-gray-500">
										<MapPin className="w-4 h-4" />
										<span className="font-condensed tracking-body">
											{location.country}
										</span>
									</div>
								</div>

								{/* Description */}
								<p className="mb-6 leading-relaxed text-gray-600 font-condensed tracking-body">
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
