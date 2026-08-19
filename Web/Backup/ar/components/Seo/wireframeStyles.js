// Shared inline styles for the "gray box" structure pass on the SEO page.
// Temporary by design — deleted section-by-section once real UI design
// starts, same approach used for the Emails and App Development wireframes.

export const box = {
  background: "#e5e7eb",
  border: "1px dashed #9ca3af",
  borderRadius: 8,
  color: "#6b7280",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: 14,
  fontWeight: 500,
};

export const line = {
  background: "#d1d5db",
  borderRadius: 4,
  height: 10,
};

export const sectionTitle = (label) => ({
  ...box,
  height: 44,
  width: 280,
  margin: "0 auto 40px",
});

// Flags a block whose real content must come from the client, so the
// placeholder can't quietly ship as if it were finished copy.
export const needsData = {
  ...box,
  background: "#fef3c7",
  borderColor: "#d97706",
  color: "#92400e",
};
