var box=document.querySelector(".jingdu_contend");

var ul=document.querySelector(".jingdu_contend ul");
 var ulLeft=ul.offsetLeft;
 var td=document.querySelector(".jingdu_tuo")
 var tdLeft=td.offsetLeft;
box.onmousewheel=function (ev) {
    ev=ev || window.event;
    // console.log(ev.wheelDelta);

     if(ev.wheelDelta>0){
         // console.log("上面")
         if(ulLeft!==0){
             ulLeft+=10;
             // console.log(ulLeft);
             ul.style.left=ulLeft+"px";

             tdLeft-=10;
             td.style.left=tdLeft+"px";
         }
     }else if(ev.wheelDelta<0){ //滚轮向下
         // console.log("下面")
         if(ulLeft!==-640){
             ulLeft-=10;
             ul.style.left=ulLeft+"px";
             // console.log(ulLeft);
             tdLeft+=10;
             td.style.left=tdLeft+"px";
         }

     }
}

