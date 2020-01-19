//获取图片数组
var imgUrl=document.querySelectorAll(".header_img img");

var flag=1;

//定时器
setInterval(function () {
    switch (flag) {
        case 1:
            imgUrl[0].style.opacity="1";
            imgUrl[1].style.opacity="0";
            imgUrl[2].style.opacity="0";
            flag++;
            break;
        case 2:
            imgUrl[0].style.opacity="0";
            imgUrl[1].style.opacity="1";
            imgUrl[2].style.opacity="0";
            flag++;
            break;
        case 3:
            imgUrl[0].style.opacity="0";
            imgUrl[1].style.opacity="0";
            imgUrl[2].style.opacity="1";
            flag=1;
            break;
    }
},2000);


var imgs=document.querySelectorAll(".box_img img");

var flags=1;

//定时器
setInterval(function () {
    switch (flags) {
        case 1:
            imgs[0].style.opacity="1";
            imgs[1].style.opacity="0";
            imgs[2].style.opacity="0";
            flags++;
            break;
        case 2:
            imgs[0].style.opacity="0";
            imgs[1].style.opacity="1";
            imgs[2].style.opacity="0";
            flags++;
            break;
        case 3:
            imgs[0].style.opacity="0";
            imgs[1].style.opacity="0";
            imgs[2].style.opacity="1";
            flags=1;
            break;
    }
},2000);

