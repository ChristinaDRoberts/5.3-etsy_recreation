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
            console.log('response', response);
        },
        error: function (response) {
            console.log('uh oh, something went wrong');
        }

    })

});



