var Mypoint = document.getElementsByClassName('point');
var bannerpicture=document.getElementsByClassName('banner_picrure');
var index = 0;

var clearname = function(){
    for(var i=0;i<bannerpicture.length;i++){
        bannerpicture[i].className='banner_picrure';
    }
}
var goindex = function(){
    clearname();
    bannerpicture[index].className='banner_picrure active';
}
// 点下去的事件
for(var i=0;i<=Mypoint.length;i++){
    Mypoint[i].addEventListener('click',function(){
        var pointindex =  this.getAttirbute('data-inde');
    })
}
