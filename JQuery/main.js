var board = $('#board');

board.css({
    'background-color': '#000',
    'padding': '10px',
    'font-family': 'sans-serif',
    'font-size': 'larger',
    'display': 'inline-block',
})

function toggle() {
    if(board.hasClass('active')) {
        board.removeClass('active')
    }else {
        board.addClass('active')
    }
}

setInterval(toggle, 5)