import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import {
	Send,
	Mail,
	Phone,
	Globe,
	User,
	Building2,
	AlertTriangle,
} from "lucide-react";

export function RequestDemoForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		company: "",
		jobTitle: "",
		useCase: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [emailWarning, setEmailWarning] = useState("");

	// Public email domains to filter out
	const publicDomains = [
		"gmail.com",
		"yahoo.com",
		"hotmail.com",
		"outlook.com",
		"aol.com",
		"icloud.com",
		"me.com",
		"mac.com",
		"live.com",
		"msn.com",
		"ymail.com",
		"rocketmail.com",
		"mail.com",
		"gmx.com",
		"protonmail.com",
		"tutanota.com",
		"zoho.com",
		"fastmail.com",
		"163.com",
		"qq.com",
		"sina.com",
		"sohu.com",
		"naver.com",
		"daum.net",
		"hanmail.net",
	];

	const validateEmail = (email: string) => {
		// Basic email format validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!email) {
			setEmailWarning("");
			return;
		}

		if (!emailRegex.test(email)) {
			setEmailWarning("Please enter a valid email address");
			return;
		}

		// Check for public domains
		const domain = email.split("@")[1]?.toLowerCase();
		if (domain && publicDomains.includes(domain)) {
			setEmailWarning(
				"Please use your work email address. Personal email addresses are not accepted.",
			);
			return;
		}

		setEmailWarning("");
	};

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));

		// Validate email on change
		if (field === "email") {
			validateEmail(value);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Final email validation before submit
		validateEmail(formData.email);
		if (emailWarning) {
			return;
		}

		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Redirect to thank you page
		window.location.hash = "thank-you";
	};

	const isFormValid =
		formData.firstName &&
		formData.lastName &&
		formData.email &&
		formData.company &&
		formData.jobTitle &&
		formData.useCase &&
		!emailWarning;

	return (
		<div className="w-full">
			{/* Header */}
			<div className="pt-8 mb-12 md:pt-0">
				<h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl tracking-title leading-title">
					Contact Us
				</h2>
				<p className="text-xl leading-relaxed text-gray-600 font-condensed tracking-body">
					Ready to transform your workflow? Let's discuss your needs. Our team
					will respond within one business day.
				</p>

				{/* Contact info */}
				<div className="flex flex-wrap gap-6 mt-6 text-gray-600">
					<div className="flex gap-2 items-center">
						<Mail className="w-4 h-4 text-red-600" />
						<span className="text-sm font-condensed">contact@phnyx.ai</span>
					</div>
					{/* <div className="flex gap-2 items-center">
						<Phone className="w-4 h-4 text-red-600" />
						<span className="text-sm font-condensed">+1 (650) 555-0123</span>
					</div> */}
					<div className="flex gap-2 items-center">
						<Globe className="w-4 h-4 text-red-600" />
						<span className="text-sm font-condensed">Palo Alto & Seoul</span>
					</div>
				</div>
			</div>

			{/* Form - No box frame, clean spacing */}
			<form onSubmit={handleSubmit} className="space-y-8">
				{/* Name Fields */}
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-3">
						<Label
							htmlFor="firstName"
							className="flex gap-2 items-center text-lg font-medium text-gray-700 tracking-subtitle"
						>
							<User className="w-5 h-5 text-gray-400" />
							First Name *
						</Label>
						<Input
							id="firstName"
							type="text"
							value={formData.firstName}
							onChange={(e) => handleInputChange("firstName", e.target.value)}
							placeholder="Enter your first name"
							required
							className="px-4 h-14 text-xl bg-white rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 font-condensed tracking-body placeholder:text-lg placeholder:text-gray-500"
						/>
					</div>
					<div className="space-y-3">
						<Label
							htmlFor="lastName"
							className="flex gap-2 items-center text-lg font-medium text-gray-700 tracking-subtitle"
						>
							<User className="w-5 h-5 text-gray-400" />
							Last Name *
						</Label>
						<Input
							id="lastName"
							type="text"
							value={formData.lastName}
							onChange={(e) => handleInputChange("lastName", e.target.value)}
							placeholder="Enter your last name"
							required
							className="px-4 h-14 text-xl bg-white rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 font-condensed tracking-body placeholder:text-lg placeholder:text-gray-500"
						/>
					</div>
				</div>

				{/* Email */}
				<div className="space-y-3">
					<Label
						htmlFor="email"
						className="flex gap-2 items-center text-lg font-medium text-gray-700 tracking-subtitle"
					>
						<Mail className="w-5 h-5 text-gray-400" />
						Work Email *
					</Label>
					<Input
						id="email"
						type="email"
						value={formData.email}
						onChange={(e) => handleInputChange("email", e.target.value)}
						placeholder="you@yourcompany.com"
						required
						className={`h-14 px-4 text-xl rounded-lg focus:ring-red-500 font-condensed tracking-body bg-white placeholder:text-lg placeholder:text-gray-500 ${
							emailWarning
								? "border-red-500 focus:border-red-500"
								: "border-gray-300 focus:border-red-500"
						}`}
					/>
					{emailWarning && (
						<div className="flex gap-2 items-start p-3 mt-2 bg-red-50 rounded-lg border border-red-200">
							<AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
							<p className="text-base leading-relaxed text-red-700 font-condensed tracking-body">
								{emailWarning}
							</p>
						</div>
					)}
				</div>

				{/* Company */}
				<div className="space-y-3">
					<Label
						htmlFor="company"
						className="flex gap-2 items-center text-lg font-medium text-gray-700 tracking-subtitle"
					>
						<Building2 className="w-5 h-5 text-gray-400" />
						Company *
					</Label>
					<Input
						id="company"
						type="text"
						value={formData.company}
						onChange={(e) => handleInputChange("company", e.target.value)}
						placeholder="Your company name"
						required
						className="px-4 h-14 text-xl bg-white rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 font-condensed tracking-body placeholder:text-lg placeholder:text-gray-500"
					/>
				</div>

				{/* Job Title */}
				<div className="space-y-3">
					<Label
						htmlFor="jobTitle"
						className="text-lg font-medium text-gray-700 tracking-subtitle"
					>
						Job Title *
					</Label>
					<Input
						id="jobTitle"
						type="text"
						value={formData.jobTitle}
						onChange={(e) => handleInputChange("jobTitle", e.target.value)}
						placeholder="Your role or title"
						required
						className="px-4 h-14 text-xl bg-white rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 font-condensed tracking-body placeholder:text-lg placeholder:text-gray-500"
					/>
				</div>

				{/* Primary Use Case */}
				<div className="space-y-3">
					<Label className="text-lg font-medium text-gray-700 tracking-subtitle">
						What interests you most? *
					</Label>
					<Select
						onValueChange={(value: string) =>
							handleInputChange("useCase", value)
						}
					>
						<SelectTrigger className="!h-14 !min-h-14 px-4 text-xl rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 font-condensed tracking-body bg-white data-[placeholder]:text-lg data-[placeholder]:text-gray-500 placeholder:text-lg placeholder:text-gray-500 [&_svg]:!h-5 [&_svg]:!w-5">
							<SelectValue placeholder="Choose your area of interest" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							<SelectItem
								value="regulatory"
								className="py-3 text-lg font-condensed tracking-body"
							>
								Regulatory Documents
							</SelectItem>
							<SelectItem
								value="research"
								className="py-3 text-lg font-condensed tracking-body"
							>
								Literature Review
							</SelectItem>
							<SelectItem
								value="clinical"
								className="py-3 text-lg font-condensed tracking-body"
							>
								Clinical Development
							</SelectItem>
							<SelectItem
								value="medical"
								className="py-3 text-lg font-condensed tracking-body"
							>
								Medical Affairs
							</SelectItem>
							<SelectItem
								value="demo"
								className="py-3 text-lg font-condensed tracking-body"
							>
								Product Demo
							</SelectItem>
							<SelectItem
								value="other"
								className="py-3 text-lg font-condensed tracking-body"
							>
								Other
							</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* Message Field - Increased height */}
				<div className="space-y-3">
					<Label
						htmlFor="message"
						className="text-lg font-medium text-gray-700 tracking-subtitle"
					>
						Your Message{" "}
						<span className="font-normal text-gray-400">(Optional)</span>
					</Label>
					<Textarea
						id="message"
						value={formData.message}
						onChange={(e) => handleInputChange("message", e.target.value)}
						placeholder="Tell us about your specific needs or challenges..."
						rows={6}
						className="p-4 text-xl bg-white rounded-lg border-gray-300 resize-none focus:border-red-500 focus:ring-red-500 font-condensed tracking-body placeholder:text-lg placeholder:text-gray-500"
					/>
				</div>

				{/* Submit Button */}
				<div className="pt-4">
					<Button
						type="submit"
						disabled={!isFormValid || isSubmitting}
						className={`w-full py-6 text-xl font-bold tracking-subtitle transition-all duration-300 rounded-lg ${
							isFormValid && !isSubmitting
								? "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
								: "bg-gray-300 text-gray-500 cursor-not-allowed"
						}`}
					>
						{isSubmitting ? (
							<>
								<div className="mr-3 w-6 h-6 rounded-full border-2 animate-spin border-white/30 border-t-white"></div>
								Sending Message...
							</>
						) : (
							<>
								Send Message
								<Send className="ml-3 w-6 h-6" />
							</>
						)}
					</Button>
				</div>

				{/* Privacy Notice */}
				<p className="pt-2 text-sm text-center text-gray-500 font-condensed tracking-body">
					We'll get back to you within 24 hours. Your information is secure and
					never shared.
				</p>
			</form>

			{/* Removed all social proof sections */}
		</div>
	);
}
