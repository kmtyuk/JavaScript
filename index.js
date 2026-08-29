let p = document.getElementById("aaaaa");
let children = p.childNodes;
while( p.hasChildNodes() ){
    p.removeChild( children.item(0) );
}