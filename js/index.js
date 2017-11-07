//global variables

/*STATES
1 = about
2 = skills
3 = work
*/
var state, done, down, animate;

$(document).ready(function(){
    state = 1;
    done = true;
    down = false;
    animate = true;
    
    $('#up').hide();
    $('#down').hide()
    $('#l-one').hide();
    $('#r-one').hide()
    $('#l-two').hide();
    $('#r-two').hide();
    $('#l-three').hide();
    $('#r-three').hide();
    
    
    var obtT = new Vivus('tsvg', {type: 'sync', duration: 100}),
        obtH = new Vivus('hsvg', {type: 'sync', duration: 100}),
        obtA = new Vivus('asvg', {type: 'sync', duration: 100}),
        obtO = new Vivus('osvg', {type: 'sync', duration: 100}),
        obtV = new Vivus('vsvg', {type: 'sync', duration: 100}),
        obtO_last = new Vivus('osvg_last', {type: 'sync', duration: 100});
    
    //called after the animation completes
    obtO.play(function() {introAnimation();});

    //introAnimation();
    checkScroll();
});

//halts all animation and get to main webpage
function skipAnimation(){
    $(".velocity-animating").velocity("stop", true);
    animate = false;
    $('.animationOverlay').velocity("fadeOut",{ duration: 1500 });
    setTimeout(function(){showOne();}, 1000);
}

//timeline of animation calls
function introAnimation(){
    //without function() the timmer doesn't work
    setTimeout(expandName, 500);
    setTimeout(function(){activateTypewriter('typeDeveloper','typeDeveloper', 'span', 2000);}, 1000);
    setTimeout(activateDesignerText, 4000);
    //setTimeout(activateFloral, 3000);
    //setTimeout(activateFloralColors, 4000);
    //setTimeout(function(){$('#floralOutline').velocity("fadeOut", { duration: 1500 });}, 4500);
    setTimeout(function(){$('#floralColors').velocity("fadeOut",{ duration: 1500 }); $('#typeDeveloper').velocity("fadeOut",{ duration: 1500 });}, 6500);
    setTimeout(function(){$('#designerText').velocity("fadeOut", { duration: 1500 });}, 6500);
    setTimeout(collapseName, 8000);
    setTimeout(translateLogo, 8000);
    setTimeout(function(){$('.animationOverlay').velocity("fadeOut",{ duration: 1500 });}, 9000);
    setTimeout(function(){if(animate){showOne();}}, 9500);
    //$('.animationOverlay').hide();
}

function expandName(){
    if(animate){
        $('#T').velocity({
        left: '-=260px'
        });
        $('#H').velocity({
            left: '-=150px'
        });
        $('#A').velocity({
            left: '-=85px'
        });
        $('#O').velocity({
            left: '+=10px'
        });
        $('#V').velocity({
            left: '+=150px'
        });
        $('#O_last').velocity({
            left: '+=255px'
        });
    }
}

function collapseName(){
    if(animate){
        $('#T').velocity({
            left: '+=260px',
            top: '+=50px'
        });
        $('#H').velocity({
            left: '+=150px',
            top: '+=50px'
        });
        $('#A').velocity({
            left: '+=85px',
            top: '+=50px'
        });
        $('#O').velocity({
            left: '-=10px',
            top: '+=50px'
        });
        $('#V').velocity({
            left: '-=150px',
            top: '+=50px'
        });
        $('#O_last').velocity({
            left: '-=255px',
            top: '+=50px'
        });
    }
}

/*used to activate all typewriting text on page and delete blink-caret at end of animation
idName  - id of container element of text to animate
className  - class to add to container element
textElement - element of text (span,div,h1, etc)
time - duration of animation in milliseconds so know when to stop blink-caret*/
function activateTypewriter(idName, className, textElement, time){
    if(animate){
        $('#'+idName).addClass(className);
    setTimeout(function(){$('.'+ className + ' ' + textElement).css('border-right', 'none');}, (time+500));
    }
}

/*Designer Text Outline*/
function activateDesignerText(){
    if(animate){
        $('#designerText').show();
        var floralOutline = new Vivus('designerText', {type: 'oneByOne', duration: 100});
    }
}

/*Floral Outline*/
function activateFloral(){
    if(animate){
        $('#floralOutline').show();
        var floralOutline = new Vivus('floralOutline', {type: 'sync', duration: 100});
    }
}

function activateFloralColors(){
    if(animate){
        $('#floralColors').show();
        $('#floralColors').velocity("fadeIn", { duration: 1500 });
    }
}

/*Moves logo to the top left hand corner*/
function translateLogo(){
    //if screen is bigger than 1200
    if(animate){
       $('.object').velocity({
            left: '106px',
            top: '90px',
            width: '70px'
        });
    }
}

/***********************************************
 NAVIGATION JUMP
 ***********************************************/
function navTo(newState){
    if(state != newState){
        switch (state){
            case 1:
                hideOne();
                break;
            case 2:
                hideTwo();
                break;
            case 3:
                hideThree();
                break;
        }
         switch (newState){
            case 1:
                showOne();
                break;
            case 2:
                showTwo();
                break;
            case 3:
                showThree();
                break;
        }
    }
    
    state = newState;
}


/***********************************************
 AFTER ALL ANIMATION AND SITE IS READY TO READ 
 ***********************************************/


// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


// Firefox or IE 11
if(isFirefox || isIE) {
    var lastScrollTop = 0;
        $(document).unbind('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function(evt) {
            var delta = evt.detail < 0 || evt.wheelDelta > 0 ? 1 : -1;

            if (delta < 0) {
                if(done){
                    console.log('Down');
                    done = false;
                    down = true;
                    checkScroll();
                }
                
            } else {
                if(done){
                    console.log('Up');
                    done = false;
                    down = false;
                    checkScroll();
                }
            }
        });
}
// Other browsers
else {
    $('body').on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            if(done){
                console.log('Down Other');
                done = false;
                down = true;
                checkScroll();
            }
        }
        else if(e.originalEvent.wheelDelta > 0) {
            if(done){
                console.log('Up Other');
                done = false;
                down = false;
                checkScroll();
            }
        }
    });
}

function checkScroll(){
    //setInterval(function(){
        if (down === true) {
            console.log('Down');
            down = null;
            if (state != 3) {
                switch (state){
                case 1:
                    hideOne();
                    showTwo();
                    break;
                case 2:
                    hideTwo();
                    showThree();
                    break;
                }
                state += 1;
                console.log(state);
            }
            setTimeout(function(){
                done = true;
            }, 2000);
        } else if (down === false){
            console.log('Up');
            down = null;
            if (state != 1) {
                switch (state){
                case 2:
                    hideTwo();
                    showOne();
                    break;
                case 3:
                    hideThree();
                    showTwo();
                    break;
                }
                state -= 1;
                console.log(state);
            }
            setTimeout(function(){
                done = true;
            }, 2000);
        }
    //},2000);
}

function hideOne(){
    $('#l-one').removeClass('fadeInDownBig');
    $('#l-one').addClass('fadeOutDownBig');
    $('#r-one').removeClass('fadeInUpBig');
    $('#r-one').addClass('fadeOutUpBig');
    
    $('#navOne').removeClass('active');
    
    setTimeout(function(){
        $('#l-one').hide();
        $('#r-one').hide();
    }, 500);
}

function showOne(){
    $('#l-one').removeClass('fadeOutDownBig');
    $('#l-one').addClass('fadeInDownBig');
    $('#r-one').removeClass('fadeOutUpBig');
    $('#r-one').addClass('fadeInUpBig');
    
    $('#navOne').addClass('active');
    
    $('#up').hide();
    $('#down').show();
    
    setTimeout(function(){
        $('#l-one').show();
        $('#r-one').show();
    }, 500);
}

function hideTwo(){
    $('#l-two').removeClass('fadeInDownBig');
    $('#l-two').addClass('fadeOutDownBig');
    $('#r-two').removeClass('fadeInUpBig');
    $('#r-two').addClass('fadeOutUpBig');
    
    $('#navTwo').removeClass('active');
    
    setTimeout(function(){
        $('#l-two').hide();
        $('#r-two').hide();
    }, 500);
}

function showTwo(){
    $('#l-two').removeClass('fadeOutDownBig');
    $('#l-two').addClass('fadeInDownBig');
    $('#r-two').removeClass('fadeOutUpBig');
    $('#r-two').addClass('fadeInUpBig');
    
    $('#navTwo').addClass('active');
    
    $('#up').show();
    $('#down').show();
    
    setTimeout(function(){
        $('#l-two').show();
        $('#r-two').show();
    }, 500);
}

function hideThree(){
    $('#l-three').removeClass('fadeInDownBig');
    $('#l-three').addClass('fadeOutDownBig');
    $('#r-three').removeClass('fadeInUpBig');
    $('#r-three').addClass('fadeOutUpBig');
    
    $('#navThree').removeClass('active');
    
    setTimeout(function(){
        $('#l-three').hide();
        $('#r-three').hide();
    }, 500);
}

function showThree(){
    $('#l-three').removeClass('fadeOutDownBig');
    $('#l-three').addClass('fadeInDownBig');
    $('#r-three').removeClass('fadeOutUpBig');
    $('#r-three').addClass('fadeInUpBig');
    
    $('#navThree').addClass('active');
    
    $('#up').show();
    $('#down').hide();
    
    setTimeout(function(){
        $('#l-three').show();
        $('#r-three').show();
    }, 500);
}



























