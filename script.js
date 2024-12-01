let backgroundRandom=document.querySelector('.picures')
let textRandom=document.querySelector('.text')
let picturesArry=['pictures/4.jpg','pictures/3.jpg','pictures/2.jpg']
setInterval(function(changeImage){
    backgroundRandom.setAttribute('src','pictures/3.jpg')
    textRandom.style.color='#fff'
    textRandom.innerHTML='this is my page!'
},1000)