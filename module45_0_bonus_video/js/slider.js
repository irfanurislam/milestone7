console.log('hlw');

const images = [
    'img/pic1.jpg',
    'img/pic2.jpg',
    'img/pic3.jpg',
    'img/pic4.jpg',
]











let imgCount = 0;
const imgEle = document.getElementById('slider-img');
setInterval (() =>{

    if(imgCount === images.length){
        imgCount = 0;
    }

const imgUrl = images[imgCount];
    //console.log(imgCount,imgUrl);
    imgEle.setAttribute('src',imgUrl);
    imgCount++;
    //stop()
},1000)

const stop = () =>{
    clearInterval(imgCount);
}