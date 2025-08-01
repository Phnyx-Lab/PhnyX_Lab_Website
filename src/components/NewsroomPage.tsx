import { Footer } from "./Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FinalCTASection } from "./FinalCTASection";
import news1 from "../assets/images/news1.jpg";
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";
import news4 from "../assets/images/news4.jpg";

export function NewsroomPage() {
	const featuredStory = {
		category: "Company News",
		featured: true,
		title:
			"Yoo Chang-ho, head of strategy at SK Biopharmaceuticals, left, and Bae Min-seok, CEO of PhnyX Lab, pose for a commemorative photo marking the signing of a memorandum of understanding on AI-based drug development at the SK Biopharmaceuticals booth during BIO USA 2025 on June 17. [SK BIOPHARMACEUTICALS]",
		author: "KIM MIN-YOUNG",
		excerpt:
			"SK Biopharmaceuticals signed a memorandum of understanding with PhnyX Lab, a U.S.-based AI startup backed by SK Networks, to establish an AI-powered drug development framework.",
		date: "06/17/2025",
		readTime: "5 min read",
		image: news4,
		link: "https://koreajoongangdaily.joins.com/news/2025-06-18/business/industry/SK-Biopharma-inks-MOU-with-PhnyX-Lab-to-creat-AIpowered-drug-development-framework/2332928",
	};

	const recentUpdates = [
		{
			title:
				"Huh Seung-beom (left) and Bae Min-seok, CEO of Samil Pharmaceutical, are taking photos at the signing ceremony of the business agreement between Samil Pharmaceutical and Phoenix Lab to develop Generative AI based solutions at the headquarters of Samil Pharmaceutical on the 8th. Photo = Samil Pharmaceutical Co., Ltd",
			excerpt:
				"Samil Pharmaceutical announced on the 8th that SK Networks signed a memorandum of understanding (MOU) with 'PinyX Lab LLC', an AI start-up established in Silicon Valley, USA, to develop customized solutions for pharmaceutical companies based on Generative AI.",
			date: "07/08/2025",
			readTime: "6 min read",
			image: news2,
			link: "https://www.mk.co.kr/en/it/11362804",
		},
		// {
		// 	title:
		// 		"Yoo Chang-ho, head of strategy at SK Biopharmaceuticals, left, and Bae Min-seok, CEO of PhnyX Lab, pose for a commemorative photo marking the signing of a memorandum of understanding on AI-based drug development at the SK Biopharmaceuticals booth during BIO USA 2025 on June 17. [SK BIOPHARMACEUTICALS]",
		// 	excerpt:
		// 		"SK Biopharmaceuticals signed a memorandum of understanding with PhnyX Lab, a U.S.-based AI startup backed by SK Networks, to establish an AI-powered drug development framework.",
		// 	date: "06/17/2025",
		// 	readTime: "4 min read",
		// 	image: news4,
		// 	link: "https://koreajoongangdaily.joins.com/news/2025-06-18/business/industry/SK-Biopharma-inks-MOU-with-PhnyX-Lab-to-creat-AIpowered-drug-development-framework/2332928",
		// },
		{
			title:
				"작년 12월 간담회에서 국내사와 협업 이야기를 언급하며 진행 중인 사항이 있다고 했습니다. 현재 진행되는 회사들과 협업 단계는 어느 정도 진척 되었는지 질문드립니다.",
			excerpt:
				"저희는 초기 파일럿 단계부터, 지난해 말 케이론 론칭 이후 현재까지 20여개 제약사를 대상으로 케이론 솔루션을 제공하면서 인공지능 전환(AI Transformation, AI 기술을 활용해 비즈니스 인프라를 고도화하는 작업)을 추진하는 제약사들과 협업 중입니다.",
			date: "11/02/2025",
			readTime: "4 min read",
			image: news3,
			link: "http://www.hitnews.co.kr/news/articleView.html?idxno=61563",
		},

		{
			title:
				"SK Networks President and Chief Operating Officer Choi Sung-hwan speaks at the launch event for PhnyX Lab's new AI product at the Grand Walkerhill Hotel in eastern Seoul on Dec. 17. [SK NETWORKS]",
			excerpt:
				"PhnyX Lab, a U.S.-based AI startup backed by SK Networks, unveiled a bio-focused version of ChatGPT tailored to the pharmaceutical sector, aligning with the conglomerate's broader refocus around AI innovation.",
			date: "12/17/2024",
			readTime: "8 min read",
			image: news1,
			link: "https://koreajoongangdaily.joins.com/news/2024-12-18/business/industry/Cherion-is-ChatGPT-for-the-pharmaceutical-industry/2203850",
		},
	];

	return (
		<div className="pt-20 min-h-screen bg-white md:pt-16">
			{/* Featured Story Section */}
			<section className="bg-white section-spacing-xl">
				<div className="px-6 mx-auto max-w-7xl lg:px-8">
					<div className="mb-8">
						<h1 className="mb-2 text-3xl font-bold text-black tracking-title">
							Featured Story
						</h1>
						<div className="w-12 h-1 bg-red-600"></div>
					</div>

					<div className="p-8 bg-gray-50 rounded-xl border border-gray-200 md:p-12">
						<div className="grid gap-12 items-center lg:grid-cols-2">
							{/* Content */}
							<div>
								<div className="flex gap-3 items-center mb-6">
									<span className="px-3 py-1 text-sm font-medium text-red-700 bg-red-50 rounded-lg border border-red-200">
										{featuredStory.category}
									</span>
									<span className="px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-50 rounded-lg border border-yellow-200">
										Featured
									</span>
								</div>

								<h2 className="mb-6 text-3xl font-bold leading-tight text-black md:text-4xl tracking-title line-clamp-4">
									{featuredStory.title}
								</h2>

								<p className="mb-8 text-lg leading-relaxed text-gray-600 font-condensed tracking-body">
									{featuredStory.excerpt}
								</p>

								<div className="flex gap-4 items-center mb-8 text-gray-500">
									<div className="flex gap-2 items-center">
										<User className="w-4 h-4" />
										<span className="text-sm font-condensed">
											{featuredStory.author}
										</span>
									</div>
									<div className="flex gap-2 items-center">
										<Calendar className="w-4 h-4" />
										<span className="text-sm font-condensed">
											{featuredStory.date}
										</span>
									</div>
									<div className="flex gap-2 items-center">
										<Clock className="w-4 h-4" />
										<span className="text-sm font-condensed">
											{featuredStory.readTime}
										</span>
									</div>
								</div>

								<div className="flex gap-4 items-center">
									<Button
										className="px-6 py-3 h-auto font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 tracking-subtitle"
										onClick={() => {
											if (featuredStory.link) {
												window.open(
													featuredStory.link,
													"_blank",
													"noopener,noreferrer",
												);
											}
										}}
									>
										Read Full Story
										<ArrowRight className="ml-2 w-4 h-4" />
									</Button>

									{/* <Button
										variant="outline"
										className="px-6 py-3 h-auto font-medium text-gray-700 bg-white rounded-lg border-gray-300 hover:bg-gray-50 hover:border-gray-400 tracking-body"
									>
										<Share className="mr-2 w-4 h-4" />
										Share
									</Button> */}
								</div>
							</div>

							{/* Image */}
							<div className="lg:order-last">
								<div className="aspect-[4/3] rounded-xl overflow-hidden">
									<ImageWithFallback
										src={featuredStory.image}
										alt="Brain neural network visualization"
										className="object-cover w-full h-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recent Updates Section */}
			<section className="bg-white section-spacing">
				<div className="px-6 mx-auto max-w-7xl lg:px-8">
					<div className="mb-12">
						<h2 className="mb-2 text-3xl font-bold text-black tracking-title">
							Recent Updates
						</h2>
						<div className="w-12 h-1 bg-red-600"></div>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{recentUpdates.map((article, index) => (
							<button
								key={`article-${index}-${article.title.slice(0, 20)}`}
								type="button"
								className="overflow-hidden w-full text-left bg-white rounded-xl border border-gray-200 transition-all duration-300 cursor-pointer hover:shadow-lg group"
								onClick={() => {
									if (article.link) {
										window.open(article.link, "_blank", "noopener,noreferrer");
									}
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										if (article.link) {
											window.open(
												article.link,
												"_blank",
												"noopener,noreferrer",
											);
										}
									}
								}}
								aria-label={`Read article: ${article.title}`}
							>
								<div className="aspect-[4/3] overflow-hidden">
									<ImageWithFallback
										src={article.image}
										alt={article.title}
										className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
									/>
								</div>

								<div className="p-6">
									<h3 className="mb-3 text-lg font-bold leading-tight text-gray-900 transition-colors tracking-subtitle group-hover:text-red-600 line-clamp-4 min-h-[4.5rem]">
										{article.title}
									</h3>

									<p className="mb-4 text-sm leading-relaxed text-gray-600 font-condensed tracking-body line-clamp-3">
										{article.excerpt}
									</p>

									<div className="flex justify-between items-center">
										<div className="flex gap-3 items-center text-xs text-gray-500">
											<div className="flex gap-1 items-center">
												<Calendar className="w-3 h-3" />
												<span className="font-condensed">{article.date}</span>
											</div>
											<div className="flex gap-1 items-center">
												<Clock className="w-3 h-3" />
												<span className="font-condensed">
													{article.readTime}
												</span>
											</div>
										</div>
										<ArrowRight className="w-4 h-4 text-gray-400 transition-all group-hover:text-red-600 group-hover:translate-x-1" />
									</div>
								</div>
							</button>
						))}
					</div>

					{/* View All Button */}
					{/* <div className="mt-12 text-center">
						<Button
							size="lg"
							variant="outline"
							className="px-12 py-5 h-auto text-lg font-medium text-gray-700 bg-white rounded-xl border-gray-300 hover:bg-gray-50 hover:border-gray-400 tracking-body"
						>
							View All Articles
							<ArrowRight className="ml-3 w-5 h-5" />
						</Button>
					</div> */}
				</div>
			</section>

			{/* CTA Section */}
			{/* <section className="bg-white section-spacing">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="p-12 text-white bg-gray-900 rounded-xl md:p-16">
            <div className="mx-auto max-w-4xl text-center">
              <h3 className="mb-6 text-3xl font-bold md:text-4xl tracking-title">
                Ready to Transform Your Workflow?
              </h3>
              <p className="mb-8 text-xl text-gray-300 font-condensed tracking-body">
                Join thousands of biopharma professionals who trust PhnyX Lab insights. 
                Discover how AI is transforming pharmaceutical research and development.
              </p>
              
              <Button 
                size="lg" 
                className="px-12 py-4 h-auto text-xl font-bold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 tracking-subtitle"
                onClick={() => window.location.hash = "request-demo"}
              >
                Contact Us
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

			<FinalCTASection />
			<Footer />
		</div>
	);
}
