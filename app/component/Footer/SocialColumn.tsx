/**
 * SocialColumn component displaying social media links with icons
 * Shows GitHub, LinkedIn, Twitter, and YouTube links with corresponding icons
 */
export default function SocialColumn({ 
  social 
}: { 
  social: { name: string; icon: React.ComponentType<{ className?: string }> }[] 
}) {
  return (
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
  );
}
