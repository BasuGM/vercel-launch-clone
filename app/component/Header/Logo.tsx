import VercelLogo from "../common/VercelLogo";

/**
 * Logo component displaying the Vercel logo with responsive sizing
 * Shows smaller logo on mobile (70px) and larger on desktop (90px)
 */
export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="md:hidden">
        <VercelLogo size={70} />
      </div>
      <div className="hidden md:block">
        <VercelLogo size={90} />
      </div>
    </div>
  );
}
