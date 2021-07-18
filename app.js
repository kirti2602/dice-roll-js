//for left image
let image1 = document.getElementById('image1')
let imageL = Math.floor(Math.random()*6+1);
let imageSourceL = 'images/dice'+ imageL + '.svg';

//for right image
let image2 = document.getElementById('image2');
let imageR = Math.floor(Math.random()*6+1);
let imageSourceR = 'images/dice' + imageR + '.svg';

//setting src attribute to any of the 6 images
image1.setAttribute('src', imageSourceL);
image2.setAttribute('src', imageSourceR);

if(imageL > imageR){
    document.getElementsByTagName('h1')[0].innerHTML = '🎊 Player 1 Wins 🎊'
}

else if(imageR > imageL){
    document.getElementsByTagName('h1')[0].innerHTML = '🎊 Player 2 Wins 🎊'
}

else{
    document.getElementsByTagName('h1')[0].innerHTML = '❌ Draw ❌'
}


let btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', function(){
    location.reload();
})

