//로고
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() { 
    let image = document.getElementById("rotate");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
window.addEventListener("scroll", scrollRotate);


//메인페이지 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const name_U = document.querySelector('.name_U');
    setTimeout(() => {
      name_U.style.opacity = '1';
      name_U.style.transform = 'translateY(0)';
      create_main_ani(name_U);
    }, 100);

    const name_R = document.querySelector('.name_R');
    setTimeout(() => {
      name_R.style.opacity = '1';
      name_R.style.transform = 'translateY(0)';
      create_main_ani(name_R);
    }, 200);

    const name_I = document.querySelector('.name_I');
    setTimeout(() => {
      name_I.style.opacity = '1';
      name_I.style.transform = 'translateY(0)';
      create_main_ani(name_I);
    }, 300);

    const name_M = document.querySelector('.name_M');
    setTimeout(() => {
      name_M.style.opacity = '1';
      name_M.style.transform = 'translateY(0)';
      create_main_ani(name_M);
    }, 400);

    const t_txt = document.querySelector('.top_text');
    setTimeout(() => {
      t_txt.style.opacity = '1';
      t_txt.style.transform = 'translateY(0)';
      create_bottom_text(t_txt);
    }, 400);

    const b_txt = document.querySelector('.bottom_txt');
    setTimeout(() => {
      b_txt.style.opacity = '1';
      b_txt.style.transform = 'translateY(0)';
      create_bottom_text(b_txt);
    }, 500);
  
  });


//애니메이션
$(window).scroll(function (){
var ws = $(this).scrollTop();
var motto = $('.motto').offset().top;
if (ws > 350) {
    $('.motto').css("transform", "translateY(0px)").css("opacity", "1");
}
});


//프로필
$('.tit').click(function () {
    $(this).toggleClass('active')  
    $(this).siblings('.tit').removeClass('active')
 });


//프로젝트
document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX + 10; 

  let cursor_t = document.querySelector('.cursor_t');
  cursor_t.style.left = mouseX + 'px';
  let cursor_m = document.querySelector('.cursor_m');
  cursor_m.style.left = mouseX + 'px';
  let cursor_w = document.querySelector('.cursor_w');
  cursor_w.style.left = mouseX + 'px';
  let cursor_a = document.querySelector('.cursor_a');
  cursor_a.style.left = mouseX + 'px';
  let cursor_j = document.querySelector('.cursor_j');
  cursor_j.style.left = mouseX + 'px';
});


//푸터
$(window).scroll(function () {
  var move = $(this).scrollTop();

  if(move < 2000){
    $('.f_contact, .copy').css("transform","translateY(100px)").css("opacity","0");
    $('.foot').css("transform", "translateY(200px)").css("opacity", "0");
    $('.foot span').css("transform","translateY(100px)").css("opacity","0");
  }

  if(move > 2000){
    $('.f_contact, .copy').css("transform","translateY(0px)").css("opacity","1");
    $('.foot').css("transform","translateY(0px)").css("opacity","1");
    $('.foot span').css("transform","translateY(0px)").css("opacity","1");
  }
});
