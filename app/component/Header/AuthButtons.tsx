import WhiteButton from "../common/WhiteButton";
import BlackButton from "../common/BlackButton";

/**
 * AuthButtons component displaying authentication and contact action buttons
 * Features Log In, Contact, and Sign Up buttons for desktop navigation
 */
export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <WhiteButton>Log In</WhiteButton>
      <WhiteButton>Contact</WhiteButton>
      <BlackButton>Sign Up</BlackButton>
    </div>
  );
}
