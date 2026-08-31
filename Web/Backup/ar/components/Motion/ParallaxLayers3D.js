import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

// Three flat layers pushed to different Z depths inside one perspective
// box; moving the cursor parallaxes them at different rates, the same way
// `Tilt3D`'s `preserve3d` mode does for a single card, but as a whole scene.
const ParallaxLayers3D = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const backX = useTransform(sx, [0, 1], [-10, 10]);
  const backY = useTransform(sy, [0, 1], [-8, 8]);
  const midX = useTransform(sx, [0, 1], [-22, 22]);
  const midY = useTransform(sy, [0, 1], [-18, 18]);
  const frontX = useTransform(sx, [0, 1], [-38, 38]);
  const frontY = useTransform(sy, [0, 1], [-30, 30]);

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div
      ref={ref}
      className="pl-stage"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.span className="pl-layer pl-back" style={{ x: backX, y: backY }} />
      <motion.span className="pl-layer pl-mid" style={{ x: midX, y: midY }} />
      <motion.div className="pl-layer pl-front" style={{ x: frontX, y: frontY }}>
        بطاقة أمامية
      </motion.div>
      <style jsx>{`
        .pl-stage {
          position: relative;
          height: 220px;
          border-radius: 14px;
          background: #0a1f44;
          overflow: hidden;
        }
        .pl-layer {
          position: absolute;
        }
        .pl-back {
          top: 20px;
          left: 30px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(29, 211, 248, 0.25);
        }
        .pl-mid {
          bottom: 20px;
          right: 60px;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.15);
        }
        .pl-front {
          top: 50%;
          left: 50%;
          width: 150px;
          height: 90px;
          margin: -45px 0 0 -75px;
          border-radius: 12px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cairo", sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #14161a;
          box-shadow: 0 24px 40px -18px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ParallaxLayers3D;
