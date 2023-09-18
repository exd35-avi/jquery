$(document).ready(function(){
    $('#submit').click(function(){

        var user = $('#username').val();

        // username should not be empty 
        if (user == "") {
            $('#show_error').html('***The username should be filled***');
            $('#show_error').css({'color': 'red'});
            return false;       // mandatory steps
        }

        // check the length
        if (user.length <= 2 || user.length >= 26) {
            $('#show_error').html('***The username should be between 3 to 25 letters***');
            $('#show_error').css({'color': 'red'});
            return false;
        }
    });
});

$(document).ready(function(){
    $('#submit').click(function(){
        $.post('post.php')
    });
});