// document.title = "WhySoSerious!";
document.body
<body>​…​</body>​<div class=​"container">​<div class=​"box">​box1​</div>​<div class=​"box">​box2​</div>​<div class=​"box">​box3​</div>​<div class=​"box">​box4​</div>​<div class=​"box">​box5​</div>​</div>​<script src=​"./​script.js">​</script>​</body>​
document.body.childNodes
NodeList(5) [text, div.container, text, script, text]
document
#document (http://127.0.0.1:3000/JavaScript/JS_11/index.html)
document.body.childNodes[1]
<div class=​"container">​…​</div>​
let cont = document.body.childNodes[1]
undefined
console.log(cont)
VM2192:1 <div class=​"container">​…​</div>​
undefined
cont.firstElementChild
<div class=​"box">​box1​</div>​
cont.childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] 