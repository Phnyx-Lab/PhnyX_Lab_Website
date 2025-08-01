import { Button } from "./ui/button";
import {
	motion,
	useScroll,
	useTransform,
	useInView,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Counter component for animating numbers
function AnimatedCounter({
	value,
	suffix = "",
	delay = 0,
}: {
	value: number;
	suffix?: string;
	delay?: number;
}) {
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		const unsubscribe = springValue.onChange(setDisplayValue);
		return unsubscribe;
	}, [springValue]);

	useEffect(() => {
		const timer = setTimeout(() => {
			motionValue.set(value);
		}, delay);

		return () => clearTimeout(timer);
	}, [motionValue, value, delay]);

	return (
		<span>
			{Math.round(displayValue * 10) / 10}
			{suffix}
		</span>
	);
}

export function HeroSection() {
	// const [scrollY, setScrollY] = useState(0);
	const { scrollYProgress } = useScroll();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	// Parallax transforms
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
	const floatingElementsY = useTransform(
		scrollYProgress,
		[0, 1],
		["0%", "-25%"],
	);

	// useEffect(() => {
	//   const handleScroll = () => setScrollY(window.scrollY);
	//   window.addEventListener("scroll", handleScroll);
	//   return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	// Animate words individually
	const titleWords = ["Redefining", "Biopharma", "Workflow"];
	const subtitleWords =
		"End the wasted hours on repetitive documentation and fragmented data searches. Cheiron is the most accurate and reliable AI solution, purpose-built for biopharma experts.".split(
			" ",
		);

	return (
		<section
			ref={ref}
			className="flex overflow-hidden relative items-center pt-16 min-h-screen text-white bg-black"
		>
			{/* Enhanced Parallax Background */}
			<motion.div className="absolute inset-0" style={{ y: backgroundY }}>
				{/* Animated Grid */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:60px_60px] opacity-30"></div>

				{/* Dynamic Floating Elements - Updated with red palette */}
				<motion.div
					className="absolute inset-0"
					style={{ y: floatingElementsY }}
				>
					{/* Large floating circles */}
					<motion.div
						className="absolute top-20 left-20 w-40 h-40 rounded-full border border-white/10"
						animate={{
							rotate: 360,
							scale: [1, 1.1, 1],
						}}
						transition={{
							rotate: { duration: 20, repeat: Infinity, ease: "linear" },
							scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
						}}
					/>
					<motion.div
						className="absolute right-32 top-40 w-32 h-32 rounded-full border border-red-400/20"
						animate={{
							rotate: -360,
							scale: [1, 0.9, 1],
						}}
						transition={{
							rotate: { duration: 15, repeat: Infinity, ease: "linear" },
							scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
						}}
					/>
					<motion.div
						className="absolute bottom-32 left-1/4 w-48 h-48 rounded-full border border-red-300/15"
						animate={{
							rotate: 360,
							x: [0, 20, 0],
						}}
						transition={{
							rotate: { duration: 25, repeat: Infinity, ease: "linear" },
							x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
						}}
					/>
					<motion.div
						className="absolute right-20 bottom-20 w-36 h-36 rounded-full border border-red-500/20"
						animate={{
							rotate: -360,
							y: [0, -15, 0],
						}}
						transition={{
							rotate: { duration: 18, repeat: Infinity, ease: "linear" },
							y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
						}}
					/>
				</motion.div>

				{/* Flowing Lines - Updated with red gradients */}
				<svg
					className="absolute inset-0 w-full h-full opacity-20"
					viewBox="0 0 1000 1000"
				>
					<motion.path
						d="M0,500 Q250,300 500,500 T1000,500"
						stroke="url(#gradient1)"
						strokeWidth="2"
						fill="none"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.path
						d="M0,300 Q300,100 600,300 T1000,300"
						stroke="url(#gradient2)"
						strokeWidth="1.5"
						fill="none"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{
							duration: 4,
							delay: 1,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<defs>
						<linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="rgba(206, 14, 45, 0)" />
							<stop offset="50%" stopColor="rgba(206, 14, 45, 0.8)" />
							<stop offset="100%" stopColor="rgba(206, 14, 45, 0)" />
						</linearGradient>
						<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
							<stop offset="50%" stopColor="rgba(239, 68, 68, 0.6)" />
							<stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
						</linearGradient>
					</defs>
				</svg>
			</motion.div>

			{/* Content with enhanced spacing */}
			<motion.div
				className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8"
				style={{ y: textY }}
			>
				<div className="text-center">
					{/* Main Title with word-by-word animation */}
					<div className="mb-8 md:mb-12">
						{titleWords.map((word, index) => (
							<motion.span
								key={word}
								className="inline-block mr-4 text-5xl font-bold md:text-7xl lg:text-8xl xl:text-9xl md:mr-6 lg:mr-8 xl:mr-12 tracking-hero leading-hero"
								initial={{ opacity: 0, y: 50, rotateX: -90 }}
								animate={{
									opacity: isInView ? 1 : 0,
									y: isInView ? 0 : 50,
									rotateX: isInView ? 0 : -90,
								}}
								transition={{
									duration: 0.8,
									delay: index * 0.3,
									ease: [0.25, 0.46, 0.45, 0.94],
								}}
							>
								{index === titleWords.length - 1 ? (
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-300">
										{word}
									</span>
								) : (
									word
								)}
							</motion.span>
						))}
					</div>

					{/* Subtitle with word-by-word animation */}
					<motion.div className="mx-auto mb-12 max-w-5xl md:mb-16 leading-relaxed-plus tracking-body">
						<div className="text-lg text-gray-300 md:text-xl lg:text-2xl xl:text-3xl">
							{subtitleWords.map((word, index) => (
								<motion.span
									key={index}
									className="inline-block mr-1.5 md:mr-2"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
									transition={{
										duration: 0.5,
										delay: 1.8 + index * 0.04,
										ease: "easeOut",
									}}
								>
									{word}
								</motion.span>
							))}
						</div>
					</motion.div>

					{/* CTA Buttons with enhanced animation and improved spacing */}
					<motion.div
						className="flex flex-col gap-4 justify-center items-center mb-16 sm:flex-row md:gap-6 lg:gap-8 md:mb-20"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
						transition={{ duration: 0.8, delay: 3.2 }}
					>
						<motion.div
							whileHover={{
								scale: 1.05,
								boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<Button
								size="lg"
								className="px-10 py-3 h-auto text-lg font-medium text-white rounded-full border-2 shadow-2xl bg-brand-gradient hover:opacity-90 md:text-xl md:px-12 md:py-4 tracking-body border-white/20"
								onClick={() => (window.location.hash = "request-demo")}
							>
								Request a Demo
							</Button>
						</motion.div>

						<motion.div
							whileHover={{
								scale: 1.05,
								boxShadow: "0 20px 40px rgba(255, 255, 255, 0.05)",
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<Button
								variant="outline"
								size="lg"
								className="px-10 py-3 h-auto text-lg font-medium text-white rounded-full backdrop-blur-sm border-white/60 bg-white/5 hover:bg-white/15 hover:border-white md:text-xl md:px-12 md:py-4 tracking-body"
							>
								{/* <motion.span
									animate={{ opacity: [1, 0.7, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
								>
									▶
								</motion.span> */}
								<a
									href="https://cheiron.phnyx.ai"
									target="_blank"
									rel="noopener noreferrer"
									className="ml-3"
								>
									Try Cheiron
								</a>
							</Button>
						</motion.div>
					</motion.div>

					{/* Data Points with staggered animation - Updated with red gradient */}
					<motion.div
						className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:gap-8"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
						transition={{ duration: 0.8, delay: 3.6 }}
					>
						{/* {[
							{ number: "92.2", suffix: "%", label: "Fact Accuracy" },
							{ number: "81.5", suffix: "%", label: "Source Credibility" },
							{ number: "98.7", suffix: "%", label: "Traceability" },
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								className="group"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{
									opacity: isInView ? 1 : 0,
									scale: isInView ? 1 : 0.8,
								}}
								transition={{ duration: 0.6, delay: 3.8 + index * 0.2 }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300 md:text-4xl lg:text-5xl">
									{isInView && (
										<AnimatedCounter
											value={parseFloat(stat.number)}
											suffix={stat.suffix}
											delay={4200 + index * 300}
										/>
									)}
								</div>
								<div className="text-base tracking-wide text-gray-400 md:text-lg">
									{stat.label}
								</div>
							</motion.div>
						))} */}
					</motion.div>
				</div>
			</motion.div>

			{/* Ambient Light Effect - Updated with red tint */}
			<div className="absolute inset-0 via-transparent to-transparent opacity-50 bg-gradient-radial from-red-900/20"></div>
		</section>
	);
}
