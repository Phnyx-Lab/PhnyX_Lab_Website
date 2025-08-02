/** biome-ignore-all lint/a11y/useValidAnchor: Social media links use external URLs */
import { Linkedin, Mail } from "lucide-react";
import CompanyLogo from "../assets/svg/CompanyLogo";

export function Footer() {
	const footerLinks = [
		{
			title: "Products",
			links: [
				{ name: "Cheiron Search", href: "#products" },
				{ name: "Cheiron Write", href: "#products" },
			],
		},
		{
			title: "Company",
			links: [
				{ name: "About Us", href: "#company" },
				{ name: "Newsroom", href: "#newsroom" },
			],
		},
		{
			title: "Contact",
			links: [
				{
					name: "Palo Alto, CA",
					href: "mailto:contact@phnyx.ai",
					// isLocation: true,
				},
				{
					name: "Seoul, Korea",
					href: "mailto:contact@phnyx.ai",
					// isLocation: true,
				},
				{ name: "Request a Demo", href: "#request-demo" },
			],
		},
	];

	// X (Twitter) SVG Icon Component
	const XIcon = ({ className }: { className?: string }) => (
		<svg
			className={className}
			fill="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);

	const socialLinks = [
		{
			Icon: Linkedin,
			href: "https://www.linkedin.com/company/phnyx-lab/",
			name: "LinkedIn",
		},
		{ Icon: XIcon, href: "https://x.com/phnyx_lab", name: "X" },
		{ Icon: Mail, href: "mailto:contact@phnyx.ai", name: "Email" },
	];

	return (
		<footer className="overflow-hidden relative text-white bg-black section-spacing">
			{/* Short Top Border */}
			<div className="flex justify-center mb-12">
				<div className="w-4/5 h-px bg-white/30"></div>
			</div>

			{/* Background Elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
			</div>

			<div className="relative z-10 px-6 mx-auto mt-20 max-w-7xl lg:px-8">
				<div className="grid gap-12 mb-16 md:grid-cols-4">
					{/* Brand Section */}
					<div>
						<div className="mb-6 text-2xl font-bold tracking-subtitle">
							<CompanyLogo />
						</div>
						<p className="mb-8 text-gray-400 leading-relaxed-plus tracking-body">
							Redefining biopharma workflow through AI-powered solutions.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map(({ Icon, href, name }) => (
								<a
									key={name}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 text-gray-400 rounded-full transition-colors hover:text-white hover:bg-white/10"
								>
									<Icon className="w-6 h-6" />
								</a>
							))}
						</div>
					</div>

					{/* Link Sections */}
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h3 className="mb-6 text-lg font-bold tracking-subtitle">
								{section.title}
							</h3>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className={`text-gray-400 transition-colors tracking-body hover:text-white`}
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Section */}
				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col justify-between items-center md:flex-row">
						<p className="text-sm text-gray-400 tracking-body">
							© 2025 PhnyX Lab. All rights reserved.
						</p>
						{/* <div className="flex mt-4 space-x-6 md:mt-0">
							{["Privacy Policy", "Terms of Service"].map((item) => (
								<a
									key={item}
									href="#"
									className="text-sm text-gray-400 transition-colors hover:text-white tracking-body"
								>
									{item}
								</a>
							))}
						</div> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
