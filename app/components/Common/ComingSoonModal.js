import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Shared placeholder for a plan/order form that does not exist yet.
// Used by the Emails and Hosting plan cards (task: "open a popup, form isn't
// ready yet, just make it pop") rather than routing to a real order flow.
//
// Deliberately generic — no page-specific copy baked in — so any future plan
// card can reuse it: pass `planName` for "which card did they press" context
// and it renders in the message.
const ComingSoonModal = ({ open, onClose, planName }) => {
  const closeBtnRef = useRef(null);

  // Esc closes it, and focus lands on the close button on open so a keyboard
  // user isn't left inside the page behind an overlay they can't see past.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    // Body scroll lock — a background page taller than the viewport must not
    // scroll behind a fixed overlay.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="csm-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="csm-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // Click on the backdrop closes it; the panel below stops the click
          // from bubbling here so clicking inside it does not.
          onClick={onClose}
        >
          <motion.div
            className="csm-panel"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="csm-close"
              onClick={onClose}
              aria-label="إغلاق"
              ref={closeBtnRef}
            >
              <i className="bx bx-x" aria-hidden="true"></i>
            </button>

            <span className="csm-icon">
              <i className="bx bx-time-five" aria-hidden="true"></i>
            </span>

            <h3 id="csm-title">النموذج قيد التجهيز</h3>
            <p>
              {planName ? `اخترت "${planName}". ` : ""}
              نموذج الطلب المباشر لم يجهز بعد — تواصل معنا الآن وسنكمل طلبك
              يدويًا في نفس اليوم.
            </p>

            <div className="csm-actions">
              <Link href="/contactWeb" className="csm-btn csm-btn-solid">
                تواصل معنا
              </Link>
              <a
                href="https://wa.me/+201555085828"
                target="_blank"
                rel="noreferrer"
                className="csm-btn csm-btn-ghost"
              >
                <i className="bx bxl-whatsapp" aria-hidden="true"></i>
                واتساب
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
