import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

/**
 * ProductGrid component displaying a grid of Acme store products
 * Reusable product showcase used across different PPR states
 */
export default function ProductGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 flex-1">
      {[
        {
          name: "Hoodie",
          price: "$45",
          image: getAssetPath("/assets/images/partial-prerendering-1.avif"),
        },
        {
          name: "Cap",
          price: "$30",
          image: getAssetPath("/assets/images/partial-prerendering-2.avif"),
        },
        {
          name: "Mug",
          price: "$15",
          image: getAssetPath("/assets/images/partial-prerendering-3.avif"),
        },
        {
          name: "T-Shirt",
          price: "$20",
          image: getAssetPath("/assets/images/partial-prerendering-4.avif"),
        },
      ].map((product, idx) => (
        <div
          key={idx}
          className="bg-gray-100 rounded p-2 flex flex-col"
        >
          <div className="bg-gray-200 rounded flex-1 relative overflow-hidden mb-1.5">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-black font-medium text-[9px]">
              {product.name}
            </span>
            <span className="text-gray-600 text-[9px]">
              {product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
