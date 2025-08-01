// import { MapPin, Trophy, Building, Rocket } from "lucide-react";

export function CompanyStorySection() {
  // const milestones = [
  //   {
  //     date: "Apr 2024",
  //     title: "SK Networks AI Org Launch",
  //     description: "A conversation between SK Networks President Sunghwan Choi and Stanford undergraduate Minseok Bae sparked a bold vision",
  //     icon: Building
  //   },
  //   {
  //     date: "Sep 2024", 
  //     title: "Founded in Palo Alto",
  //     description: "Spun out as an independent company backed by world-class talent and shared passion for solving industry's hardest problems",
  //     icon: Rocket
  //   },
  //   {
  //     date: "Dec 2024",
  //     title: "Korea Office Established", 
  //     description: "Expanded operations to Seoul, building a bridge between Silicon Valley innovation and Asian market expertise",
  //     icon: MapPin
  //   },
  //   {
  //     date: "Apr 2025",
  //     title: "Cheiron Public Launch",
  //     description: "Our flagship AI platform goes live, transforming how biopharma companies approach research and development",
  //     icon: Trophy
  //   }
  // ];

  return (
    <section className="company-story-section section-spacing bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-4 md:mb-8 tracking-hero leading-hero">
            The Genesis of<br />
            <span className="text-red-600">PhnyX Lab</span>
          </h2>
        </div>

        {/* Story Content - Left Aligned */}
        <div className="max-w-4xl mx-auto">
          {/* Story Narrative - left aligned with orphan prevention */}
          <div className="space-y-4 md:space-y-8 text-xl md:text-2xl leading-relaxed tracking-body text-gray-600 text-left font-condensed">
            <p>
              It began with a conversation. Not in a boardroom or investor pitch, but in a quiet corner of April&nbsp;2024, where ambition met opportunity. SK Networks President Sunghwan&nbsp;Choi, charting a bold course for internal AI capability, posed a deceptively simple question to Minseok&nbsp;Bae—a then-undergraduate at Stanford University: Why buy AI, when we can&nbsp;build&nbsp;it?
            </p>
            
            <p>
              Within weeks, an idea became initiative. What started as a skunkworks unit inside a legacy conglomerate soon morphed into something unrecognizable to its&nbsp;origins. By tapping into elite talent—including Olympiad medalists and AI researchers from IIT Bombay and Stanford—the team delivered project after project, each exceeding its&nbsp;KPIs. All within&nbsp;150&nbsp;days.
            </p>
            
            <p>
              By September, it had outgrown its&nbsp;shell. PhnyX Lab spun out as a venture-backed company headquartered in Palo&nbsp;Alto, with backing from HICO Capital and a mission as radical as it was focused: to reimagine how work is done in the most complex, most regulated sector of&nbsp;all—biopharma.
            </p>

            <p>
              But this was no generic AI startup chasing hype&nbsp;curves. Cheiron, its flagship platform, was built not just to answer questions, but to write the future of regulatory&nbsp;affairs: drafting INDs and CSRs with audit-grade citations, synthesizing hundreds of documents in seconds, and embedding itself into the workflows of Korea's top 20 pharma companies within its first three&nbsp;months.
            </p>

            <p>
              Where most generative AI tools hallucinate, Cheiron&nbsp;grounds. Where others offer speed, it offers&nbsp;precision. Its real feat lies in doing both—transforming weeks of manual labor into hours of review, while retaining the citation rigor demanded by FDA, EMA, and MFDS&nbsp;guidelines.
            </p>

            <p>
              PhnyX Lab didn't begin with a&nbsp;product. It began with a&nbsp;question. The answer, it turns out, was an industry disruptor—engineered not in Silicon Valley's echo chamber, but in the crucible of regulatory&nbsp;complexity.
            </p>

            <p className="text-gray-900 font-semibold">
              And it's only getting&nbsp;started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}