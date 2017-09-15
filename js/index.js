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
    $('#T').animate({
        left: '-=400px',
        top: '-=100px'
    });
    $('#H').animate({
        left: '-=250px',
        top: '-=100px'
    });
    $('#A').animate({
        left: '-=170px',
        top: '-=100px'
    });
    $('#O').animate({
        left: '-=50px',
        top: '-=100px'
    });
    $('#V').animate({
        left: '+=250px',
        top: '-=100px'
    });
    $('#O_last').animate({
        left: '+=385px',
        top: '-=100px'
    });
}
