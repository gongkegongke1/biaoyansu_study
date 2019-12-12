var searchInput = $('#search-input')
var search = $('#search')
var searchButton = $('#search-button')
var result = $('#result')
var username


search.on('submit', function (event) { //注意这里是应该是form submit，不是button submit
    event.preventDefault();
    username = searchInput.val();
    $.get('https://api.github.com/users/' + username )
        .done(function (data) {
            var html = '<div>username:' + data.login + '</div>' + '<div>bio:' + data.bio + '</div>';
            result.html(html);
        })
})