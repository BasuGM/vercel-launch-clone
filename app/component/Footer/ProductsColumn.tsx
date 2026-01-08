import { HiExternalLink } from "react-icons/hi";

/**
 * ProductsColumn component displaying Vercel product links
 * Shows a list of products including AI, Enterprise, Next.js, Security, and more
 */
export default function ProductsColumn({ 
  products 
}: { 
  products: (string | { name: string; external?: boolean })[] 
}) {
  return (
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
  );
}
