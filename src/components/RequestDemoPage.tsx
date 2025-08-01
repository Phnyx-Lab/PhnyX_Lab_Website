import { Footer } from "./Footer";
import { RequestDemoValueProp } from "./request-demo/RequestDemoValueProp";
import { RequestDemoForm } from "./request-demo/RequestDemoForm";

export function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-16">
      <RequestDemoContent />
      <Footer />
    </div>
  );
}

function RequestDemoContent() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 relative overflow-hidden py-8 lg:py-16">
      <BackgroundElements />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-8 gap-6 items-start">
          <ValuePropositionSection />
          <ContactFormSection />
        </div>
      </div>
    </section>
  );
}

function BackgroundElements() {
  return (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
    </div>
  );
}

function ValuePropositionSection() {
  return (
    <div className="lg:col-span-3 hidden lg:block">
      <div className="lg:sticky lg:top-8 lg:h-fit pr-6">
        <RequestDemoValueProp />
      </div>
    </div>
  );
}

function ContactFormSection() {
  return (
    <div className="lg:col-span-5 min-h-screen lg:min-h-[120vh]">
      <RequestDemoForm />
    </div>
  );
}