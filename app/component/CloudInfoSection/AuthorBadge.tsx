import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";

/**
 * Animated author badge component
 * Displays floating author label with send icon and bounce animation
 * Used to indicate who is sending a comment
 */
export default function AuthorBadge({
  author,
  color = "red",
  direction = "left",
}: {
  author: string;
  color?: string;
  direction?: "left" | "right";
}) {
  const bgColor = color === "blue" ? "bg-blue-500" : "bg-red-500";
  const textColor = color === "blue" ? "text-blue-500" : "text-red-500";
  const isRight = direction === "right";

  return (
    <motion.div
      className={`absolute top-10 ${
        isRight ? "left-32" : "right-32"
      } flex items-center gap-2 ${isRight ? "flex-row-reverse" : "flex-row"}`}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <IoSend
        className={`w-5 h-5 ${textColor} ${isRight ? "" : "rotate-180"}`}
      />
      <div
        className={`${bgColor} text-white px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm`}
      >
        {author.charAt(0).toUpperCase() + author.slice(1)}
      </div>
    </motion.div>
  );
}
