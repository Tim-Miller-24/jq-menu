$('.show_hide-menu').click(function(e) {
    e.preventDefault();

    $(this).toggleClass('view')

    if ($(this).hasClass('view')) {
        $('.menu').animate({left: "0"},1000)

        $('i.fa.fa-sign-in').css({transform: 'scaleX(-1)'})
    } else {
        $('.menu').animate({left: "-300px"},1000)
        $('i.fa.fa-sign-in').css({transform: 'scaleX(1)'})
    }
})