const keyBoard = [
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,13,  97, 115, 100,
  102, 103, 104, 106, 107, 108, 59, 39,  122, 120, 99, 118, 98, 110, 109, 44,
  46, 47, 13
];
let textLine = '';
function init() {
  let out = '';
  for (i = 0; i < keyBoard.length; i++) {
    // i === 12 ? out +='<div class = "backspace" `${id = [i]}`>': false;
    if(i === 13 || i === 24) {
      out += '<div class = "clearfix"></div>';
    }
    out +='<div class = "k-key" id = "key'+ [i] +'" data = "'+keyBoard[i]+'">' +
     String.fromCharCode(keyBoard[i])
      + '</div>';
      
  }

  document.querySelector('#keyboard').innerHTML = out;
}
init();



// document.onkeypress = function (event) {
//    console.log(event.keyCode);
   
//    document.querySelector("#input").innerText = textLine;
//    textLine += String.fromCharCode(event.charCode)
//    document.querySelectorAll('#keyboard .k-key').forEach(element => {
//      element.classList.remove('active');
     
//      console.log(textLine)
   
  
     
//    })
//    document.querySelector('#keyboard .k-key[data = "'+event.keyCode+'"]').classList.add('active')
// }

document.querySelectorAll('#keyboard .k-key').forEach(function (element)  {
  element.onclick = function (event) {
    
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
      element.classList.remove('active');
    }) ;
    let code = this.getAttribute('data');
    textLine += String.fromCharCode(code)
    document.querySelector("#input").innerText = textLine;
    console.log(textLine)
    this.classList.add('active');

    
  }
});

button = document.getElementById("key12").onclick = backspace;  
function backspace(){
  textLine = textLine.substring(0 , textLine.length -1);
  document.querySelector("#input").innerText = textLine;
  
}




























