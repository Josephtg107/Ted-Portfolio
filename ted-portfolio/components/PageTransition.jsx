"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
          <motion.div
            animate={{
              opacity: 0,
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
        </div>
      </AnimatePresence>
    );
};

export default PageTransition;