import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import CompanyLogo from "../assets/svg/CompanyLogo";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	// Check if we're on the home page (which has dark hero background)
	const isHomePage =
		window.location.hash === "" || window.location.hash === "#";

	const navigationItems = [
		{ name: "Home", href: "#" },
		{ name: "Products", href: "#products" },
		{ name: "Company", href: "#company" },
		{ name: "Newsroom", href: "#newsroom" },
	];

	const handleNavigation = (href: string) => {
		window.location.hash = href.substring(1); // Remove the # prefix
		setIsMobileMenuOpen(false); // Close mobile menu after navigation
		// Scroll will be handled by the useEffect in App.tsx
	};

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
				isScrolled || !isHomePage
					? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
					: "bg-transparent"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
		>
			<div className="px-6 mx-auto max-w-7xl lg:px-8">
				<div className="flex justify-between items-center h-16 md:h-16">
					<motion.div
						className="flex items-center cursor-pointer"
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 400 }}
						onClick={() => handleNavigation("#")}
					>
						{/* <CompanyLogo /> */}
						<div className="text-xl font-semibold text-white tracking-subtitle">
							PhnyX Lab
						</div>
					</motion.div>

					<div className="hidden md:block">
						<div className="flex items-baseline ml-10 space-x-8">
							{navigationItems.map((item, index) => (
								<motion.button
									key={item.name}
									onClick={() => handleNavigation(item.href)}
									className="font-medium bg-transparent border-none transition-colors cursor-pointer text-white/80 hover:text-white tracking-body"
									whileHover={{ scale: 1.05 }}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									{item.name}
								</motion.button>
							))}
						</div>
					</div>

					{/* Desktop CTA Button */}
					<motion.div
						className="hidden md:block"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						<Button
							className="px-8 py-3 font-semibold text-black bg-white rounded-full transition-colors hover:bg-white/90 tracking-subtitle"
							onClick={() => handleNavigation("#request-demo")}
						>
							Request a Demo
						</Button>
					</motion.div>

					{/* Mobile: Request Demo + Hamburger Menu */}
					<div className="flex gap-3 items-center md:hidden">
						{/* Mobile Request Demo Button */}
						<motion.div
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							<Button
								size="sm"
								className="bg-white text-black hover:bg-white/90 transition-colors font-semibold tracking-subtitle px-5 py-2.5 text-sm rounded-full"
								onClick={() => handleNavigation("#request-demo")}
							>
								Demo
							</Button>
						</motion.div>

						{/* Mobile Hamburger Menu */}
						{/** biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 text-white rounded-lg transition-colors hover:bg-white/10"
							aria-label="Toggle mobile menu"
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.2 }}
					className="border-t backdrop-blur-md md:hidden bg-black/95 border-white/10"
				>
					<div className="px-6 py-4 mx-auto space-y-3 max-w-7xl">
						{navigationItems.map((item) => (
							// biome-ignore lint/a11y/useButtonType: <explanation>
							<button
								key={item.name}
								onClick={() => handleNavigation(item.href)}
								className="block px-4 py-3 w-full text-lg font-medium text-left bg-transparent rounded-lg border-none transition-colors cursor-pointer text-white/80 hover:text-white tracking-body hover:bg-white/10"
							>
								{item.name}
							</button>
						))}
					</div>
				</motion.div>
			)}
		</motion.nav>
	);
}
