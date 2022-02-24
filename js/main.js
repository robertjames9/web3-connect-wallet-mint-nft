$(function() {

    $('.banner__crimeBar a').click(function(e) {

        e.preventDefault();
        $('.banner__crimeBar').animate({
            'left': '-1936px',
            'top': '-100px'
        }, 800);
    });

    $(".counter__increment, .counter__decrement").click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var $counter__input = $(this).parent().find(".counter__input");
        var $currentVal = parseInt($(this).parent().find(".counter__input").val());

        //Increment
        if ($currentVal != NaN && $this.hasClass('counter__increment')) {
            $counter__input.val($currentVal + 1);
        }
        //Decrement
        else if ($currentVal != NaN && $this.hasClass('counter__decrement')) {
            if ($currentVal >= 1) {
                $counter__input.val($currentVal - 1);
            }
        }
    });


    $('.card__main').click(function() {
        $('.cardVideo').trigger('pause');
        $(this).find('.cardStatic').css('visibility', 'hidden');
        $(this).find('.cardVideo').get(0).play();

    });

});


function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("15 March 2022 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);


    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");

}

setInterval(function() { makeTimer(); }, 1000);