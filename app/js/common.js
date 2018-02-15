$(function () {});
$(document).ready(function () {
    var ui = '65%',
        web = '90%',
        mark = '65%';

    $('#ui').html(ui);
    $('#pui').css('width', ui);

    $('#web').html(web);
    $('#pweb').css('width', web);

    $('#mark').html(mark);
    $('#pmark').css('width', mark);

    $('.psyProgressBar i').css('color', '#333');


});