import React, { useRef, useState } from "react";

const trustedCustomersData = [
  {
    initials: "AK",
    feedbackText:
      "من 2011 وإحنا معاهم، وما شفنا داعي نغيّر لين اليوم. الاستضافة ثابتة والإيميل شغال زي ما هو من غير ما نحتاج نتابعه كل شوي",
    name: "Italian Ansaldo KSA",
    role: "استضافة+ايميل - 15 سنة",
  },
  {
    initials: "EE",
    feedbackText:
      "صمموا لنا الموقع وطورناه أكثر من مرة معاهم، مع خدمة الاستضافة والإيميل ثابتين مع كاتكس. 15 سنة معهم فعلاً يستاهلون الثقة.",
    name: "Erdevel Europa Saudi Arabia",
    role: "ويب+استضافة+ايميل - 13 سنة",
  },
  {
    initials: "AC",
    feedbackText:
      "إحنا شركة قديمة ومتعاملين مع كاتكس من فترة طويلة، من الموقع للإيميل للاستضافة كله عندهم، وما صار عندنا مشكلة تخلينا نفكر نروح لمكان ثاني.",
    name: "Alboayz Company",
    role: "ويب+استضافة+ايميل - منذ 12 سنة",
  },
  {
    initials: "AY",
    feedbackText:
      "شركة نقليات لازم موقعها يكون شغال طول الوقت، وهذا بالضبط اللي وفروه لنا من 2013. الدعم سريع لو احتجنا شي، والإيميل الاحترافي رفع صورتنا قدام عملائنا كثير.",
    name: "Alayed Company",
    role: "استضافة+ويب+ايميل - 8 سنين",
  },
  {
    initials: "ز",
    feedbackText:
      "أول حاجة عجبتنا فيهم إنهم فهموا طبيعة شغلنا في النقل المبرد وعملولنا موقع يعرض خدماتنا صح. والاستضافة لحد دلوقتي معندناش فيها أي مشكلة، وحتى لو حصل أي استفسار بسيط بيردوا بسرعة.",
    name: "الزياد للنقل المبرد",
    role: "ويب و ايميل واستضافة - منذ 2018",
  },
];

const TrustedCustomerCard = ({ value }) => (
  <div className="trusted-customer-item">
    <div className="trusted-customer-card">
      <ul className="trusted-customer-stars">
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
        <li>
          <i className="bx bxs-star"></i>
        </li>
      </ul>

      <p className="trusted-customer-text">{value.feedbackText}</p>

      <div className="trusted-customer-author">
        <span className="trusted-customer-avatar">{value.initials}</span>
        <div>
          <h3 className="trusted-customer-name">{value.name}</h3>
          <span className="trusted-customer-role">{value.role}</span>
        </div>
      </div>
    </div>
  </div>
);

const TrustedCustomers = () => {
  const trackRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    dragState.current = {
      isDown: true,
      startX: e.pageX,
      startScroll: el.scrollLeft,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !dragState.current.isDown) return;
    const delta = e.pageX - dragState.current.startX;
    el.scrollLeft = dragState.current.startScroll - delta;
  };

  const endDrag = () => {
    dragState.current.isDown = false;
    setIsDragging(false);
  };

  return (
    <>
      <section className="trusted-customers-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>ثقة بُنيت على مدار سنوات</span>
            <h2>علاقات استمرت لعقد أو عقدين من الزمن</h2>
          </div>
        </div>

        <div className="trusted-customers-track-wrap">
          <div
            className={`trusted-customers-track${isDragging ? " is-dragging" : ""}`}
            ref={trackRef}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            {trustedCustomersData.map((value, i) => (
              <TrustedCustomerCard value={value} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedCustomers;
