let display = document.getElementById("screen");
let temp=0,num=0,res=0;
let operator = 1;
function selectOperator(){
    if(operator == 1){
        res = parseInt (res) + parseInt (num);
        num=0;
    }
    else if(operator == 2){
        res = parseInt (res) - parseInt (num);
        num=0;
    }
    else if(operator == 3){
        res = parseInt (res) * parseInt (num);
        num=0;
    }
    else if(operator == 4){
        res = parseInt (res) / parseInt (num);
        num=0;
    }
    else{
        
    }
}

document.getElementById("col2").onclick = function() {
    temp=0,num=0,res=0;
    operator=1;
    display.innerHTML = res;
}
document.getElementById("col3").onclick = function(){
    selectOperator();
    operator=4;
    display.innerHTML = res;
}
document.getElementById("col4").onclick = function(){
    selectOperator();
    operator=3;
    display.innerHTML = res;
}
document.getElementById("col5").onclick = function(){
    selectOperator();
    operator=2;
    display.innerHTML = res;
}
document.getElementById("col6").onclick = function(){
    temp=7;
    num=`${num}${temp}`;
}
document.getElementById("col7").onclick = function(){
    temp=8;
    num=`${num}${temp}`;
}
document.getElementById("col8").onclick = function(){
    temp=9;
    num=`${num}${temp}`;
}
document.getElementById("col9").onclick = function(){
    selectOperator();
    operator=1;
    display.innerHTML = res;
}
document.getElementById("col10").onclick = function(){
    temp=4;
    num=`${num}${temp}`;
}
document.getElementById("col11").onclick = function(){
    temp=5;
    num=`${num}${temp}`;
}
document.getElementById("col12").onclick = function(){
    temp=6;
    num=`${num}${temp}`;
}
document.getElementById("col13").onclick = function(){
    temp=1;
    num=`${num}${temp}`;
}
document.getElementById("col14").onclick = function(){
    temp=2;
    num=`${num}${temp}`;
}
document.getElementById("col15").onclick = function(){
    temp=3;
    num=`${num}${temp}`;
}
document.getElementById("col16").onclick = function(){
    selectOperator();
    display.innerHTML = res;
}
document.getElementById("col17").onclick = function(){
    temp=0;
    num=`${num}${temp}`;
}
document.getElementById("col18").onclick = function(){
    console.log(temp,num,res);
}
