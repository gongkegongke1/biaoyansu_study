var trigger = $('#trigger');
var card = $('#card');
var loaded = false;

trigger.on('click', 
    function () {
        if(!loaded) {
            console.log(loaded)
            card.load('ajax-card.html');
            card.show();
            loaded = true;       
        } else {
            if (card.is(':visible')) {
                card.hide();
            } else {
                card.show();
            }
        }
})
