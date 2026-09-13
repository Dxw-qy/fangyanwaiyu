// 简单示例：基于小词典与规则的“演示”翻译
// 真实项目可改为：调用云翻译 API / 使用模型 / 更大的词表 / 后端处理
const dict = {
  // key: 原文（简化示例）
  "你好": { "en": "hello", "yue": "你好" },
  "早晨": { "en": "good morning", "yue": "早晨" },
  "食咗未？": { "cmn": "吃了吗？", "en": "Have you eaten?" },
  "谢谢": { "en": "thanks", "yue": "多谢" }
};

function translateText(text, from, to) {
  text = text.trim();
  if (!text) return "";
  // 精确匹配词典
  if (dict[text] && dict[text][to]) return dict[text][to];
  // 简单规则：如果 from === to，直接返回
  if (from === to) return text;
  // 未命中：返回一个占位“示例翻译”
  return `（示例翻译）${text} → [${from}→${to}]`;
}

document.getElementById("translate").addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  // 支持多行逐行翻译（示例）
  const lines = input.split(/\r?\n/).filter(Boolean);
  const out = lines.map(line => translateText(line, from, to)).join("\n");
  document.getElementById("output").textContent = out || "（无可翻译文本）";
});
