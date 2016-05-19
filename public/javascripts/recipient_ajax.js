/* DONE?*/
var gettracking = function() {
    var payload = {
        tracking_num: tID,
        recipient_id: rID,
        speed: $('#speed').val(),
        package_type: $('#package_type').val()
    };

    $.ajax({
        url: '/auth_required/get_tracking',
        type: 'GET',
        contentType: "json",
        data: payload,
        complete: function(data) {

            $('#message').html(data.responseJSON.message);

            $('#message').show();

        }
    })
}

$(document).ready(function() {

    $('#Rate').click(function (e) {
        console.log('Tracking clicked');
        e.preventDefault();
        gettracking();
    });
});