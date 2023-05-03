var imgAddress=['./assets/p1.jpg','./assets/p2.jpg','./assets/p3.jpg',
                './assets/p4.jpg','./assets/p5.jpg','./assets/p6.jpg','./assets/p7.jpg',
                './assets/p8.jpg','./assets/p9.jpg','./assets/p10.jpg','./assets/p11.jpg',
               ];
let img1= document.querySelector('.img-1 img');
let img2= document.querySelector('.img-2 img');
let img3= document.querySelector('.img-3 img');
var i=0;
img1.src=imgAddress[imgAddress.length-1]
img2.src=imgAddress[0];
img3.src=imgAddress[1]
function handleClick(whichOne) {
    //next
    if (whichOne==='next') {
      img2.style.transition='all 0.3s linear';
      img2.style.transform='translateX(-100%)';
      img3.style.transition='all 0.3s linear';
      img3.style.transform='translateX(0)';
      setTimeout(function (){
        img2.style.transition='all 0s linear';
        img2.style.transform='translateX(0)';
        img1.src=img2.src;
        img3.style.transition='all 0s linear';
        img3.style.transform='translateX(+100%)';
        img2.src=img3.src;
        i++;
        if (i==imgAddress.length-1) {
          i=-1;
        }
        img3.src=imgAddress[i+1];
      },1000)
     }
    //previous
    if (whichOne==='previous') {
      
    }
}