document.addEventListener("DOMContentLoaded", () => {
  if (typeof RoughNotation === "undefined") return;
  const { annotate } = RoughNotation;

  document.querySelectorAll("[data-rn]").forEach((el, i) => {
    const type = el.getAttribute("data-rn") || "underline";
    const color = el.getAttribute("data-rn-color") || "#FF5D73";
    const a = annotate(el, {
      type,
      color,
      strokeWidth: 2.5,
      padding: type === "circle" ? [4, 10] : 4,
      animationDuration: 700,
    });
    setTimeout(() => a.show(), 200 + i * 150);
  });
});