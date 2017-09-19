$(document).ready(function(){
    //new Vivus('tsvg', {duration: 200});
    //var hi = new Vivus('tsvg', {type: 'scenario-sync', duration: 200, start: 'autostart', forceRender: false, dashGap: 20}, function () {});
    
    //var svg = new Walkway({
    //    selector: 'tsvg',
    //    duration: 8000
    //}).draw();
    
    var obtT = new Vivus('tsvg', {type: 'sync', duration: 100});
    var obtH = new Vivus('hsvg', {type: 'sync', duration: 100});
    var obtA = new Vivus('asvg', {type: 'sync', duration: 100});
    var obtO = new Vivus('osvg', {type: 'sync', duration: 100});
    var obtV = new Vivus('vsvg', {type: 'sync', duration: 100});
    var obtO_last = new Vivus('osvg_last', {type: 'sync', duration: 100});
    
    $('.object').velocity("transition.flipXIn");
    
    
    
    obtO.play(function() {
        // called after the animation completes
        setTimeout(introAnimation, 500);
    });
});

function introAnimation(){
    expandName();
    
    //without function() the timmer doesn't work
    setTimeout(function(){activateTypewriter('typeDeveloper','typeDeveloper', 'span', 2000);}, 1000);
    setTimeout(activateFloral, 3000);
    setTimeout(activateFloralColors, 4000);
    setTimeout(function(){$('#floralOutline').velocity("fadeOut", { duration: 1500 });}, 4500);
    setTimeout(function(){
        $('#floralColors').velocity("fadeOut",{ duration: 1500 });
        $('#typeDeveloper').velocity("fadeOut",{ duration: 1500 });
    }, 6500);
    setTimeout(collapseName, 8000);
    setTimeout(translateLogo, 8000);
    //setTimeout(function(){$('.animationOverlay').velocity("fadeOut",{ duration: 1500 });}, 9000);
    
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


/*used to activate all typewriting text on page and delete blink-caret at end of animation*/
/*idName  - id of container element of text to animate*/
/*className  - class to add to container element*/
/*textElement - element of text (span,div,h1, etc)*/
/*time - duration of animation in milliseconds so know when to stop blink-caret*/
function activateTypewriter(idName, className, textElement, time){
    $('#'+idName).addClass(className);
    setTimeout(function(){$('.'+ className + ' ' + textElement).css('border-right', 'none');}, (time+500));
}
    
function activateFloral(){
    $('#floralOutline').show();
    var floralOutline = new Vivus('floralOutline', {type: 'sync', duration: 100});
}

function activateFloralColors(){
    $('#floralColors').show();
    $('#floralColors').velocity("fadeIn", { duration: 1500 });
}

function translateLogo(){
    $('.object').velocity({
        left: '200px',
        top: '100px',
        width: '70px'
    });
    
}


































