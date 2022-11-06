// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

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
    var qs = getQueryString();
    $('body').append(`<h1>${JSON.stringify(qs)}</h1>`);
}

var fx2 = () => {
    $('#output').append('function 2 is called');
}

$(document).ready(() => {
    fx1();
})