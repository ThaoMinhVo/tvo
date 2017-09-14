$(document).ready(function(){
    //new Vivus('tsvg', {duration: 200});
    //var hi = new Vivus('tsvg', {type: 'scenario-sync', duration: 200, start: 'autostart', forceRender: false, dashGap: 20}, function () {});
    
    //var svg = new Walkway({
    //    selector: 'tsvg',
    //    duration: 8000
    //}).draw();
    
    var obtT = new Vivus('tsvg', {type: 'oneByOne', duration: 500});
    var obtV = new Vivus('vsvg', {type: 'oneByOne', duration: 500});
    var obtO = new Vivus('osvg', {type: 'oneByOne', duration: 500});
    
    
    
    obtO.play(function() {
        // called after the animation completes
        setTimeout(introAnimation, 500);
    });
});

function introAnimation(){
    $('#T').animate({
        left: '-=200px',
        top: '-+50px'
    });
    $('#V').animate({
        left: '+=100px',
        top: '-+50px'
    });
    $('#O').animate({
        left: '+=250px',
        top: '-+50px'
    });
}
