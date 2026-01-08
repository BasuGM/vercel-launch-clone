/**
 * DeploymentColumn component displaying deployment call-to-action
 * Features messaging for free account signup and expert consultation for Pro/Enterprise tiers
 * Includes Start Deploying and Talk to an Expert action buttons
 */
export default function DeploymentColumn() {
  return (
    <div className="lg:col-span-2 px-6 py-8 relative z-10">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 leading-tight font-sans">
        Ready to deploy?{" "}
        <span className="text-gray-500">
          Start building with a free account. Speak to an expert for your{" "}
        </span>
        <span className="text-blue-600 font-medium">Pro</span>
        <span className="text-gray-500"> or </span>
        <span className="text-purple-600 font-medium">Enterprise</span>
        <span className="text-gray-500"> needs.</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors font-sans cursor-pointer">
          Start Deploying
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 hover:text-black text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors font-sans cursor-pointer">
          Talk to an Expert
        </button>
      </div>
    </div>
  );
}
