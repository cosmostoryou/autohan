Object.assign(btn.style, {
  position: "fixed",
  bottom: "120px",
  right: "-60px",
  zIndex: "99999",
  background: "rgba(0, 0, 0, 0.75)",
  color: "#fff",
  borderRadius: "20px 0 0 20px",
  padding: "10px 14px",
  fontSize: "14px",
  cursor: "pointer",
  fontFamily: "sans-serif",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  backdropFilter: "blur(4px)",
  transition: "right 0.4s ease, opacity 0.4s ease, transform 0.4s ease",
  transform: "scale(1)",
  opacity: "0.4"
});

const hideBtn = () => {
  timeout = setTimeout(() => {
    btn.style.right = "-60px";
    btn.style.opacity = "0.4";
    btn.style.transform = "scale(1)";
  }, 5000);
};

const hoverZone = document.createElement("div");
Object.assign(hoverZone.style, {
  position: "fixed",
  top: "40%",
  right: "0",
  width: "60px",
  height: "120px",
  zIndex: "99998"
}); 