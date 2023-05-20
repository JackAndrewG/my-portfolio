const codeContainer = document.getElementById('code-container');
const language = {
  javascript: `function greet() {
    console.log('Hello JavaScript!');
  }`,
  python: `greet() {
    print('Hello Python!')
  }`
};

let index = 0;
let currentCode = language.javascript;
function writeCode() {
  codeContainer.innerHTML = currentCode.slice(0, index)
    .replace(/function/g, '<span class="function-keyword">function</span>')
    .replace(/(\(|\))/g, '<span class="parentheses">$1</span>')
    .replace(/(\{|})/g, '<span class="curly-braces">$1</span>')
    .replace(/console/g, '<span class="console-keyword">console</span>')
    .replace(/log/g, '<span class="log-keyword">log</span>')
    .replace(/print/g, '<span class="log-keyword">print</span>');

  index++;

  if (index <= currentCode.length) {
    setTimeout(writeCode, 50);
  } else {
    if (currentCode === language.javascript) {
      currentCode = language.python;
      index = 0;
      setTimeout(writeCode, 5000);
    } else if (currentCode === language.python) {
      currentCode = language.javascript;
      index = 0;
      setTimeout(writeCode, 5000);
    }
  }
}

writeCode();