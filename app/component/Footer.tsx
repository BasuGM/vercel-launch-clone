import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiExternalLink, HiChevronDown } from "react-icons/hi";
import { useState } from "react";

export default function Footer() {
  const [showSDKs, setShowSDKs] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  const sdkItems = [
    "AI SDK",
    "Workflow DevKit",
    "Flags SDK",
    "Chat SDK",
    "Streamdown AI",
  ];

  const legalItems = [
    "Cookie Policy",
    "Cookie Preferences",
    "DMCA Policy",
    "DORA Addendum",
    "DPA",
    "Domain Name Registration and Services Terms",
    "Event Code of Conduct",
    "Event Terms and Conditions",
    "Inactivity Policy",
    "Job Applicant Privacy Notice",
    "Privacy Policy",
    "SLA",
    "Sub-processors",
    "Support Terms",
    "Terms of Service",
    "Trademark Policy",
  ];

  const products = [
    "AI",
    "Enterprise",
    "Fluid Compute",
    "Next.js",
    "Observability",
    "Previews",
    "Rendering",
    "Security",
    "Turbo",
    "Domains",
    "Sandbox",
    { name: "v0", external: true },
  ];

  const resources = [
    { name: "Community", external: true },
    "Docs",
    "Knowledge Base",
    "Academy",
    "Help",
    "Integrations",
    "Platforms",
    "Pricing",
    "Resources",
    "Solution Partners",
    "Startups",
    "Templates",
    { name: "SDKs by Vercel", dropdown: true },
  ];

  const company = [
    "About",
    "Blog",
    "Careers",
    "Changelog",
    "Contact Us",
    "Customers",
    "Events",
    "Partners",
    "Shipped",
    "Privacy Policy",
    { name: "Legal", dropdown: true },
  ];

  const social = [
    { name: "GitHub", icon: FaGithub },
    { name: "LinkedIn", icon: FaLinkedin },
    { name: "Twitter", icon: FaTwitter },
    { name: "YouTube", icon: FaYoutube },
  ];

  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4 font-sans">
              Products
            </h3>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <span className="text-sm text-gray-600 hover:text-black transition-colors font-sans flex items-center gap-1 cursor-pointer">
                    {typeof item === "string" ? item : item.name}
                    {typeof item === "object" && item.external && (
                      <HiExternalLink className="w-3 h-3" />
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4 font-sans">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  {typeof item === "object" && item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowSDKs(true)}
                      onMouseLeave={() => setShowSDKs(false)}
                    >
                      <span className="text-sm text-gray-600 hover:text-black transition-colors font-sans flex items-center gap-1 cursor-pointer">
                        {item.name}
                        <HiChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            showSDKs ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      {showSDKs && (
                        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
                          <ul className="space-y-3">
                            {sdkItems.map((sdk, sdkIndex) => (
                              <li key={sdkIndex}>
                                <span className="text-sm text-gray-700 hover:text-black transition-colors font-sans flex items-center gap-2 cursor-pointer">
                                  {sdk}
                                  <HiExternalLink className="w-3 h-3" />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-600 hover:text-black transition-colors font-sans flex items-center gap-1 cursor-pointer">
                      {typeof item === "string" ? item : item.name}
                      {typeof item === "object" && item.external && (
                        <HiExternalLink className="w-3 h-3" />
                      )}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4 font-sans">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  {typeof item === "object" && item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowLegal(true)}
                      onMouseLeave={() => setShowLegal(false)}
                    >
                      <span className="text-sm text-gray-600 hover:text-black transition-colors font-sans flex items-center gap-1 cursor-pointer">
                        {item.name}
                        <HiChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            showLegal ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      {showLegal && (
                        <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 z-50">
                          <ul className="space-y-3">
                            {legalItems.map((legal, legalIndex) => (
                              <li key={legalIndex}>
                                <span className="text-sm text-gray-700 hover:text-black transition-colors font-sans cursor-pointer">
                                  {legal}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-600 hover:text-black transition-colors font-sans flex items-center gap-1 cursor-pointer">
                      {typeof item === "string" ? item : item.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-base font-semibold text-black mb-4 font-sans">
              Social
            </h3>
            <ul className="space-y-3">
              {social.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <span className="text-sm text-gray-600 hover:text-black transition-colors font-sans flex items-center gap-2 cursor-pointer">
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-blue-600 font-sans">
              All systems normal.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
