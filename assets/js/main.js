var img = document.querySelector('.booking__book-now-img');
var menuItemBtn = document.querySelector('.header__menu');
var menuItem = document.querySelector('.menu-item');
var closeBtn = document.querySelector('.menu-item-header-icon')
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

function repeat(){
    sleep(3000)
        .then(function(){
            img.src = "./assets/img/package-3.jpg";
            return sleep(3000);
        })
        .then(function(){
            img.src = "./assets/img/parallax-4.jpg";
            return sleep(3000);
        })
        .then(function(){
            img.src = "./assets/img/parallax-4-1.jpg";
            return repeat();
        })
}
repeat()

menuItemBtn.addEventListener('click', function(){
    menuItem.classList.add('animation');
})

closeBtn.addEventListener('click', function(){
    menuItem.classList.remove('animation');
})