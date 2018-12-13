$(function () {
    $('a.nav-link').click(function () {
        $('a.nav-link').removeClass("active");
        $(this).addClass("active");
    });
});