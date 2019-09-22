var sizeOfImages = document.getElementsByClassName("slide")[0].clientWidth;
var moveSlide = document.getElementsByClassName("move-slide")[0]
var hasImages = moveSlide.getElementsByTagName("img");
var maxSize = sizeOfImages * hasImages.length;
maxSize -= sizeOfImages;
var move = 0;
function nextSlide(){
    if(move < maxSize) move += sizeOfImages;
    else move = 0;
   // move += sizeOfImages;
    moveSlide.style.marginLeft = '-' + move + 'px';
}
function backSlide(){
    if(move == 0) move = maxSize;
    else
    move -= sizeOfImages;
    moveSlide.style.marginLeft = '-' + move + 'px';
}

// setInterval(function(){
//     nextSlide();
// },3000)
// lam cho slide chuyen dong cu 3s lai goi nextSlide con setTimeout thi chi chuyen dc 1 lan ( maybe I think )