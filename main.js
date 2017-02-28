var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
    for(var i=1;i<=5;i++) {
        var newImage = document.createElement('img');

        newImage.setAttribute('src', './images/pic' + i.toString() + '.jpg');
        newImage.setAttribute('placeholder', './images/pic' + i.toString() + '.jpg');
        thumbBar.appendChild(newImage);
    }
    var img = thumbBar.querySelectorAll('img');
    for(var i=0;i<img.length;i++){
        img[i].addEventListener('click',function(e){
            displayedImage.src = e.target.src;
        })
    }
/* Wiring up the Darken/Lighten button */
    btn.addEventListener('click',function(e){
        if(e.target.getAttribute('class')=='dark'){
            e.target.setAttribute('class','light');
            overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
            e.target.textContent = 'Lighten';
        }
        else {
            e.target.setAttribute('class','dark');
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
            e.target.textContent = 'Darken';
        }
    });
nextPic();
function nextPic(){
    var number = ((Number(displayedImage.src[displayedImage.src.length-5]))%5)+1;
    console.log(number);
    var new_src = './images/pic' + number.toString() + '.jpg';
    displayedImage.src = new_src;
    setTimeout(nextPic,2000);

}

