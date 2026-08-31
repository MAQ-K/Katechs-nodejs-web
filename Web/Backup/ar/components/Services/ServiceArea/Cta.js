import React from "react";
import Link from "next/link";
import Reveal from "../../Common/Reveal";
import TextReveal from "../../Common/motion/TextReveal";
import Magnetic from "../../Common/Magnetic";

// The single wide CTA that closes an area.
//
// Shared because the brief asks for exactly this shape in both of the last two
// areas — one heading, one button, one optional supporting line. It also
// enforces the rule those areas depend on: ONE call to action, never a row of
// competing buttons.

const Cta = ({ cta, id }) => {
  if (!cta) return null;

  return (
    <section className="wsv-cta" id={id}>
      <div className="container">
        <Reveal>
          <div className="wsv-cta-inner">
            {/* Word-by-word, not character-by-character: Arabic is cursive and
                splitting per character breaks the joining forms. TextReveal
                only offers a word mode for exactly that reason. */}
            <TextReveal text={cta.heading} as="h2" />
            {cta.note ? <p>{cta.note}</p> : null}
            {/* Magnetic wraps rather than replaces the Link, so the real
                anchor keeps its semantics, focus ring and keyboard behaviour. */}
            <Magnetic strength={0.22} radius={70}>
              <Link href={cta.action.href} className="wsv-cta-btn">
                {cta.action.label}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Cta;
