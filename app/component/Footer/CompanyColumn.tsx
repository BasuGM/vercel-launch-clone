import { HiChevronDown } from "react-icons/hi";

/**
 * CompanyColumn component displaying company links with Legal dropdown menu
 * Features expandable Legal submenu on hover with policy and legal document links
 */
export default function CompanyColumn({ 
  company, 
  legalItems, 
  showLegal, 
  setShowLegal 
}: { 
  company: (string | { name: string; dropdown?: boolean })[]; 
  legalItems: string[];
  showLegal: boolean;
  setShowLegal: (show: boolean) => void;
}) {
  return (
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
  );
}
