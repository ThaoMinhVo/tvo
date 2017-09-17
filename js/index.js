$(document).ready(function(){
    //new Vivus('tsvg', {duration: 200});
    //var hi = new Vivus('tsvg', {type: 'scenario-sync', duration: 200, start: 'autostart', forceRender: false, dashGap: 20}, function () {});
    
    //var svg = new Walkway({
    //    selector: 'tsvg',
    //    duration: 8000
    //}).draw();
    
    var obtT = new Vivus('tsvg', {type: 'sync', duration: 300});
    var obtH = new Vivus('hsvg', {type: 'sync', duration: 300});
    var obtA = new Vivus('asvg', {type: 'sync', duration: 300});
    var obtO = new Vivus('osvg', {type: 'sync', duration: 300});
    var obtV = new Vivus('vsvg', {type: 'sync', duration: 300});
    var obtO_last = new Vivus('osvg_last', {type: 'sync', duration: 300});
    
    
    
    obtO.play(function() {
        // called after the animation completes
        setTimeout(introAnimation, 500);
    });
});

function introAnimation(){
    expandName();
    
    //setTimeout(collapseName, 1000);
}

function expandName(){
    $('#T').velocity({
        left: '-=350px',
        top: '-=100px'
    });
    $('#H').velocity({
        left: '-=200px',
        top: '-=100px'
    });
    $('#A').velocity({
        left: '-=120px',
        top: '-=100px'
    });
    $('#O').velocity({
        //left: '-=00px',
        top: '-=100px'
    });
    $('#V').velocity({
        left: '+=200px',
        top: '-=100px'
    });
    $('#O_last').velocity({
        left: '+=335px',
        top: '-=100px'
    });
}

function collapseName(){
    $('#T').animate({
        left: '+=400px',
        top: '+=100px'
    });
    $('#H').animate({
        left: '+=250px',
        top: '+=100px'
    });
    $('#A').animate({
        left: '+=170px',
        top: '+=100px'
    });
    $('#O').animate({
        left: '+=50px',
        top: '+=100px'
    });
    $('#V').animate({
        left: '-=250px',
        top: '+=100px'
    });
    $('#O_last').animate({
        left: '-=385px',
        top: '+=100px'
    });
}

/******************************************************************************/
/* 3D ANIMATION */
/******************************************************************************/

/**************************************/
/* SETUP */
/**************************************/

//The userAgent property returns the value of the user-agent header sent by the browser to the server.
//The value returned, contains information about the name, version and platform of the browser.
var isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = !!("ontouchstart" in window),
    isAndroid = /Android/i.test(navigator.userAgent);

//fn = prototype
$.fn.velocity.defaults.easing = 'easeInOutSine';

/*Randomly generate an integer between two numbers.*/
function r(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**************************************/
/* DOT CREATION */
/**************************************/

/*Differentiate dot counts based on roughly-questimated device and browser capabilities.*/
var dotsCount = isMobile ? (isAndroid ? 40 : 70) : (isChrome ?  200 : 125),
    dotsHtml = '',
    $count = $('#count'),
    $dots;

for(var i = 0; i < dotsCount; i++){
    dotsHtml += '<div class="dot"></div>';
}

$dots = $(dotsHtml);
console.log($count);
$count.html(dotsCount);

/**************************************/
/* ANIMATION */
/**************************************/

var $container = $('#dotsContainer');

var screenWidth = window.screen.availWidth,
    screenHeight = window.screen.availHeight,
    chromeHeight = screenHeight - document.documentElement.clientHeight;

var translateZMin = -725,
    translateZMax = 600;

console.log('screenWidth: ' + screenWidth/2);
console.log('screenHeight: ' +((screenHeight * 0.45) - chromeHeight));

$container
    .css('perspective-origin', screenWidth/2 + 'px ' + ((screenHeight * 0.45) - chromeHeight) + 'px')
    .velocity({
        perspective: [215,50],
        rotateZ: [5,0],
        opacity: [0.85,0.55]
    },{duration:800, delay:3250, loop: 2});

$dots
    .velocity({
        translateX: [
            function () {return '+=' + r(-screenWidth/2.5, screenWidth/2.5)},
            function () {return r(0, screenWidth)}
        ],
        translateY: [
            function () {return '+=' + r(-screenHeight/2.75, screenHeight/2.75)},
            function () {return r(0, screenHeight)}
        ],
        translateZ: [
            function () {return '+=' + r(translateZMin, translateZMax)},
            function () {return r(translateZMin, translateZMax)}
        ],
        opacity: [
            function () {return Math.random()},
            function () {return Math.random() + 0.1}
        ]
    },{duration: 10000})
    .velocity('reverse', {easting: "easeOutQuad"})
    .appendTo($container);