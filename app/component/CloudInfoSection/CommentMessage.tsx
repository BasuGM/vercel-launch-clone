import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMdInformationCircleOutline } from "react-icons/io";
import AuthorBadge from "./AuthorBadge";

/**
 * Props interface for comment message component
 * Defines structure for collaborative comment display with author and message
 */
export interface CommentMessageProps {
  avatar?: string;
  author: string;
  message: React.ReactNode;
  color?: string;
  direction?: "left" | "right";
}

/**
 * Comment message bubble component
 * Displays a collaborative comment with avatar, author name, message content,
 * and action buttons for mobile/info interactions
 */
export default function CommentMessage({
  avatar,
  author,
  message,
  color = "red",
  direction = "left",
}: CommentMessageProps) {
  const avatarBgColor = color === "blue" ? "bg-blue-500" : "bg-red-500";

  return (
    <div className="relative">
      <AuthorBadge author={author} color={color} direction={direction} />
      <div className="bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm max-w-md">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div
              className={`w-8 h-8 rounded-full ${avatarBgColor} flex items-center justify-center flex-shrink-0`}
            >
              <span className="text-white text-xs font-semibold">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-black mb-1">{author}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <HiOutlineDevicePhoneMobile className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <IoMdInformationCircleOutline className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
