//随机生成数字
function randomInt(num=0) {
  return Math.floor(Math.random()*(num+1));
}

//随机生成rgb
function rgb() {
    var r=randomInt(255);
    var g=randomInt(255);
    var b=randomInt(255);
    return "rgb("+r+","+g+","+b+")";
}