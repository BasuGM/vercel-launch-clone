import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IoRefreshOutline } from "react-icons/io5";
import { SiNextdotjs, SiShopify } from "react-icons/si";

/**
 * Animated terminal simulation component
 * Shows deployment workflow stages: cursor → directory → git push → building → deployed
 * Cycles through 5 stages with smooth transitions to demonstrate the deployment process
 */
export default function AnimatedTerminal() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timings = [2000, 1500, 2000, 2000, 2000];
    const timer = setTimeout(() => {
      setStage((prev) => (prev + 1) % 5);
    }, timings[stage]);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2 min-h-[24px]">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.span
              key="stage0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-2 h-5 bg-black inline-block animate-pulse"
            />
          )}
          {stage === 1 && (
            <motion.div
              key="stage1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 text-sm font-mono">~</span>
              <span className="text-gray-900 text-sm font-mono">vercel-site/</span>
            </motion.div>
          )}
          {stage === 2 && (
            <motion.div
              key="stage2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 text-sm font-mono">~</span>
              <span className="text-gray-900 text-sm font-mono">vercel-site/</span>
              <span className="text-gray-900 text-sm font-mono">git push</span>
              <span className="w-2 h-5 bg-black inline-block animate-pulse"></span>
            </motion.div>
          )}
          {stage === 3 && (
            <motion.div
              key="stage3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1 L11 11 L1 11 Z" fill="black" />
                </svg>
              </div>
              <span className="text-gray-900 text-sm font-mono">building...</span>
              <div className="flex items-center gap-1.5 ml-2">
                <SiNextdotjs className="w-5 h-5 text-black" />
                <SiShopify className="w-5 h-5 text-green-500" />
              </div>
            </motion.div>
          )}
          {stage === 4 && (
            <motion.div
              key="stage4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className="text-gray-900 text-sm font-mono">deployed</span>
              <IoRefreshOutline className="w-5 h-5 text-gray-900 ml-2" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
