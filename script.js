const keyBoard = [
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 13, 97, 115, 100,
  102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46,
  47, 32,
];
const inputText = document.getElementById("id");
let textLine = "";
let out = "";
// function draw the keyboard
function init() {
  for (i = 0; i < keyBoard.length; i++) {
    if (i === 13 || i === 24 || i === 34) {
      out += '<div class = "clearfix"></div>';
    }
    out +=
      '<div class = "k-key" id = "key' +
      [i] +
      '" data = "' +
      keyBoard[i] +
      '">' +
      String.fromCharCode(keyBoard[i]) +
      "</div>";
  }

  document.querySelector("#keyboard").innerHTML = out;
}
init();

document.querySelectorAll("#keyboard .k-key").forEach(function (element) {
  element.onclick = function (event) {
    textLine += String.fromCharCode(this.getAttribute("data"));
    inputText.value = textLine;
  };
});

// backspace initialization
const backspace = document.getElementById("key12");
backspace.onclick = backspaceDelete;
backspace.innerHTML = "BackSpace";

// space initialization
const space = document.getElementById("key34");
space.onclick = addSpace;
space.innerHTML = "Space";

// function add backspace in input
function backspaceDelete() {
  textLine = textLine.substring(0, textLine.length - 1);
  inputText.value = textLine;
}
// function add space in input
function addSpace() {
  textLine += " ";
}
