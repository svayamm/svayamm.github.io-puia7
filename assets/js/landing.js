$(document).ready(function () {
    $(".play").hover(function () {
        // on hover, load (change src to) animated image
        $('#plink').attr("src", "assets/images/playlogo_animated.svg");
    }, function () { // back to static image if focus lost
        $('#plink').attr("src", "assets/images/playlogo.svg");
    });

    $(".work").hover(function () { // same here
        $('#wlink').attr("src", "assets/images/worklogo_animated.svg");
    }, function () {
        $('#wlink').attr("src", "assets/images/worklogo.svg");
    });

    $(".play").click(function (e) {
        // prevent destination page from loading immediately upon click
        e.preventDefault();
        var refr = $(this).attr('href'); // linked page

        // content gradually fade out in transition to other page
        $('#wlink').fadeTo(320, 0);
        $('a:last-child').fadeTo(3200, 0);
        $('a:first-child').css("background", "#fcfcfc");
        $('a').fadeTo(6400, 0);
        setTimeout(function () {
            // loads destination page
            window.location.assign(refr);
        }, 6500);
    });

    $(".work").click(function (e) { // works in similar manner to above
        e.preventDefault();
        var refr = $(this).attr('href');
        $('#plink').fadeTo(320, 0);
        $('a:first-child').css({
            transition: 'background-color 3s ease-in-out',
            "background-color": '#212121'
        });
        $('a').fadeTo(6400, 0);
        setTimeout(function () {
            window.location.assign(refr);
        }, 6500);
    });
});