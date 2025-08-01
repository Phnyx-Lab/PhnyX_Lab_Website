export const categories = [
  { id: "All", label: "All" },
  { id: "R&D", label: "R&D" },
  { id: "RA", label: "RA" },
  { id: "Sales", label: "Sales" },
  { id: "Marketing", label: "Marketing" }
];

export interface Testimonial {
  company: string;
  quote: string;
  logo: string;
}

// Combined testimonials for "All" category
const allTestimonials = [
  // R&D testimonials
  {
    company: "NOVARTIS",
    quote: "A literature review that used to take 8 hours now takes just 2 with Cheiron. Our research efficiency has more than tripled.",
    logo: "NVS"
  },
  {
    company: "PFIZER", 
    quote: "Cheiron's ability to trace sources back to original publications has revolutionized our research process. No more guesswork.",
    logo: "PFE"
  },
  {
    company: "ROCHE",
    quote: "The AI understands our scientific terminology perfectly. It's like having a research assistant who never sleeps.",
    logo: "ROG"
  },
  // RA testimonials
  {
    company: "ABBVIE",
    quote: "Regulatory document preparation time has been cut by 70%. Cheiron understands FDA requirements better than most consultants.",
    logo: "ABBV"
  },
  {
    company: "SANOFI",
    quote: "IND submissions are now streamlined. Cheiron pulls the exact regulatory precedents we need for our filings.",
    logo: "SNY"
  },
  {
    company: "GILEAD",
    quote: "The compliance checking feature catches regulatory gaps before submission. It's saved us multiple review cycles.",
    logo: "GILD"
  },
  // Sales testimonials
  {
    company: "TAKEDA",
    quote: "Client presentations are now backed by the latest clinical data. Cheiron helps us stay ahead of competition.",
    logo: "TAK"
  },
  {
    company: "ASTRAZENECA",
    quote: "Competitor analysis that used to take days is now done in hours. Our sales strategy is always data-driven.",
    logo: "AZN"
  },
  {
    company: "GSK",
    quote: "Medical affairs questions from doctors are answered instantly with credible sources. Our credibility has skyrocketed.",
    logo: "GSK"
  },
  // Marketing testimonials
  {
    company: "AMGEN",
    quote: "Market research and competitive intelligence gathering is 5x faster. Our campaigns are always based on latest insights.",
    logo: "AMGN"
  },
  {
    company: "CELGENE",
    quote: "Content creation for medical marketing now has solid scientific backing. Every claim is traceable to peer-reviewed sources.",
    logo: "CELG"
  },
  {
    company: "ILLUMINA",
    quote: "Therapeutic area trends and market dynamics are tracked in real-time. Our strategy adapts faster than ever.",
    logo: "ILMN"
  }
];

export const testimonialsByCategory = {
  "All": allTestimonials,
  "R&D": [
    {
      company: "NOVARTIS",
      quote: "A literature review that used to take 8 hours now takes just 2 with Cheiron. Our research efficiency has more than tripled.",
      logo: "NVS"
    },
    {
      company: "PFIZER", 
      quote: "Cheiron's ability to trace sources back to original publications has revolutionized our research process. No more guesswork.",
      logo: "PFE"
    },
    {
      company: "ROCHE",
      quote: "The AI understands our scientific terminology perfectly. It's like having a research assistant who never sleeps.",
      logo: "ROG"
    },
    {
      company: "JOHNSON & JOHNSON",
      quote: "Complex drug interaction studies that took weeks now take days. Cheiron accelerates our discovery timeline significantly.",
      logo: "JNJ"
    },
    {
      company: "MERCK & CO",
      quote: "Cheiron's precision in molecular pathway analysis has enhanced our target identification process beyond expectations.",
      logo: "MRK"
    },
    {
      company: "BRISTOL MYERS SQUIBB",
      quote: "The platform's ability to synthesize complex clinical data has transformed our approach to drug discovery research.",
      logo: "BMY"
    }
  ],
  "RA": [
    {
      company: "ABBVIE",
      quote: "Regulatory document preparation time has been cut by 70%. Cheiron understands FDA requirements better than most consultants.",
      logo: "ABBV"
    },
    {
      company: "SANOFI",
      quote: "IND submissions are now streamlined. Cheiron pulls the exact regulatory precedents we need for our filings.",
      logo: "SNY"
    },
    {
      company: "GILEAD",
      quote: "The compliance checking feature catches regulatory gaps before submission. It's saved us multiple review cycles.",
      logo: "GILD"
    },
    {
      company: "BIOGEN",
      quote: "Cheiron's regulatory intelligence has transformed our global submission strategy with unprecedented accuracy.",
      logo: "BIIB"
    },
    {
      company: "VERTEX",
      quote: "The platform's ability to navigate complex regulatory landscapes has accelerated our approval timelines significantly.",
      logo: "VRTX"
    },
    {
      company: "REGENERON",
      quote: "Cheiron's regulatory document automation has revolutionized our submission workflow and compliance processes.",
      logo: "REGN"
    }
  ],
  "Sales": [
    {
      company: "TAKEDA",
      quote: "Client presentations are now backed by the latest clinical data. Cheiron helps us stay ahead of competition.",
      logo: "TAK"
    },
    {
      company: "ASTRAZENECA",
      quote: "Competitor analysis that used to take days is now done in hours. Our sales strategy is always data-driven.",
      logo: "AZN"
    },
    {
      company: "GSK",
      quote: "Medical affairs questions from doctors are answered instantly with credible sources. Our credibility has skyrocketed.",
      logo: "GSK"
    },
    {
      company: "BAYER",
      quote: "Cheiron's market intelligence capabilities have transformed our commercial strategy with real-time insights.",
      logo: "BAYRY"
    },
    {
      company: "BOEHRINGER",
      quote: "The platform's competitive analysis has given us unprecedented market visibility and strategic advantage.",
      logo: "BDXB"
    },
    {
      company: "LILLY",
      quote: "Cheiron's sales intelligence has revolutionized how we approach key opinion leaders and market penetration.",
      logo: "LLY"
    }
  ],
  "Marketing": [
    {
      company: "AMGEN",
      quote: "Market research and competitive intelligence gathering is 5x faster. Our campaigns are always based on latest insights.",
      logo: "AMGN"
    },
    {
      company: "CELGENE",
      quote: "Content creation for medical marketing now has solid scientific backing. Every claim is traceable to peer-reviewed sources.",
      logo: "CELG"
    },
    {
      company: "ILLUMINA",
      quote: "Therapeutic area trends and market dynamics are tracked in real-time. Our strategy adapts faster than ever.",
      logo: "ILMN"
    },
    {
      company: "MODERNA",
      quote: "Cheiron's marketing intelligence has transformed our brand positioning with data-driven precision.",
      logo: "MRNA"
    },
    {
      company: "BMS",
      quote: "The platform's market analysis capabilities have revolutionized our product launch strategies.",
      logo: "BMY"
    },
    {
      company: "INCYTE",
      quote: "Cheiron's competitive marketing intelligence has given us unprecedented market insight and strategic clarity.",
      logo: "INCY"
    }
  ]
};