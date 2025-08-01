import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Cheiron Search", href: "#products" },
        { name: "Cheiron Write", href: "#products" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About Us", href: "#company" },
        { name: "Newsroom", href: "#newsroom" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Palo Alto, CA", href: "#", isLocation: true },
        { name: "Seoul, Korea", href: "#", isLocation: true },
        { name: "Request a Demo", href: "#request-demo" }
      ]
    }
  ];

  // X (Twitter) SVG Icon Component
  const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const socialLinks = [
    { Icon: Linkedin, href: "#", name: "LinkedIn" },
    { Icon: XIcon, href: "#", name: "X" },
    { Icon: Mail, href: "#", name: "Email" }
  ];

  return (
    <footer className="bg-black text-white section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold mb-6 tracking-subtitle">
              PhnyX Lab
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed-plus tracking-body">
              Redefining biopharma workflow through AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, name }) => (
                <a 
                  key={name}
                  href={href} 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-6 tracking-subtitle text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className={`transition-colors tracking-body ${
                        link.isLocation 
                          ? 'text-gray-400 cursor-default' 
                          : 'text-gray-400 hover:text-white'
                      }`}
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
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm tracking-body">
              © 2025 PhnyX Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm tracking-body"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}