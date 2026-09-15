const greetings = [
  "你好，Sisi 在。这一页已经能打开了。",
  "欢迎回来。先把这一屏看完，再决定下一笔写什么。",
  "打过招呼了。往下滚，结构都在「关于」里。",
];

const button = document.getElementById("greet-btn");
const output = document.getElementById("greeting");
let index = 0;

button.addEventListener("click", () => {
  output.hidden = false;
  output.textContent = greetings[index % greetings.length];
  index += 1;
});
