$(window).scroll(function () {
    var move = $(this).scrollTop();

    if (move < 2000) {
        $('.f_contact').css("transform", "translateY(100px)").css("opacity", "0");
        $('.foot').css("transform", "translateY(200px)").css("opacity", "0");
        $('.foot span').css("transform", "translateY(100px)").css("opacity", "0");
    }

    if (move > 2000) {
        $('.f_contact').css("transform", "translateY(0px)").css("opacity", "1");
        $('.foot').css("transform", "translateY(0px)").css("opacity", "1");
        $('.foot span').css("transform", "translateY(0px)").css("opacity", "1");
    }
});