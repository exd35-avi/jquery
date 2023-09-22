// $(document).ready(function (e) {

//     // e.preventDefault();
//     console.log('hii')
//     $('#submit').click(function () {

//         var user = $('#first_name').val()
//         console.log(user)

//         var password = $('#password').val()
//         console.log(password)

//         var email= $('#email').val()
//         console.log(email)

//         var langArray = email.split('@').val()
//         console.log(langArray)

//         $("#first_name").hide();
//         $("#email").hide();
//         $("#password").hide();

//         if ($("#first_name").val().length < 1) {
//             // console.log(text);
//             $("#first_name").show();
//             // $("#txt").focus();
//             return false;
//           } else if (email.length < 1) {
//             $("#first_name").hide();
//             $("#email").show();
//             $("#email").focus();
//             return false;
//           }  else if (password.length < 1) {
//             // console.log(text);
//             $("#email").hide();
//             $("#password").show();
//             // $("#rollno").focus();
//             $("#password").hide(3000);
//             return false;
//           }

//         // username should not be empty
//         // if (user.length == 0) {
//         //     $('#show_error').html('***The username should be filled***');
//         //     $('#show_error').css({ 'color': 'red' });
//         //     return false;
//         // }

//         // // password length
//         // if (password.length <= 5) {
//         //     $('#show_error').html('***Password must be minimum 6 characters***');
//         //     $('#show_error').css({ 'color': 'red' });
//         //     return false;
//         // }

//         // // email consisting '@ symbol
//         // if (langArray.length < 2) {
//         //     $('#show_error').html('***Email should contains @ symbol***')
//         //     $('#show_error').css({ 'color': 'red' });
//         //     return false;
//         // }        
//     });
// });

$(document).ready(function () {
    $('#first_form').submit(function () {
        var first_name = $('#first_name').val();
        console.log(first_name);

        var email = $('#email').val();
        console.log(email);

        var password = $('#password').val();
        var adrs = $('#address').val();

        var img_name = $('#file').val()
        var dotind = str.charAt('.')

        // console.log(password);
        var img_extension = img_name.substring(dotind, img_extension.length).toLowerCase();
        console.log(img_extension);

        // first name checking
        if (first_name.length < 1) {    // if length is empty
            $('#first_name1').html('<span class="error">This field is required</span>');
            $('#first_name1').css({ 'color': 'red' });
            return false;
        } else if (first_name.includes('-') || first_name.includes(' ')) {   // if name contains '-' and ' '
            $('#first_name1').html('<span class="error">Invalid Format</span>');
            $('#first_name1').css({ 'color': 'red' });
            return false;
        } else {
            $('#first_name1').html('<span></span>');
        }

        // email checking
        if (!email.includes('@') || !email.includes('.')) {
            $('#email1').html('<span class="error">Invlid email_ID</span>');
            $('#email1').css({ 'color': 'red' });
            return false;
        } else {
            $('#email1').html('<span></span>');
        }

        // password checking
        if (password.length < 8) {
            $('#password1').html('<span class="error">Minimum 8 digit is required</span>');
            $('#password1').css({ 'color': 'red' });
            return false;
        } else {
            $('#password1').html('<span></span>');
        }

        // gender radio button selection (problem occurs)
        if (!$('.gender').is(":checked")) {
            console.log('not selected')
            $('#gender1').html('<span class="error">This field is required</span>');
            $('#gender1').css({ 'color': 'red' });
            return false;
        } else {
            console.log('selected')
            $('#gender1').html('<span></span>');
        }

        // language checkbox selection
        if (!$('#hindi').is(':checked') && !$('#english').is(':checked') && !$('#bengali').is(':checked')) {
            $('#lang1').html('<span class="error">This field is required</span>');
            $('#lang1').css({ 'color': 'red' });
            return false;
        } else {
            $('#lang1').html('<span></span>');
        }

        // country dropdown selection
        if ($('#country').val() == "Select an option") {
            $('#country1').html('<span class="error">This field is required</span>');
            $('#country1').css({ 'color': 'red' });
            return false;
        } else {
            $('#country1').html('<span></span>');
        }

        // Address selection
        if (adrs.length == 0) {
            $('#address1').html('<span class="error">This field is required</span>');
            $('#address1').css({ 'color': 'red' });
            return false;
        } else {
            $('#address1').html('<span class="error"></span>')
        }

        // Image photo selection
        if (img_extension != 'jpeg' || img_extension != 'jpg') {
            console.log('upload')
            $('#photo1').html('<span class="error">Please upload correctly</span>');
            $('#photo1').css({ 'color': 'red' });
            return false;
        } else {
            $('#photo1').html('<span class="error"></span>')
        }
    });
});

// DELETING THE PARTICULAR ROW
$(document).ready(function () {
    $('.dlt').click(function () {
        if (confirm('Are you sure you want to delete?')) {
            $(this).closest('tr').remove();
        }
    });
});


// data editing from edit list view to edit view
$(document).ready(function () {
    $('.btnSelect').click(function () {
        var currentRow = $(this).closest('tr')  // fetch the current row number

        // fetch all the col value of that particular current row
        var f_n = currentRow.find("td:eq(0)").html();
        var l_n = currentRow.find("td:eq(1)").html();
        var coun = currentRow.find("td:eq(2)").html();
        var gend = currentRow.find("td:eq(3)").html();
        var dobirth = currentRow.find("td:eq(4)").html();
        var ph = currentRow.find("td:eq(5)").html();
        var mail = currentRow.find("td:eq(6)").html();
        var getaddress = currentRow.find("td:eq(7)").html();

        $('#first_name').val(f_n);
        $('#last_name').val(l_n);
        $('#country').val(coun);
        $('.gender').val(gend);
        $('#dob').val(dobirth);
        $('#phone').val(ph);
        $('#email').val(mail);
        $('#address').val(getaddress);
        $('#list_view').hide();
        $('#first_form').show();

        console.log(col1 + "\n" + col2 + "\n" + col3 + "\n" + col4 + "\n" + col5 + "\n" + col6 + "\n" + col7);
    });
});

// show and hide operation
// $(document).ready(function () {
//     $('#list_view').hide();
//     $('#first_form').hide();

//     $('.add-new').click(function () {
//         $('#list_view').hide();
//         $('#first_form').show();
//     });

//     $('.hide').click(function () {
//         console.log('showing')
//         $('#first_form').hide();
//         $('#list_view').show();
//     });
// });

