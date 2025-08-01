import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Import all company logo images
import CompanyLogo0 from "../assets/images/CompanyLogo-0.png";
import CompanyLogo1 from "../assets/images/CompanyLogo-1.png";
import CompanyLogo3 from "../assets/images/CompanyLogo-3.png";
import CompanyLogo4 from "../assets/images/CompanyLogo-4.png";
import CompanyLogo5 from "../assets/images/CompanyLogo-5.png";
import CompanyLogo6 from "../assets/images/CompanyLogo-6.png";
import CompanyLogo7 from "../assets/images/CompanyLogo-7.png";
import CompanyLogo8 from "../assets/images/CompanyLogo-8.png";
import CompanyLogo9 from "../assets/images/CompanyLogo-9.png";
import CompanyLogo10 from "../assets/images/CompanyLogo-10.png";
import CompanyLogo11 from "../assets/images/CompanyLogo-11.png";
import CompanyLogo12 from "../assets/images/CompanyLogo-12.png";
import CompanyLogo13 from "../assets/images/CompanyLogo-13.png";
import CompanyLogo14 from "../assets/images/CompanyLogo-14.png";
import CompanyLogo15 from "../assets/images/CompanyLogo-15.png";
import CompanyLogo16 from "../assets/images/CompanyLogo-16.png";
import CompanyLogo17 from "../assets/images/CompanyLogo-17.png";
import CompanyLogo18 from "../assets/images/CompanyLogo-18.png";
import CompanyLogo19 from "../assets/images/CompanyLogo-19.png";
import CompanyLogo20 from "../assets/images/CompanyLogo-20.png";
import CompanyLogo21 from "../assets/images/CompanyLogo-21.png";
import CompanyLogo22 from "../assets/images/CompanyLogo-22.png";
import CompanyLogo23 from "../assets/images/CompanyLogo-23.png";

export function SocialProofSection() {
	const ref = useRef(null);
	const [showAllLogos, setShowAllLogos] = useState(false);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

	const partners = [
		{
			id: "logo-0",
			name: "Company Logo",
			delay: 0,
			logo: CompanyLogo0,
		},
		{
			id: "logo-1",
			name: "Company Logo",
			delay: 0.05,
			logo: CompanyLogo1,
		},
		{
			id: "logo-3",
			name: "Company Logo",
			delay: 0.1,
			logo: CompanyLogo3,
		},
		{
			id: "logo-4",
			name: "Company Logo",
			delay: 0.15,
			logo: CompanyLogo4,
		},
		{
			id: "logo-5",
			name: "Company Logo",
			delay: 0.2,
			logo: CompanyLogo5,
		},
		{
			id: "logo-6",
			name: "Company Logo",
			delay: 0.25,
			logo: CompanyLogo6,
		},
		{
			id: "logo-7",
			name: "Company Logo",
			delay: 0.3,
			logo: CompanyLogo7,
		},
		{
			id: "logo-8",
			name: "Company Logo",
			delay: 0.35,
			logo: CompanyLogo8,
		},
		{
			id: "logo-9",
			name: "Company Logo",
			delay: 0.4,
			logo: CompanyLogo9,
		},
		{
			id: "logo-10",
			name: "Company Logo",
			delay: 0.45,
			logo: CompanyLogo10,
		},
		{
			id: "logo-11",
			name: "Company Logo",
			delay: 0.5,
			logo: CompanyLogo11,
		},
		{
			id: "logo-12",
			name: "Company Logo",
			delay: 0.55,
			logo: CompanyLogo12,
		},
		{
			id: "logo-13",
			name: "Company Logo",
			delay: 0.6,
			logo: CompanyLogo13,
		},
		{
			id: "logo-14",
			name: "Company Logo",
			delay: 0.65,
			logo: CompanyLogo14,
		},
		{
			id: "logo-15",
			name: "Company Logo",
			delay: 0.7,
			logo: CompanyLogo15,
		},
		{
			id: "logo-16",
			name: "Company Logo",
			delay: 0.75,
			logo: CompanyLogo16,
		},
		{
			id: "logo-17",
			name: "Company Logo",
			delay: 0.8,
			logo: CompanyLogo17,
		},
		{
			id: "logo-18",
			name: "Company Logo",
			delay: 0.85,
			logo: CompanyLogo18,
		},
		{
			id: "logo-19",
			name: "Company Logo",
			delay: 0.9,
			logo: CompanyLogo19,
		},
		{
			id: "logo-20",
			name: "Company Logo",
			delay: 0.95,
			logo: CompanyLogo20,
		},
		{
			id: "logo-21",
			name: "Company Logo",
			delay: 1,
			logo: CompanyLogo21,
		},
		{
			id: "logo-22",
			name: "Company Logo",
			delay: 1.05,
			logo: CompanyLogo22,
		},
		{
			id: "logo-23",
			name: "Company Logo",
			delay: 1.1,
			logo: CompanyLogo23,
		},
	];

	// Show only first 19 logos on desktop initially
	const visiblePartners = showAllLogos ? partners : partners.slice(0, 19);
			// const remainingCount = partners.length - 19;

	return (
		<section
			ref={ref}
			className="overflow-hidden relative pt-16 pb-8 md:pt-20 lg:pt-24 md:pb-16 lg:pb-20"
		>
			<div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
				<motion.div style={{ y }} className="text-center">
					<motion.h2
						className="mb-8 text-5xl font-bold text-black md:text-6xl lg:text-7xl md:mb-16 lg:mb-20 tracking-title leading-title"
						style={{ lineHeight: "1.1" }}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						Trusted by
						<br />
						<span className="text-brand-gradient">
							Top-Tier Biopharma Experts
						</span>
					</motion.h2>

					{/* Desktop: Show logos with "and more" functionality */}
					<div className="hidden md:block">
						<div className="grid grid-cols-10 gap-4 items-center mx-auto max-w-6xl lg:gap-6">
							{visiblePartners.map((partner) => (
								<motion.div
									key={partner.id}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: partner.delay,
									}}
									viewport={{ once: true }}
									className="group"
								>
									<motion.div
										className="relative p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300 lg:p-6 md:rounded-xl hover:bg-white/80 hover:border-gray-300/50"
										whileHover={{ scale: 1.02 }}
									>
										<img
											src={partner.logo}
											alt={partner.name}
											className="object-contain w-full h-full"
										/>
									</motion.div>
								</motion.div>
							))}

							{/* "And more" button when not showing all logos */}
							{!showAllLogos && (
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: 0.9,
									}}
									viewport={{ once: true }}
									className="group"
								>
									<motion.button
										onClick={() => setShowAllLogos(true)}
										className="relative p-4"
										whileHover={{ scale: 1.02 }}
									>
										<div className="inline-flex h-[40px] px-6 py-2 justify-center items-center gap-2.5 rounded-full border border-white/40 bg-gradient-to-b from-white/30 via-white/20 to-white/10 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-1px_0_0_rgba(255,255,255,0.1)] text-[20px] font-semibold leading-7 text-[#111111] whitespace-nowrap">
											and more...
										</div>
									</motion.button>
								</motion.div>
							)}
						</div>
					</div>

					{/* Mobile: Show only 2 rows (10 logos + "More...") */}
					<div className="block md:hidden">
						<div className="grid grid-cols-5 gap-2 items-center mx-auto max-w-6xl">
							{/* First 9 logos */}
							{partners.slice(0, 9).map((partner) => (
								<motion.div
									key={partner.id}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: partner.delay,
									}}
									viewport={{ once: true }}
									className="group"
								>
									<motion.div
										className="relative p-2 bg-gray-100 rounded-lg border border-gray-200 transition-all duration-300 hover:bg-white/80 hover:border-gray-300/50"
										whileHover={{ scale: 1.02 }}
									>
										<div className="flex justify-center items-center mx-auto w-12 h-6 bg-gray-300 rounded">
											<div className="text-xs font-medium text-gray-500">
												LOGO
											</div>
										</div>
									</motion.div>
								</motion.div>
							))}

							{/* "More..." text in the 10th position */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: 0.45,
								}}
								viewport={{ once: true }}
								className="group"
							>
								<div className="relative p-2 rounded-lg transition-all duration-300">
									<div className="flex justify-center items-center mx-auto w-12 h-6">
										<div className="text-xs italic font-medium text-red-600">
											More...
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
