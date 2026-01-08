/**
 * StatusIndicator component displaying system status
 * Shows a blue dot indicator with "All systems normal" message
 */
export default function StatusIndicator() {
  return (
    <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <span className="text-sm text-blue-600 font-sans">
          All systems normal.
        </span>
      </div>
    </div>
  );
}
