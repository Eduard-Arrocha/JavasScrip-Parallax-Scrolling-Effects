// HAMBURGER 
$(document).ready(function(){
    $('.icon').click(function(){
          $('.icon').toggleClass('active');
    })
})

// NAVAR-CHANGE_COLOR
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

// PARALLAX SCROLLING
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text= document.getElementById('text');
// let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function(){
      let value = window.scrollY;
      stars.style.left = value * 0.25 + 'px';
       moon.style.left = value * 0.05 + 'px';
      mountains_behind.style.top = value * 0.5 + 'px';
      mountains_front.style.top = value * 0 + 'px';
      text.style.marginRight = value * 4 + 'px';
      text.style.marginTop = value * 1.5 + 'px';
})