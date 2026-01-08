import { HiExternalLink, HiChevronDown } from "react-icons/hi";

/**
 * ResourcesColumn component displaying resource links with SDK dropdown menu
 * Features expandable SDK submenu on hover with links to various SDK offerings
 */
export default function ResourcesColumn({ 
  resources, 
  sdkItems, 
  showSDKs, 
  setShowSDKs 
}: { 
  resources: (string | { name: string; external?: boolean; dropdown?: boolean })[]; 
  sdkItems: string[];
  showSDKs: boolean;
  setShowSDKs: (show: boolean) => void;
}) {
  return (
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
  );
}
