//로고
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() { 
    let image = document.getElementById("rotate");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }

window.addEventListener("scroll", scrollRotate);

//애니메이션
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY)
// });

// $(window).scroll(function (){
// var ws = $(this).scrollTop();

// var logo = $('.name_U').offset().top;
// if (ws > logo - 2) {
//     $('.name_U').css("transform", "translateY(0px)").css("opacity", "1");
// }    
// })

//메인페이지 애니메이션
document.addEventListener('DOMContentLoaded', () => {

    const urim = document.querySelector('.urim');
    setTimeout(() => {
      urim.style.opacity = '1';
      urim.style.transform = 'translateY(0)';

      create_main_ani(urim);
    }, 500);

    const b_txt = document.querySelector('.bottom_txt');
    setTimeout(() => {
      b_txt.style.opacity = '1';
      b_txt.style.transform = 'translateY(0)';

      create_bottom_text(b_txt);
    }, 700);
  
  });



//프로필
$('.tit').click(function () {
    $(this).toggleClass('active')  
    $(this).siblings('.tit').removeClass('active')
 });

