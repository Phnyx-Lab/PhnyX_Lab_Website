import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Database, AlertTriangle, Zap, FileText } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function ProblemSolutionSection() {
	const ref = useRef(null);
	const cheironInterfaceRef = useRef(null); // Combined ref for Interface + Solution text
	const boxRefs = [useRef(null), useRef(null), useRef(null)];

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Solution text scroll-based scaling animation
	const solutionTextRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: solutionTextProgress } = useScroll({
		target: solutionTextRef,
		offset: ["start 0.9", "start 0.3"], // Start scaling when entering bottom, full size when reaching top third
	});

	// Cheiron Interface - starts scaling earlier but finishes at screen center or slightly below
	const { scrollYProgress: cheironProgress } = useScroll({
		target: cheironInterfaceRef,
		offset: ["start 0.8", "start 0.4"], // Finishes at screen center (0.5) or slightly below (0.4)
	});

	// Individual box scroll tracking - Consistent range for all boxes
	const boxScrolls = boxRefs.map((boxRef) =>
		useScroll({
			target: boxRef,
			offset: ["start 0.8", "start 0.2"],
		}),
	);

	const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100]);
	const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

	// Solution text scaling animation - smooth scale from small to full size
	const solutionTextScale = useTransform(
		solutionTextProgress,
		[0, 1],
		[0.7, 1.0],
	);
	const solutionTextOpacity = useTransform(
		solutionTextProgress,
		[0, 0.2, 1],
		[0.6, 0.8, 1.0],
	);

	// Cheiron Interface scaling animation - SAME timing and ratio as text
	const cheironScale = useTransform(cheironProgress, [0, 1], [0.7, 1.0]);
	const cheironOpacity = useTransform(
		cheironProgress,
		[0, 0.2, 1],
		[0.6, 0.8, 1.0],
	);

	// Fixed margin between boxes and cheiron section
	// const cheironMarginBottom = useTransform(cheironProgress, [0, 1], [20, 0]);

	// Box shrinking transforms - Desktop only, static on mobile
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const boxTransforms = boxScrolls.map((scroll, index) => ({
		scale: useTransform(
			scroll.scrollYProgress,
			[0, 1],
			isMobile ? [1, 1] : [1, 0.6],
		),
		x: useTransform(
			scroll.scrollYProgress,
			[0, 1],
			isMobile ? [0, 0] : [0, index === 0 ? 120 : index === 2 ? -120 : 0],
		),
		y: useTransform(
			scroll.scrollYProgress,
			[0, 1],
			isMobile ? [0, 0] : [0, -80],
		),
		opacity: useTransform(
			scroll.scrollYProgress,
			[0, 1],
			isMobile ? [1, 1] : [1, 0.7],
		),
	}));

	// Text Rotator for the main question - Include "?" in rotation
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const rotatingTexts = [
		{ duration: "20%", activity: "information search?" },
		{ duration: "25%", activity: "document review?" },
		{ duration: "30%", activity: "data validation?" },
		{ duration: "15%", activity: "regulatory writing?" },
	];

	// Mobile rotating texts - simpler version
	const mobileRotatingTexts = [
		"manual research?",
		"document review?",
		"data validation?",
		"regulatory writing?",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	const problems = [
		{
			icon: Database,
			title: "Fragmented Data",
			description:
				"Internal lab data, external publications, new regulatory filings... Are you juggling dozens of tabs just to find what you need?",
			color: "from-red-500 to-orange-500",
		},
		{
			icon: AlertTriangle,
			title: "Unreliable AI",
			description:
				"Are you double-checking every output from generic AI tools because of hallucinations?",
			color: "from-orange-500 to-yellow-500",
		},
		{
			icon: Clock,
			title: "Endless Paperwork",
			description:
				"Are you overwhelmed by time-consuming regulatory documentation and compliance processes that pull you away from drug discovery?",
			color: "from-yellow-500 to-red-500",
		},
	];

	return (
		<section
			ref={ref}
			className="overflow-hidden relative pt-16 pb-8 text-gray-900 md:pt-24 lg:pt-32 md:pb-20 lg:pb-32"
		>
			{/* Enhanced Background with Parallax */}
			<motion.div className="absolute inset-0" style={{ y: backgroundY }}>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(206,14,45,0.1)_0%,transparent_70%)]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.1)_0%,transparent_70%)]"></div>
				<div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(206,14,45,0.05)_0deg,transparent_60deg,rgba(239,68,68,0.05)_120deg,transparent_180deg)]"></div>
			</motion.div>

			{/* Floating Elements */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				style={{ y: floatingY }}
			>
				<motion.div
					className="absolute left-10 top-20 w-32 h-32 rounded-full border border-red-500/20"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute right-16 top-60 w-24 h-24 rounded-full border border-red-300/20"
					animate={{
						scale: [1, 0.8, 1],
						rotate: 360,
					}}
					transition={{
						scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
						rotate: { duration: 15, repeat: Infinity, ease: "linear" },
					}}
				/>
				<motion.div
					className="absolute bottom-40 left-1/3 w-20 h-20 rounded-full border border-green-500/20"
					animate={{
						y: [0, -20, 0],
						opacity: [0.2, 0.5, 0.2],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
				/>
			</motion.div>

			<div className="relative z-10 w-full">
				{/* Problem Statement with Tighter Line Spacing */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="px-6 mx-auto mb-8 max-w-7xl text-center md:mb-16 lg:mb-24 lg:px-8"
				>
					<motion.div
						className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl md:mb-8 tracking-title leading-title"
						style={{ lineHeight: "1.1" }}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.2 }}
						viewport={{ once: true }}
					>
						{/* Desktop: Complex animation, Mobile: Simplified rotating animation */}
						<div className="flex flex-col justify-center items-center space-y-2">
							{/* Mobile - Simplified rotating version */}
							<div className="block text-center md:hidden">
								<div className="text-gray-900">Spending too much time on</div>
								<div className="font-bold text-red-600">
									<motion.span
										key={`mobile-activity-${currentTextIndex}`}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 1.2 }}
										transition={{ duration: 0.4, ease: "easeOut" }}
									>
										{mobileRotatingTexts[currentTextIndex]}
									</motion.span>
								</div>
							</div>

							{/* Desktop - Complex animated version */}
							<div className="hidden md:block">
								{/* First Line - Maximum Spacing to Prevent Overlap */}
								<div className="flex justify-center items-center">
									<span className="text-gray-900">Spending</span>

									{/* Duration rotator - MUCH WIDER container with maximum margin */}
									<div className="inline-flex justify-center items-center mx-12 w-32">
										<motion.span
											key={`duration-${currentTextIndex}`}
											className="font-bold text-red-600"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 1.2 }}
											transition={{ duration: 0.4, ease: "easeOut" }}
										>
											{rotatingTexts[currentTextIndex].duration}
										</motion.span>
									</div>

									<span className="text-gray-900">of your day on</span>
								</div>

								{/* Second Line - Much Tighter Spacing */}
								<div className="inline-flex justify-center items-center">
									<motion.span
										key={`activity-${currentTextIndex}`}
										className="font-bold text-red-600 whitespace-nowrap"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 1.2 }}
										transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
									>
										{rotatingTexts[currentTextIndex].activity}
									</motion.span>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Problems Grid with Enhanced Scroll-Based Animation */}
				<motion.div className="relative px-6 mx-auto mb-4 max-w-7xl md:mb-7 lg:px-8">
					<motion.div
						className="grid gap-6 md:grid-cols-3 md:gap-8"
						initial={{ opacity: 1 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: false, amount: 0.3 }}
					>
						{problems.map((problem, index) => (
							<motion.div
								key={problem.title}
								ref={boxRefs[index]}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 0.8,
									delay: index * 0.2,
									type: "spring",
									stiffness: 100,
								}}
								className="relative group"
								viewport={{ once: true, amount: 0.3 }}
							>
								<motion.div
									className="overflow-hidden relative p-4 h-full bg-white rounded border border-gray-200 shadow-sm transition-shadow duration-300 md:p-6 lg:p-8"
									style={{
										scale: boxTransforms[index].scale,
										x: boxTransforms[index].x,
										y: boxTransforms[index].y,
										opacity: boxTransforms[index].opacity,
									}}
								>
									{/* Gradient overlay - keep subtle */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 transition-opacity duration-500 rounded`}
									></div>

									{/* Icon without hover effects */}
									<div>
										<problem.icon className="relative z-10 mb-4 w-12 h-12 text-red-400 md:w-16 md:h-16 md:mb-6" />
									</div>

									<h3 className="relative z-10 mb-4 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl md:mb-6 tracking-subtitle leading-title">
										{problem.title}
									</h3>
									<p className="relative z-10 text-base text-gray-600 leading-relaxed-plus tracking-body md:text-lg">
										{problem.description}
									</p>
								</motion.div>
							</motion.div>
						))}
					</motion.div>

					{/* Funnel Background Effect */}
					<motion.div
						className="overflow-hidden absolute inset-0 pointer-events-none"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 2.5 }}
						viewport={{ once: false, amount: 0.8 }}
					>
						<motion.div
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							initial={{ scale: 0, rotate: 0 }}
							whileInView={{ scale: 1, rotate: 180 }}
							transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
							viewport={{ once: false, amount: 0.8 }}
						>
							<div className="w-96 h-96 rounded-full border-8 border-red-100 opacity-20" />
							<div className="absolute inset-4 rounded-full border-4 border-red-200 opacity-30" />
							<div className="absolute inset-8 rounded-full border-2 border-red-300 opacity-40" />
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Above Cheiron Interface - Solution Statement with Scale Animation */}
				<motion.div
					ref={solutionTextRef}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true }}
					className="relative z-40 px-6 mx-auto mt-8 mb-4 max-w-6xl text-center lg:px-8 md:mt-12 lg:mt-16 md:mb-8 lg:mb-10"
					style={{
						scale: solutionTextScale,
						opacity: solutionTextOpacity,
					}}
				>
					<h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl tracking-title leading-title">
						{/* See Cheiron’s pharmaceutical answer engine in action: */}
						See Cheiron’s{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400">
							pharmaceutical answer engine
						</span>{" "}
						in action:
					</h2>
				</motion.div>

				{/* Cheiron Interface - Maximum Width Extension */}
				<motion.div
					ref={cheironInterfaceRef}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="relative z-40 px-3 mx-auto w-full max-w-none text-center md:px-4 lg:px-6 xl:px-8"
					style={{
						scale: cheironScale,
						opacity: cheironOpacity,
					}}
				>
					{/* Cheiron UI Preview - Consistent aspect ratio across all devices */}

					<motion.div
						className="w-full relative overflow-hidden mb-10 md:mb-20  rounded-3xl shadow-[0_0_50px_rgba(206,14,45,0.3)]"
						initial={{ opacity: 0, scale: 0.6 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
						viewport={{ once: false, amount: 0.2 }}
						style={{
							aspectRatio: "16/9",
							width: "80vw",
							maxWidth: "1200px",
							margin: "0 auto",
							transform: "scale(1.02)",
							marginBottom: "100px",
						}}
					>
						<iframe
							className="w-full h-full border-none"
							src="https://www.youtube.com/embed/y34ozFW7FI8?si=jEo4cMvSNVMTa-Ku"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
						{/* <motion.div
							className="flex relative justify-center items-center w-full h-full"
							initial={{ opacity: 0.9 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: false, amount: 0.3 }}
						>
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:80px_80px] opacity-50"></div>
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(206,14,45,0.1)_0%,transparent_70%)]"></div>

							<motion.div
								className="flex z-10 flex-col justify-center items-center px-8 py-8 w-full h-full text-center md:px-20 md:py-16"
								initial={{ scale: 0.9 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 1.0 }}
								viewport={{ once: false, amount: 0.1 }}
							>
								<motion.div
									className="text-4xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl xl:text-9xl"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.0 }}
									viewport={{ once: false, amount: 0.3 }}
									style={{
										textShadow: "0 0 30px rgba(206,14,45,0.5)",
										lineHeight: "0.9",
									}}
								>
									CHEIRON
								</motion.div>
							</motion.div>

							<motion.div
								className="absolute top-20 left-20 w-48 h-48 rounded-full border-4 md:w-56 md:h-56 border-white/30"
								animate={{
									rotate: 360,
									scale: [1, 1.15, 1],
								}}
								transition={{
									rotate: { duration: 25, repeat: Infinity, ease: "linear" },
									scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
								}}
								style={{
									boxShadow: "0 0 40px rgba(255,255,255,0.1)",
								}}
							/>
							<motion.div
								className="absolute right-20 bottom-20 w-40 h-40 rounded-full border-4 md:w-48 md:h-48 border-red-400/40"
								animate={{
									rotate: -360,
									y: [0, -15, 0],
								}}
								transition={{
									rotate: { duration: 18, repeat: Infinity, ease: "linear" },
									y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
								}}
								style={{
									boxShadow: "0 0 30px rgba(239,68,68,0.2)",
								}}
							/>
							<motion.div
								className="absolute right-24 top-1/2 w-36 h-36 rounded-full md:w-44 md:h-44 border-3 border-green-400/30"
								animate={{
									x: [0, -12, 0],
									opacity: [0.4, 0.7, 0.4],
								}}
								transition={{
									duration: 7,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1.5,
								}}
								style={{
									boxShadow: "0 0 25px rgba(34,197,94,0.15)",
								}}
							/>

							<motion.div
								className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border-2 md:w-24 md:h-24 border-red-500/50"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.3, 0.6, 0.3],
								}}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 3,
								}}
							/>
							<motion.div
								className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full border-2 md:w-20 md:h-20 border-white/40"
								animate={{
									rotate: 360,
									scale: [1, 0.8, 1],
								}}
								transition={{
									rotate: { duration: 12, repeat: Infinity, ease: "linear" },
									scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
								}}
							/>
						</motion.div> */}
					</motion.div>

					<motion.p
						className="relative z-10 px-6 mx-auto mb-4 max-w-7xl text-xl text-gray-600 md:text-2xl lg:text-3xl md:mb-8 lg:mb-12 tracking-body leading-relaxed-plus lg:px-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						From accurate information retrieval to automated workflow
						generation.
					</motion.p>

					{/* Cheiron Interface Features - Part of unified container */}
					<div className="grid relative z-10 grid-cols-1 gap-6 px-6 mx-auto max-w-7xl md:grid-cols-3 md:gap-8 lg:px-8">
						{[
							{
								title: "Literature Search",
								description: "AI-powered research engine",
								icon: Database,
								color: "bg-red-100 group-hover:bg-red-200",
							},
							{
								title: "Document Generation",
								description: "Automated regulatory writing",
								icon: FileText,
								color: "bg-red-100 group-hover:bg-red-200",
							},
							{
								title: "Data Analysis",
								description: "Intelligent insights",
								icon: Zap,
								color: "bg-red-100 group-hover:bg-red-200",
							},
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								className="flex flex-col items-center text-center group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mb-6 transition-colors duration-300`}
									whileHover={{ rotate: 15 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<feature.icon className="w-10 h-10 text-red-600" />
								</motion.div>
								<div>
									<div className="mb-3 text-2xl font-bold text-gray-900 tracking-subtitle">
										{feature.title}
									</div>
									<div className="text-lg text-gray-600 tracking-body">
										{feature.description}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
