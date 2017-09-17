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
    
    //without function() the timmer doesn't work
    setTimeout(function(){activateTypewriter('typeDeveloper','typeDeveloper', 'span', 2000);}, 1000);
}

function expandName(){
    $('#T').velocity({
        left: '-=260px',
        top: '-=50px'
    });
    $('#H').velocity({
        left: '-=150px',
        top: '-=50px'
    });
    $('#A').velocity({
        left: '-=85px',
        top: '-=50px'
    });
    $('#O').velocity({
        left: '+=10px',
        top: '-=50px'
    });
    $('#V').velocity({
        left: '+=150px',
        top: '-=50px'
    });
    $('#O_last').velocity({
        left: '+=255px',
        top: '-=50px'
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


/*used to activate all typewriting text on page and delete blink-caret at end of animation*/
/*idName  - id of container element of text to animate*/
/*className  - class to add to container element*/
/*textElement - element of text (span,div,h1, etc)*/
/*time - duration of animation in milliseconds so know when to stop blink-caret*/
function activateTypewriter(idName, className, textElement, time){
    $('#'+idName).addClass(className);
    setTimeout(function(){$('.'+ className + ' ' + textElement).css('border-right', 'none');}, (time+500));
}