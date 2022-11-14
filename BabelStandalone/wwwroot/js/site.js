
var getQueryString = () => {
    var queries = {};
    $.each(document.location.search.substr(1).split('&'), function (c, q) {
        var i = q.split('=');
        queries[i[0]] = i[1];
        queries[i[1]] = i[2];
    });
    return queries;
};

var fx1 = () => {
    var qs = JSON.stringify(getQueryString());
    if (qs && qs!='{}') {
        $('body').append(`<h1>${qs}</h1>`);
    }
}

var fx2 = () => {
    $('#output').append('function 2 is called');
}

$(document).ready(() => {
    fx1();
})