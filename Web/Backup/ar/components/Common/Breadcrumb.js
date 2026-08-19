import React from "react";
import Link from "next/link";

// items: [{ label, href, icon }] — last item (no href) renders as the
// current page. `icon` is an optional Boxicons class, e.g. "bx bx-home-alt".
const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="katx-breadcrumb" aria-label="breadcrumb">
      <div className="container">
        <ul className="katx-breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                className={`katx-breadcrumb-item ${
                  isLast ? "active" : ""
                } ${!isLast ? "has-sep" : ""}`}
                key={item.label}
              >
                {isLast || !item.href ? (
                  <span>
                    {item.icon && <i className={item.icon}></i>}
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href}>
                    {item.icon && <i className={item.icon}></i>}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
