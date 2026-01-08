import { motion } from "framer-motion";

/**
 * StaticShellView component showing the static content extraction state
 * Displays a simple header layout with orange theme to represent prerendered static shell
 */
export default function StaticShellView() {
  return (
    <motion.div
      key="feature-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-yellow-50 border-2 border-dashed border-orange-400 rounded-lg m-4 px-4 py-3 flex items-center justify-between"
    >
      <div className="flex-shrink-0">
        <span className="font-semibold text-black text-lg">Acme®</span>
      </div>
      <div className="flex-1 flex items-center justify-center gap-8 text-gray-600 text-base">
        <span>Shop All</span>
        <span>Apparel</span>
        <span>Sale</span>
      </div>
      <div className="flex gap-3 flex-shrink-0">
        <div className="w-6 h-6 rounded-full bg-yellow-300"></div>
        <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
      </div>
    </motion.div>
  );
}
