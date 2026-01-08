"use client";
import { useState } from "react";
import ProductsColumn from "./ProductsColumn";
import ResourcesColumn from "./ResourcesColumn";
import CompanyColumn from "./CompanyColumn";
import SocialColumn from "./SocialColumn";
import StatusIndicator from "./StatusIndicator";
import { sdkItems, legalItems, products, resources, company, social } from "./footerData";

/**
 * Footer component providing site-wide footer navigation and information
 * Features four columns (Products, Resources, Company, Social) and a status indicator
 * Includes dropdown menus for SDKs and Legal information
 */
export default function Footer() {
  const [showSDKs, setShowSDKs] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <ProductsColumn products={products} />
          <ResourcesColumn 
            resources={resources} 
            sdkItems={sdkItems} 
            showSDKs={showSDKs} 
            setShowSDKs={setShowSDKs} 
          />
          <CompanyColumn 
            company={company} 
            legalItems={legalItems} 
            showLegal={showLegal} 
            setShowLegal={setShowLegal} 
          />
          <SocialColumn social={social} />
        </div>
        <StatusIndicator />
      </div>
    </footer>
  );
}
