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
});
