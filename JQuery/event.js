var card = $('div#card')
var cardTrigger = $('#card-trigger')

cardTrigger.on('click', function isShow() {
    if (card.is(':visible')) {
        card.fadeOut();
        cardTrigger.text('show card');
    } else {
        card.fadeIn();
        cardTrigger.text('hide card');
    }
})

cardTrigger.on('click', function getText() {
    alert(cardTrigger.text());
})

card.on('mouseenter', changeBackgroundAndColor1)
card.on('mouseleave', changeBackgroundAndColor2)
function changeBackgroundAndColor1() {
    card.css({
        'background': '#333',
        'color': '#fff'
    })
}

function changeBackgroundAndColor2() {
    card.css({
        'background': '#eee',
        'color': '#000'
    })
}