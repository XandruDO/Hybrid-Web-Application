$("#submit").click(function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var contactNo = $("#phoneNo").val();
    var email = $("#email").val();
    var message = $("#message").val();
    
    if (fname == "" || lname == "" || contactNo == "" || email == "" || message == "") {
        alert("Information missing, please check the form fields!");
    } 
    else if (!contactNo.match("[0-9]{5}-[0-9]{3}-[0-9]{3}")) {
        alert("Please enter a correct format for the phone number!");
    }
    else {
        $("#formFeedback").append("<b>Information has been submitted. Thank you!</b>");
    }
});

$('#reset').click(function(){
    $('#formFeedback').html('');
});
