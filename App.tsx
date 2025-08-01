import { useState, useEffect } from "react";
import { Navigation } from "./src/components/Navigation";
import { HeroSection } from "./src/components/HeroSection";
import { SocialProofSection } from "./src/components/SocialProofSection";
import { ProblemSolutionSection } from "./src/components/ProblemSolutionSection";
import { PerformanceSection } from "./src/components/PerformanceSection";
import { TestimonialsSection } from "./src/components/TestimonialsSection";
import { FinalCTASection } from "./src/components/FinalCTASection";
import { Footer } from "./src/components/Footer";
import { ProductsPage } from "./src/components/ProductsPage";
import { CompanyPage } from "./src/components/CompanyPage";
import { NewsroomPage } from "./src/components/NewsroomPage";
import { RequestDemoPage } from "./src/components/RequestDemoPage";
import { ThankYouPage } from "./src/components/ThankYouPage";
import { SEOHead } from "./src/components/SEOHead";
import { Analytics, trackPageView } from "./src/components/Analytics";
import {
	getOrganizationStructuredData,
	getCheironStructuredData,
} from "./src/components/StructuredData";
import {
	initializePerformanceMonitoring,
	PerformanceMonitor,
} from "./utils/performance";

export default function App() {
	// 간단한 페이지 라우팅을 위한 상태
	const [currentPage, setCurrentPage] = useState("home");

	// URL 해시를 확인하여 페이지 결정
	const checkRoute = () => {
		const hash = window.location.hash.substring(1);
		const newPage = (() => {
			if (hash === "products") return "products";
			if (hash === "company") return "company";
			if (hash === "newsroom") return "newsroom";
			if (hash === "request-demo") return "request-demo";
			if (hash === "thank-you") return "thank-you";
			return "home";
		})();

		setCurrentPage(newPage);
	};

	// 컴포넌트 마운트 시 라우트 확인 및 성능 모니터링 초기화
	useEffect(() => {
		checkRoute();
		initializePerformanceMonitoring();

		window.addEventListener("hashchange", checkRoute);
		return () => window.removeEventListener("hashchange", checkRoute);
	}, []);

	// 페이지 변경 시 Google Analytics 페이지뷰 추적 및 스크롤 위치 리셋
	useEffect(() => {
		const monitor = PerformanceMonitor.getInstance();
		monitor.startMeasure(`page-${currentPage}`);

		// 스크롤을 맨 위로 이동 (즉시 이동으로 더 빠른 페이지 전환 경험 제공)
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});

		trackPageView(document.title, window.location.href);

		// End measurement after a short delay to capture initial render
		setTimeout(() => {
			monitor.endMeasure(`page-${currentPage}`);
		}, 100);
	}, [currentPage]);

	// 페이지별 SEO 메타데이터 가져오기
	const getPageSEO = () => {
		switch (currentPage) {
			case "products":
				return {
					title: "Cheiron AI Platform - Products | PhnyX Lab",
					description:
						"Advanced biopharma AI platform featuring Cheiron Finder and Write - revolutionary pharmaceutical AI tools for intelligent literature review, regulatory document automation, and clinical research. Enterprise-grade AI for drug discovery.",
					keywords:
						"Cheiron AI, biopharma AI platform, pharmaceutical AI tools, drug discovery software, clinical AI platform, pharma automation tools, AI medical writing, regulatory AI automation, pharmaceutical research AI, biotech AI solutions, clinical document AI, pharma workflow AI, drug development platform, biopharma technology, pharmaceutical innovation tools",
					canonicalUrl: "https://phnyx.ai/products",
					structuredData: getCheironStructuredData(),
				};
			case "company":
				return {
					title: "About PhnyX Lab - Company Story & Team",
					description:
						"Leading biopharma AI company revolutionizing pharmaceutical research. PhnyX Lab's journey from SK Networks AI initiative to independent biotech AI pioneer, transforming drug discovery with cutting-edge artificial intelligence solutions.",
					keywords:
						"PhnyX Lab, biopharma AI company, pharmaceutical AI startup, biotech AI solutions, drug discovery AI company, pharma technology company, AI medical research, pharmaceutical innovation company, biotech startup, clinical AI company, pharma AI platform, medical AI solutions, biopharma technology, pharmaceutical artificial intelligence",
					canonicalUrl: "https://phnyx.ai/company",
					structuredData: getOrganizationStructuredData(),
				};
			case "newsroom":
				return {
					title: "News & Insights - PhnyX Lab Newsroom",
					description:
						"Latest biopharma AI news, pharmaceutical technology insights, and drug discovery innovations from PhnyX Lab. Stay updated on cutting-edge AI developments transforming pharmaceutical research and clinical trials.",
					keywords:
						"biopharma AI news, pharmaceutical AI insights, drug discovery news, biotech AI updates, pharma technology news, clinical AI developments, pharmaceutical innovation news, AI medical research updates, biopharma technology insights, drug development AI news, pharmaceutical artificial intelligence, biotech innovation updates",
					canonicalUrl: "https://phnyx.ai/newsroom",
				};

			case "request-demo":
				return {
					title: "Contact Us - PhnyX Lab",
					description:
						"Get in touch with PhnyX Lab to discover how Cheiron AI can revolutionize your biopharma workflows. Schedule a personalized demo of our pharmaceutical AI platform and transform your drug discovery process.",
					keywords:
						"biopharma AI demo, pharmaceutical AI consultation, Cheiron AI demo, drug discovery AI demo, pharma automation demo, biotech AI consultation, clinical AI platform demo, pharmaceutical workflow demo, AI medical writing demo, regulatory AI demo, pharma technology consultation",
					canonicalUrl: "https://phnyx.ai/contact",
				};
			case "thank-you":
				return {
					title: "Thank You - PhnyX Lab",
					description:
						"Thank you for your interest in PhnyX Lab. Our team will contact you within 24 hours to discuss how Cheiron can help your organization.",
					canonicalUrl: "https://phnyx.ai/thank-you",
				};
			default:
				return {
					title: "PhnyX Lab - AI Toolkit for Modern Biopharma",
					description:
						"Leading biopharma AI platform transforming pharmaceutical workflows with intelligent document automation, AI-powered literature review, and regulatory writing tools. Reduce drug discovery research time by 80% with Cheiron AI.",
					keywords:
						"biopharma AI, pharmaceutical AI, drug discovery AI, clinical research automation, AI medical writing, pharma workflow automation, biotech AI solutions, regulatory AI tools, pharmaceutical software, clinical AI platform, medical AI assistant, pharma document automation, drug development AI, biopharma technology, pharmaceutical innovation",
					canonicalUrl: "https://phnyx.ai",
					structuredData: getOrganizationStructuredData(),
				};
		}
	};

	// 페이지별 콘텐츠 렌더링
	const renderPageContent = () => {
		switch (currentPage) {
			case "products":
				return <ProductsPage />;
			case "company":
				return <CompanyPage />;
			case "newsroom":
				return <NewsroomPage />;

			case "request-demo":
				return <RequestDemoPage />;
			case "thank-you":
				return <ThankYouPage />;
			default:
				return (
					<div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white">
						<HeroSection />
						<div className="bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(206,14,45,0.03)_0%,transparent_50%)]"></div>
							<div className="relative z-10">
								<SocialProofSection />
							</div>
						</div>
						<div className="bg-gradient-to-br from-gray-50/50 via-white to-gray-50/80 border-t border-gray-100/50 relative overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.04)_0%,transparent_40%)]"></div>
							<div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(206,14,45,0.02)_120deg,transparent_240deg)]"></div>
							<div className="relative z-10">
								<ProblemSolutionSection />
							</div>
						</div>
						<div className="bg-gradient-to-br from-white via-gray-50/30 to-white border-t border-gray-100/50 relative overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(245,101,101,0.03)_0%,transparent_50%)]"></div>
							<div className="relative z-10">
								<PerformanceSection />
							</div>
						</div>
						<div className="bg-gradient-to-br from-gray-50/80 via-white to-gray-50/40 border-t border-gray-100/50 relative overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(206,14,45,0.02)_0%,transparent_60%)]"></div>
							<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(239,68,68,0.01)_50%,transparent_70%)]"></div>
							<div className="relative z-10">
								<TestimonialsSection />
							</div>
						</div>
						<FinalCTASection />
						<Footer />
					</div>
				);
		}
	};

	const currentSEO = getPageSEO();

	return (
		<div className="min-h-screen">
			{/* SEO and Analytics */}
			<SEOHead {...currentSEO} />
			<Analytics />

			{/* Global Navigation - Always visible across all pages */}
			<Navigation />

			{/* Page Content */}
			{renderPageContent()}
		</div>
	);
}
