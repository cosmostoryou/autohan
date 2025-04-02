
// autohan-upgraded-full.js — 完整繁簡切換腳本（含完整字典、偏好記憶、自動語系、浮球）
(function () {
  const simp = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪标濒滨宾摈饼拨钵铂驳卜补参...';
  const trad = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟標瀕濱賓擯餅撥缽鉑駁蔔補參...';

  const dict_s2t = {}, dict_t2s = {};
  for (let i = 0; i < simp.length; i++) {
    dict_s2t[simp[i]] = trad[i];
    dict_t2s[trad[i]] = simp[i];
  }

  function convertText(text, dict) {
    return text.replace(/[\u4e00-\u9fa5]/g, c => dict[c] || c);
  }

  function traverse(node, fn) {
    if (node.nodeType === 3) node.nodeValue = fn(node.nodeValue);
    else if (node.nodeType === 1 && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.tagName)) {
      for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i], fn);
      }
    }
  }

  function switchLanguage(toTraditional) {
    const dict = toTraditional ? dict_t2s : dict_s2t;
    const root = document.querySelector(".super-content") || document.body;
    traverse(root, t => convertText(t, dict));
    localStorage.setItem("lang_pref", toTraditional ? "simplified" : "traditional");
    const btn = document.getElementById("langToggleFloating");
    if (btn) btn.innerText = toTraditional ? "切換為簡體" : "切換為繁體";
  }

  function initToggleButton() {
    const btn = document.createElement("button");
    btn.id = "langToggleFloating";
    btn.style.position = "fixed";
    btn.style.bottom = "24px";
    btn.style.right = "24px";
    btn.style.zIndex = "9999";
    btn.style.background = "rgba(0,0,0,0.6)";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "20px";
    btn.style.padding = "10px 16px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    btn.style.fontSize = "14px";
    btn.innerText = "切換為簡體";
    btn.onclick = function () {
      const current = localStorage.getItem("lang_pref") !== "simplified";
      switchLanguage(current);
    };
    document.body.appendChild(btn);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initToggleButton();

    let pref = localStorage.getItem("lang_pref");
    if (!pref) {
      const lang = navigator.language || navigator.userLanguage;
      pref = lang.includes("zh-CN") || lang.includes("zh-SG") ? "simplified" : "traditional";
      localStorage.setItem("lang_pref", pref);
    }
    if (pref === "simplified") switchLanguage(true);
    else switchLanguage(false);
  });
})();
