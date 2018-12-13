$(function () {
    $('.nav-link').on('click', function () {
        $('.active-content').removeClass('active-content').addClass('inactive-content');

        var active = $(this).attr('href');
        $(active).removeClass('inactive-content').addClass('active-content');
    });

});