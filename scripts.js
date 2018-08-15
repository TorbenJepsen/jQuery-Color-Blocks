$(document).ready(onReady);
let clickRed= 0;
let clickYellow= 0;
let clickGreen= 0;
let clickBlue= 0;
function onReady() {
    
    $('#redButton').on('click', function() {
        $('#newBox').append('<div class="box red"></div>').on('click', function() {
            $(this).closest('div').empty();
            $('#redCount').text(--clickRed);
            console.log('delete clicked');
        });
        $('#redCount').text(++clickRed);
    });
    $('#yellowButton').on('click', function() {
        $('#newBox').append('<div class="box yellow"></div>').on('click', function() {
            $(this).closest('div').empty();
            $('#yellowCount').text(--clickYellow);
        });
        $('#yellowCount').text(++clickYellow);
    })
    $('#greenButton').on('click', function() {
        $('#newBox').append('<div class="box green"></div>').on('click', function() {
            $(this).closest('div').empty();
            $('#greenCount').text(--clickGreen);
        });
        $('#greenCount').text(++clickGreen);
    })
    $('#blueButton').on('click', function() {
        $('#newBox').append('<div class="box blue"></div>').on('click', function() {
            $(this).closest('div').empty();
            $('#blueCount').text(--clickBlue);
        });
        $('#blueCount').text(++clickBlue);
    });

    // $('#newBox').on('click', deleteBlock);


}

// function deleteBlock() {
//     $(this).closest('div').empty();
//     console.log('delete clicked');
// }