/**
 * Heading component for the trusted companies section
 * Displays the main message about Next.js company partnerships
 */
export default function CompaniesHeading() {
  return (
    <h2 className="text-center text-lg md:text-xl text-gray-600 mb-12 md:mb-16 font-sans font-semibold">
      Trusted by the{" "}
      <span className="text-black">largest Next.js companies.</span>
    </h2>
  );
}
