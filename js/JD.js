var title=document.querySelectorAll(".til>ul>li");
var ul=document.querySelectorAll(".box_right ul");
console.log(ul);
title.forEach(function (titles) {
    titles.onclick=function () {
        title.forEach(function (value) {
            value.style.color="";

        })
        titles.style.color="red";
        ul.forEach(function (values) {
            values.style.display="none";
        })
        // console.log(titles.value);
        // console.dir(ul[titles.value].style.display);
        ul[titles.value].style.display="block";
    }
})
