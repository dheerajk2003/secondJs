itemNum = 1;
let list = document.getElementById("list");
let inputBox = document.getElementById("text");
let liSyntaxfirst = `<li class='items' id='item${itemNum}'>`;
let liSyntaxsecond = "</li>";
let content1;
// list.innerHTML = list.innerHTML + `${liSyntaxfirst} ${content1} ${liSyntaxsecond}`;
// content1 = "this is second";
// list.innerHTML = list.innerHTML + `${liSyntaxfirst} ${content1} ${liSyntaxsecond}`;
document.getElementById("btn").onclick = function (){
    getValue();
}
getValue();
function getValue() {
    content1 = inputBox.value;
    setValue();
    content1 = inputBox.value="";
}
function setValue() {
    list.innerHTML = list.innerHTML + `${liSyntaxfirst} ${content1} ${liSyntaxsecond}`;
    itemNum++;
}
document.getElementById("item2").style.color = "blue";