/*done*/
var signup = function() {
    var payload = {
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    $.ajax({
        url: '/recipient/recipient_insert',
        type: 'GET',
        contentType: "json",
        data: payload,
        complete: function(data) {

            $('#message').html(data.responseJSON.message);

            $('#message').show();

            window.location.assign('/login');
        }
    })
}

$(document).ready(function() {

    $('#addBtn').click(function (e) {
        console.log('Button clicked');
        e.preventDefault();
        signup();
    });
});