import { Q_Array, A_Array, Q1 } from "./questions.mjs";

/** Two ways to print ----START----*/
const printInnerHtml = "print using innerHtml";
const printInnerText = "print using innerText";

const print1 = document.getElementById("print1");
if (print1) {
  print1.innerHTML = `
        <h1>Ways to Print</h1>
        <ol>
            <li>${printInnerHtml}</li>
            <li id="print2"></li>
        </ol>
    `;
  document.getElementById("print2").innerText = printInnerText;
}
/** Two ways to print ----END---- */

/** Dynamically adding multiple elements ----START---- */
let startNode = document.getElementById("QuestionHeader");

// 1. Create the grid container
const cardsContainer = document.createElement("div");
cardsContainer.id = "cards_container";
startNode.after(cardsContainer);

function createEle() {
  Q_Array.forEach((ele, i) => {
    let div = document.createElement("div");
    div.className = "Q_wrapper";

    div.innerHTML = `
        <div class="card_inner">
            <div class="Q_row">
                <label class="questNo"> Q${i + 1}. </label>
                <p class="questions">${Q_Array[i]}</p>
            </div>
            <div class="A_row">
                <pre><code class="answers language-javascript">${A_Array[i]}</code></pre>
            </div>
        </div>
    `;

    div.addEventListener("click", () => {
      // runs for respective card flip
      div.classList.toggle("flip");
      // run only for Question 1 (index 0)
      if (i === 0 && div.classList.contains("flip")) {
        Q1();
      }
    });
    // 2. Append to the grid container
    cardsContainer.appendChild(div);
  });
}

createEle();

if (window.Prism) {
  Prism.highlightAll();
}
