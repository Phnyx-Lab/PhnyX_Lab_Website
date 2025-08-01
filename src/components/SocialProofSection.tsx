import { motion } from "framer-motion";
import { useState } from "react";

// Import all company logo images
import Pfizer from "../assets/svg/pfizer.svg";
import Lgchem from "../assets/svg/lgchem.svg";
import Sanofi from "../assets/svg/sanofi.svg";
import Skbasa from "../assets/svg/skbasa.svg";
import Roche from "../assets/svg/roche.svg";
import Skbp from "../assets/svg/skbp.svg";
import Msd from "../assets/svg/msd.svg";
import Samsungbio from "../assets/svg/samsungbio.svg";
import Abbivie from "../assets/svg/abbvie.svg";
import Novartis from "../assets/svg/novatis.svg";
import Daichi from "../assets/svg/daichi.svg";
import Daewoong from "../assets/svg/daewoong.svg";
import Boryung from "../assets/svg/boryung.svg";
import Yuhan from "../assets/svg/yuhan.svg";
import Celltrion from "../assets/svg/celltrion.svg";
import Jeil from "../assets/svg/jeil.svg";
import Gc from "../assets/svg/gc.svg";


export function SocialProofSection() {
	const [isFirstRowHovered, setIsFirstRowHovered] = useState(false);
	const [isSecondRowHovered, setIsSecondRowHovered] = useState(false);

	// First row logos
	const firstRowLogos = [
		{ name: "Pfizer", logo: Pfizer },
		{ name: "LG Chem", logo: Lgchem },
		{ name: "Sanofi", logo: Sanofi },
		{ name: "SK Bioscience", logo: Skbasa },
		{ name: "Roche", logo: Roche },
		{ name: "SK Biopharm", logo: Skbp },
		{ name: "MSD", logo: Msd },
		{ name: "Samsung Biologics", logo: Samsungbio },
		{ name: "AbbVie", logo: Abbivie },
	];

	// Second row logos
	const secondRowLogos = [
		{ name: "Novartis", logo: Novartis },
		{ name: "Daiichi Sankyo", logo: Daichi },
		{ name: "Daewoong", logo: Daewoong },
		{ name: "Boryung", logo: Boryung },
		{ name: "Yuhan", logo: Yuhan },
		{ name: "Celltrion", logo: Celltrion },
		{ name: "Jeil", logo: Jeil },
		{ name: "GC", logo: Gc },
	];

	return (
		<section className="overflow-hidden relative pt-16 pb-8 md:pt-20 lg:pt-24 md:pb-16 lg:pb-20">
			<div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
				<div className="text-center">
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
				</div>

				{/* Logo rows container */}
				<div className="space-y-8">
					{/* First row - moving left */}
					<div className="relative overflow-hidden">
						<motion.div
							className="flex gap-20 items-center"
							animate={!isFirstRowHovered ? {
								x: [0, -1200],
							} : {}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 40,
									ease: "linear",
								},
							}}
							onHoverStart={() => setIsFirstRowHovered(true)}
							onHoverEnd={() => setIsFirstRowHovered(false)}
						>
							{/* Duplicate the logos for seamless loop */}
							{[...firstRowLogos, ...firstRowLogos, ...firstRowLogos].map((logo, index) => (
								<div
									key={`first-${logo.name}-${index}`}
									className="flex-shrink-0 h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
								>
									<img
										src={logo.logo}
										alt={logo.name}
										className="h-full w-auto object-contain transition-all duration-300"
									/>
								</div>
							))}
						</motion.div>
					</div>

					{/* Second row - also moving left */}
					<div className="relative overflow-hidden">
						<motion.div
							className="flex gap-20 items-center"
							animate={!isSecondRowHovered ? {
								x: [0, -1200],
							} : {}}
							transition={{
								x: {
									repeat: Infinity,
									repeatType: "loop",
									duration: 40,
									ease: "linear",
								},
							}}
							onHoverStart={() => setIsSecondRowHovered(true)}
							onHoverEnd={() => setIsSecondRowHovered(false)}
						>
							{/* Duplicate the logos for seamless loop */}
							{[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
								<div
									key={`second-${logo.name}-${index}`}
									className="flex-shrink-0 h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
								>
									<img
										src={logo.logo}
										alt={logo.name}
										className="h-full w-auto object-contain transition-all duration-300"
									/>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
