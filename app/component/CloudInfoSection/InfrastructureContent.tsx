import AnimatedTerminal from "./AnimatedTerminal";

/**
 * Infrastructure content section
 * Displays global infrastructure visualization with SVG globe and network connections
 * Shows deployment terminal animation and "Infrastructure on autopilot" messaging
 */
export default function InfrastructureContent() {
  return (
    <div className="mt-12">
      <div className="mb-8 flex flex-row items-start gap-6">
        <p className="text-lg md:text-xl text-gray-600 leading-normal font-medium flex-1">
          <span className="font-semibold text-black">
            Infrastructure on autopilot.
          </span>{" "}
          Your gateway to globally fast, infinitely scalable, and always
          reliable web apps.
        </p>
        <div className="flex-shrink-0">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
            Infrastructure
          </button>
        </div>
      </div>

      {/* Globe Visualization */}
      <div className="relative w-full h-96 flex items-center justify-center">
        <svg
          className="w-full h-full max-w-2xl"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal grid lines */}
          <ellipse
            cx="300"
            cy="200"
            rx="250"
            ry="180"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="300"
            cy="200"
            rx="250"
            ry="120"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <ellipse
            cx="300"
            cy="200"
            rx="250"
            ry="60"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />

          {/* Vertical grid lines */}
          <path
            d="M 300 20 Q 300 110 300 200 Q 300 290 300 380"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 200 40 Q 220 110 240 200 Q 220 290 200 360"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 100 60 Q 140 110 180 200 Q 140 290 100 340"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 400 40 Q 380 110 360 200 Q 380 290 400 360"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 500 60 Q 460 110 420 200 Q 460 290 500 340"
            stroke="#e5e7eb"
            strokeWidth="1"
            fill="none"
          />

          {/* Connection lines (blue) */}
          <path
            d="M 240 120 L 300 50"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 240 120 L 460 180"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 300 50 L 460 180"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 460 180 L 520 240"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 120 280 L 300 220"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />

          {/* Location pins (triangles) */}
          <g transform="translate(240, 120)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(300, 50)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(460, 180)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(300, 220)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(520, 240)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
          <g transform="translate(120, 280)">
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <path d="M 0 -6 L 5 4 L -5 4 Z" fill="#6b7280" />
          </g>
        </svg>

        <AnimatedTerminal />
      </div>
    </div>
  );
}
