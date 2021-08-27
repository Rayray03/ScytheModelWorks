import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const modal = ({ isToggled, isToggled1, children }) => {
  return (
    <div>
      <AnimatePresence>
        {isToggled && (
          <div class="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: "50px",
                left: "50%",
                transform: "translate3d(-50%,0,0)",
              }}
            >
              <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default modal;
