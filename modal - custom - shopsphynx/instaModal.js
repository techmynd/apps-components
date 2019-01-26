$(document).ready(function(){
    // show modal trigger
    $('.insta-detail').click(function(e){
        //e.preventDefault();
        showInstaModal();
    });
    // close modal trigger
    $('.insta-detail-close, .insta-modal-backdrop').click(function(e){
        //e.preventDefault();
        closeInstaModal();
    });
});

// show modal
function showInstaModal(){
    $('.insta-modal').fadeIn('fast');
    $('.insta-modal-backdrop').fadeIn('slow');
    var currentWinPosition = $(window).scrollTop();
    var newModalPosition = currentWinPosition + 40; 
    $('.insta-modal').css({"top":newModalPosition});
}

// close modal
function closeInstaModal(){
    $('.insta-modal-backdrop').fadeOut('fast');
    $('.insta-modal').fadeOut('slow');
}

