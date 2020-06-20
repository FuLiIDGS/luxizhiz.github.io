var itmes = document.getElementsByClassName('itme');
var points = document.getElementsByClassName('point');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');

var index = 0;/*index表示第几张图片在展示 第index图片有active这个类名*/
/*第几个点在展示*/

var clearActive = function(){
    for (var i = 0; i<itmes.length ; i++){
        itmes[i].className = 'itme';
    }
    for (var i = 0; i < points.length ; i++){
       points[i].className = 'point';
    }
}

var goIndex = function(){
    clearActive();
    itmes[index].className = 'itme active';
    points[index].className = 'point active';
}

var goNext = function(){
    if(index < 4){
        index++;
    }
    else{
        index = 0;
    }
    goIndex();
}
var goPre = function(){
    if(index==0){
        index = 4;
    }else{
        index--;
    }
    goIndex();
}

goNextBtn.addEventListener('click',function(){
    goNext();
})
goPreBtn.addEventListener('click',function(){
   goPre();
})

for(var i = 0 ; i < points.length ; i++){
   points[i].addEventListener('click',function(){
       var pointIndex = this.getAttribute('data-index');
       index = pointIndex;
       goIndex();
       time = 0;
   })
}
var time = 0;

setInterval(function(){
   time++;
   if(time ==20){
       goNext();
       time = 0;
   }
   goNext();
},3000)