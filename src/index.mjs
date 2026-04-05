import "./styles.css";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import { Q_Array, A_Array } from "./questions.mjs";

const printInnerHtml = "print using innerHtml";
const printInnerText = "print using innerText";

document.getElementById("print1").innerHTML = `
    <h1>Ways to Print</h1>
    <ol>
        <li>
            ${printInnerHtml}
        </li>
        <li id="print2">
        </li>
    </ol>
`;

document.getElementById("print2").innerText = printInnerText;

let startNode = document.getElementById("QuestionHeader");

function createEle() {
  Q_Array.forEach((ele, i) => {
    let div = document.createElement("div");
    div.className = "Q_wrapper";
    div.id = `Q_wrapper${Q_Array.length - i}`;

    startNode.after(div);
  });
}
createEle();

document.querySelectorAll(".Q_wrapper").forEach((wrapper, i) => {
  wrapper.innerHTML = `
      <div class="Q_row">
        <label class="questNo"> Q${i + 1}. </label>
        <p class="questions">${Q_Array[i]}</p>
      </div>
      <div class="A_row">
        <pre><code class="answers language-javascript">${
          A_Array[i]
        }</code></pre>
      </div>
`;
});
Prism.highlightAll();
