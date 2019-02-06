console.log("hello");

$(document).ready(function() {

    const BASE_URL = 'http://openapi.etsy.com/v2/listings/active.js';

    let searchTerm = 'puppies';
    let limit = '12';

    $.ajax({
        url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${
            searchTerm}`,
        dataType: 'jsonp',
        method: 'GET',


        success: function (response) {
            // console.log('response', response);
            var source = $("#entry-template").html();
            var template = Handlebars.compile(source);
            var context = {
                results: response.results
            }
            var html = template(context);

            $('.row').html(html);
        },


        error: function (xhr) {
            console.log('uh oh, something went wrong', xhr.status);
        }

    })

});



