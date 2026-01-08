import { getAssetPath } from "@/lib/utils";

/**
 * Logo data for trusted companies
 * Contains company names, image paths, and dimensions for display
 */
export const logos = [
  {
    name: "Unity",
    src: getAssetPath("/assets/images/unity-logo.svg"),
    width: 120,
    height: 40,
  },
  {
    name: "The Washington Post",
    src: getAssetPath("/assets/images/the-washington-post-logo-5.png"),
    width: 180,
    height: 20,
  },
  {
    name: "Wayfair",
    src: getAssetPath("/assets/images/wayfair-logo.svg"),
    width: 140,
    height: 40,
  },
  {
    name: "Under Armour",
    src: getAssetPath("/assets/images/under-armour-logo-2.png"),
    width: 140,
    height: 40,
  },
  {
    name: "Stripe",
    src: getAssetPath("/assets/images/stripe-logo.png"),
    width: 100,
    height: 40,
  },
];
