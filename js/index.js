//로고
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() { 
    let image = document.getElementById("rotate");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }

window.addEventListener("scroll", scrollRotate);

//프로필
$('.tit').click(function () {
    $(this).toggleClass('active')
    $(this).siblings('.tit').removeClass('active')
 });



