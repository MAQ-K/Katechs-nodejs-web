import React from "react";

// Seamless looping ticker of the stack we build with — CSS only, pauses on
// hover, edges masked so items fade rather than clip (Motion Lab "Infinite
// marquee"). The list is rendered twice; the keyframe translates exactly -50%,
// which is what makes the loop invisible.
const items = [
  { icon: "bx bxl-apple", label: "Swift" },
  { icon: "bx bxl-android", label: "Kotlin" },
  { icon: "bx bx-devices", label: "Flutter" },
  { icon: "bx bxl-react", label: "React Native" },
  { icon: "bx bxl-firebase", label: "Firebase" },
  { icon: "bx bx-data", label: "REST API" },
  { icon: "bx bx-bell", label: "إشعارات فورية" },
  { icon: "bx bx-credit-card", label: "بوابات دفع" },
  { icon: "bx bx-map-alt", label: "خرائط ومواقع" },
  { icon: "bx bx-line-chart", label: "تحليلات" },
];

const TechMarquee = () => {
  return (
    <section className="app-marquee" aria-label="التقنيات التي نستخدمها">
      <div className="app-marquee-wrap">
        <div className="app-marquee-track">
          {[0, 1].map((copy) => (
            <React.Fragment key={copy}>
              {items.map((item) => (
                <span
                  className="app-marquee-item"
                  key={`${copy}-${item.label}`}
                  aria-hidden={copy === 1 ? "true" : undefined}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
