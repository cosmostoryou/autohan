
(function () {
  function insertRestoreButton() {
    const nav = document.querySelector(".header-menu");
    if (!nav || document.getElementById("langRestoreBtn")) return;

    const btn = document.createElement("button");
    btn.id = "langRestoreBtn";
    btn.innerText = "🌐"; // 地球 icon
    Object.assign(btn.style, {
      marginLeft: "16px",
      background: "transparent",
      color: "#333",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "6px 10px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "all 0.2s ease"
    });
    btn.title = "顯示語言切換按鈕";
    btn.onclick = () => {
      localStorage.removeItem("lang_btn_closed");
      location.reload();
    };

    // 插入到導航列靠右（最後第二個位置）
    if (nav.children.length >= 2) {
      nav.insertBefore(btn, nav.children[nav.children.length - 1]);
    } else {
      nav.appendChild(btn);
    }
  }

  document.addEventListener("DOMContentLoaded", insertRestoreButton);
})();
