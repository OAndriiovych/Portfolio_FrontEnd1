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

    $(' .forheadr h1,  .forheadr h2').css('color', '#333');

    //E-mail Ajax Send
    $("form.callback").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                // Done Functions
                $(th).find('.succes').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });


});