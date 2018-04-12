$(document).ready(onReady);
let clickRed= 0;
let clickYellow= 0;
let clickGreen= 0;
let clickBlue= 0;
function onReady() {
    
    $('#redButton').on('click', function() {
        $('#newBox').append('<div class="box red"></div>');
        $('#redCount').text('Red Count:' + ++clickRed);
    });
    $('#yellowButton').on('click', function() {
        $('#newBox').append('<div class="box yellow"></div>');
        $('#yellowCount').text('Yellow Count:' + ++clickYellow);
    })
    $('#greenButton').on('click', function() {
        $('#newBox').append('<div class="box green"></div>');
        $('#greenCount').text('Green Count:' + ++clickGreen);
    })
    $('#blueButton').on('click', function() {
        $('#newBox').append('<div class="box blue"></div>');
        $('#blueCount').text('Blue Count:' + ++clickBlue);
    });

}
