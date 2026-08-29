let p = document.getElementById("aaaaa");
let children = p.childNodes;
let textnode = children.item(0);	
console.log(textnode.nodeValue);
textnode.nodeValue = "書き換えました";