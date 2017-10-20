$(document).ready(function(){
    var obtT = new Vivus('tsvg', {type: 'sync', duration: 100}),
        obtH = new Vivus('hsvg', {type: 'sync', duration: 100}),
        obtA = new Vivus('asvg', {type: 'sync', duration: 100}),
        obtO = new Vivus('osvg', {type: 'sync', duration: 100}),
        obtV = new Vivus('vsvg', {type: 'sync', duration: 100}),
        obtO_last = new Vivus('osvg_last', {type: 'sync', duration: 100});
    
    //$('.object').velocity("transition.flipXIn");
    
    // called after the animation completes
    obtO.play(function() {introAnimation();});
});

function introAnimation(){
    //without function() the timmer doesn't work
    setTimeout(expandName, 500);
    setTimeout(function(){activateTypewriter('typeDeveloper','typeDeveloper', 'span', 2000);}, 1000);
    setTimeout(activateFloral, 3000);
    setTimeout(activateFloralColors, 4000);
    setTimeout(function(){$('#floralOutline').velocity("fadeOut", { duration: 1500 });}, 4500);
    setTimeout(function(){$('#floralColors').velocity("fadeOut",{ duration: 1500 }); $('#typeDeveloper').velocity("fadeOut",{ duration: 1500 });}, 6500);
    setTimeout(collapseName, 8000);
    setTimeout(translateLogo, 8000);
    setTimeout(function(){$('.animationOverlay').velocity("fadeOut",{ duration: 1500 });}, 9000);
    
    setTimeout(loadBackground, 10000);
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

/*used to activate all typewriting text on page and delete blink-caret at end of animation
idName  - id of container element of text to animate
className  - class to add to container element
textElement - element of text (span,div,h1, etc)
time - duration of animation in milliseconds so know when to stop blink-caret*/
function activateTypewriter(idName, className, textElement, time){
    $('#'+idName).addClass(className);
    setTimeout(function(){$('.'+ className + ' ' + textElement).css('border-right', 'none');}, (time+500));
}

/*Floral Outline*/
function activateFloral(){
    $('#floralOutline').show();
    var floralOutline = new Vivus('floralOutline', {type: 'sync', duration: 100});
}

function activateFloralColors(){
    $('#floralColors').show();
    $('#floralColors').velocity("fadeIn", { duration: 1500 });
}

/*Moves logo to the top left hand corner*/
function translateLogo(){
    //if screen is bigger than 1200
    $('.object').velocity({
        left: '106px',
        top: '90px',
        width: '70px'
    });
}

function loadBackground(){
    //find height and width of viewport (not screen)
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    console.log('width: ' + w + ' | height: ' + h);

    //find hypotenuse and set as diameter/height/width of circle
    var hypotenuse =  Math.ceil(Math.sqrt((w*w) + (h*h)));
    console.log('hypotenuse: ' + hypotenuse);
    $('#sectionBackground').css({'height': ''+hypotenuse+'px','width': ''+hypotenuse+'px'});
    
    var minusLeft = (hypotenuse/2)-(w/2);
    var minusTop = (hypotenuse/2)-(h/2);
    
    $('#sectionBackground').css("margin-left", "-"+minusLeft+"px");
    $('#sectionBackground').css("margin-top", "-"+minusTop+"px");
    console.log('margin-left: -'+((hypotenuse/2)-(w/2)));
    console.log('margin-top: -'+((hypotenuse/2)-(h/2)));
    
    //find tan(0) = height/width
    var degrees = Math.ceil(Math.atan((w/2)/(h/2))*180/Math.PI);
    console.log('degrees: '+degrees);
    
    //$('.sectionDivider').velocity({rotateZ: degrees+"deg",},);
}

































