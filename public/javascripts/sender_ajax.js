/* DONE */
var addNewSender = function() {
    var payload = {
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        email: $('#email').val(),
        street_num: $('#street_num').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zip: $('#zip').val()
    };

    $.ajax({
        url: '/sender/senderInsert',
        type: 'GET',
        contentType: "json",
        data: payload,
        complete: function(data){

            $('#message').html(data.responseJSON.message);

            $('#message').show();
        }
    })
}

$(document).ready(function() {

    $('#Add').click(function (e) {
        console.log('Add! clicked');
        e.preventDefault();
        addNewSender();
    });
});