$('.grid-wrapper .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})
$('.news-inner .owl-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 16,
    responsiveClass: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        },
        1400: {
            items: 4,
        }
    }
})

$('.news-sponsors--carousel .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    }
})


$(document).ready(function() {
    $(".content-item").find(".item").slice(0, 6).show()
    $(".more__btn").on("click", function(e) {
        e.preventDefault();
        var test = $(this).parent().parent().find(".item:hidden")
        console.log(test)
        $(this).parent().parent().find(".item:hidden").slice(0, 3).slideDown();
        if ($(".news-tabs-content .item:hidden").length === 0) {
            $(".more__btn").text("No Content").addClass("noContent");
        }
    });
})

$(".navbar-toggler").on("click", function() {
    var test = $(".navbar-toggler").attr('aria-expanded');
    if (test === true) {
        $(".navbar-toggler-icon").addClass("test")
    } else {
        $(".navbar-toggler-icon").removeClass("test")
    }
});

$(function() {

    var targetDate = new Date(2023, 6, 30, 15, 0, 0);
    var now = new Date();
    window.days = daysBetween(now, targetDate);
    var secondsLeft = secondsDifference(now, targetDate);
    window.hours = Math.floor(secondsLeft / 60 / 60);
    secondsLeft = secondsLeft - (window.hours * 60 * 60);
    window.minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft - (window.minutes * 60);
    window.seconds = Math.floor(secondsLeft);

    startCountdown();
});
var interval;

function daysBetween(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.floor(difference_ms / one_day);
}

function secondsDifference(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    var difference = difference_ms / one_day;
    var offset = difference - Math.floor(difference);
    return offset * (60 * 60 * 24);
}



function startCountdown() {
    $('#input-container').hide();
    $('#countdown-container').show();

    displayValue('#js-days', window.days);
    displayValue('#js-hours', window.hours);
    displayValue('#js-minutes', window.minutes);
    displayValue('#js-seconds', window.seconds);

    interval = setInterval(function() {
        if (window.seconds > 0) {
            window.seconds--;
            displayValue('#js-seconds', window.seconds);
        } else {
            // Seconds is zero - check the minutes
            if (window.minutes > 0) {
                window.minutes--;
                window.seconds = 59;
                updateValues('minutes');
            } else {
                // Minutes is zero, check the hours
                if (window.hours > 0) {
                    window.hours--;
                    window.minutes = 59;
                    window.seconds = 59;
                    updateValues('hours');
                } else {
                    // Hours is zero
                    window.days--;
                    window.hours = 23;
                    window.minutes = 59;
                    window.seconds = 59;
                    updateValues('days');
                }
                // $('#js-countdown').addClass('remove');
                // $('#js-next-container').addClass('bigger');
            }
        }
    }, 1000);
}


function updateValues(context) {
    if (context === 'days') {
        displayValue('#js-days', window.days);
        displayValue('#js-hours', window.hours);
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
    } else if (context === 'hours') {
        displayValue('#js-hours', window.hours);
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
    } else if (context === 'minutes') {
        displayValue('#js-minutes', window.minutes);
        displayValue('#js-seconds', window.seconds);
    }
}

function displayValue(target, value) {
    var newDigit = $('<span></span>');
    $(newDigit).text(pad(value))
        .addClass('new');
    $(target).prepend(newDigit);
    $(target).find('.current').addClass('old').removeClass('current');
    setTimeout(function() {
        $(target).find('.old').remove();
        $(target).find('.new').addClass('current').removeClass('new');
    }, 900);
}

function pad(number) {
    return ("0" + number).slice(-2);
}
$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.media-tabs-content .content-item'),
        $tabslis = $('.media-tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.media-tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});


$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.player-tabs-content .player-item'),
        $tabslis = $('.media-tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.media-tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
        $(".content-item").eq(index).find(".item").slice(0, 6).show()
    });
});


$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.news-wrapper .news-wrapper--item'),
        $tabslis = $('.media-tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.media-tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});
$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.tournament-container .tournament'),
        $tabslis = $('.media-tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.media-tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});

$(function() {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.news-tabs-content .content-item'),
        $tabslis = $('.media-tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();
    $('.media-tabs').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});



$(document).ready(function() {
    $(".team-item").hover(
        function() {
            $(this).find(".result-box").addClass("active-box");
        },
        function() {
            $(this).find(".result-box").removeClass("active-box");
        }
    );
})
// pairings
$(document).ready(function() {
    $(".pairings-wrapper--inner .media-tabs li:first").addClass("active");
    // $(".pairings-wrapper--inner .pairings-table:first").addClass("active");

    $(".pairings-wrapper--inner .media-tabs li").click(function() {
        var tabId = $(this).children("a").attr("href");

        $(".pairings-wrapper--inner .pairings-table").removeClass("active");
        $(".pairings-wrapper--inner .media-tabs li").removeClass("active");

        $(tabId).addClass("active");
        $(this).addClass("active");
    });
});
// pairings
$(document).ready(function() {
    $('.pairings-tabs:eq(2) li:first a').addClass('active-tab');
    $('.panel:first').show();

    $('.pairings-tabs a').click(function(e) {
        e.preventDefault();

        $('.pairings-tabs a').removeClass('active-tab');
        $(this).addClass('active-tab');

        var panel = $(this).attr('href');
        var targetPanel = $(panel);
        $('.panel').hide();
        targetPanel.show();
    });
    $(".pairings-wrapper--inner .media-tabs li").click(function() {
        $('.pairings-tabs li:first-child a').addClass('active-tab');
        $('.pairings-tabs li:nth-child(2) a').removeClass('active-tab');
        $('.table-first').show();
    })
});

$(function() {

    var activeIndex = $('.calendar-tab').index(),
        $contentlis = $('.calendar-content table'),
        $tabslis = $('.calendar-tab li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.calendar-tab').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.fadeOut(500).eq(index).fadeIn(500);
    });
});



const scrollable = document.querySelector('.tournament-brackets');
const scrollableWomen = document.querySelector('.tournament-women');

const onDrag = (event) => {
    if (event.pointerType == 'mouse') {
        scrollable.scrollLeft = elementFrom - event.clientX + pointerFrom;
        scrollableWomen.scrollLeft = elementFrom - event.clientX + pointerFrom;
    }
};

scrollable.addEventListener('pointerdown', (event) => {
    if (event.pointerType == 'mouse') {
        pointerDown = true;
        pointerFrom = event.clientX;
        elementFrom = scrollable.scrollLeft;

        document.addEventListener('pointermove', onDrag);
    }
});

scrollableWomen.addEventListener('pointerdown', (event) => {
    if (event.pointerType == 'mouse') {
        pointerDown = true;
        pointerFrom = event.clientX;
        elementFrom = scrollableWomen.scrollLeft;

        document.addEventListener('pointermove', onDrag);
    }
});

document.addEventListener('pointerup', (event) => {
    if (event.pointerType == 'mouse') {
        document.removeEventListener('pointermove', onDrag);
    }
});

// players
const selectElement = document.getElementById('sample');
selectElement.addEventListener('change', function() {
    selectElement.classList.add("hide");
    selectElement.classList.add("custome-class")
});