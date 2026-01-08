import CommentMessage from "./CommentMessage";
import CollaborationToolbar from "./CollaborationToolbar";
import InfrastructureContent from "./InfrastructureContent";

/**
 * Right column content area
 * Contains DX Platform messaging with comment collaboration demo,
 * collaboration toolbar, and infrastructure visualization
 * Showcases Vercel's developer experience and deployment workflow
 */
export default function RightColumn() {
  return (
    <div className="flex flex-col justify-center px-4 md:px-8 py-12 md:py-16">
      <div className="mb-8 flex flex-row items-start gap-6">
        <p className="text-lg md:text-xl text-gray-600 leading-normal font-medium flex-1">
          Traditional deployment tools weren't built for frontend development.
          Vercel is the{" "}
          <span className="font-semibold text-black">DX Platform</span> that has
          teams{" "}
          <span className="font-semibold text-black">shipping 6x faster</span>.
        </p>
        <div className="flex-shrink-0">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-base font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
            DX Platform
          </button>
        </div>
      </div>

      <CommentMessage
        author="rauno"
        message={
          <>
            The contrast ratio on this{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
              blockquote
            </code>{" "}
            isn't passing AA contrast. Can we tweak?
          </>
        }
      />

      <div className="mt-6 ml-24">
        <CommentMessage
          author="henryjeff"
          color="blue"
          direction="right"
          message={
            <>
              Okay, I've flipped this to our second darkest color token,{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">
                -900
              </code>
              .
            </>
          }
        />
      </div>

      <CollaborationToolbar />

      <div className="mt-8 h-px bg-gray-200"></div>

      <InfrastructureContent />
    </div>
  );
}
