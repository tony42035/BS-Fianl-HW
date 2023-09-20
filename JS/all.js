$(document).ready(function () {

    $('.active-hover').hover(function () {
            $(this).siblings('.card-gardient-link').addClass('active');
            $(this).parent().addClass('shadow-lg');
            $(this).removeClass('text-secondary');
        }, function () {
            $(this).siblings('.card-gardient-link').removeClass('active');
            $(this).parent().removeClass('shadow-lg');
            $(this).addClass('text-secondary');

        }
    );


});