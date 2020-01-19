var left=document.querySelector(".ulLeft");

var right=document.querySelector(".ulRight");

var uls=document.querySelector(".fun_contend ul");
var go=uls.offsetLeft;
left.onmousedown=function () {
    if(go!==-870){
        go-=10;
        uls.style.left=go+"px";
    }

}

right.onmousedown=function(){
    if(go!==0){
        go+=10;
        uls.style.left=go+"px";
    }

}
