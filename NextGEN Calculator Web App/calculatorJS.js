    
function process_click(val) {
    if (val == '+' || val == '-' || val == '/' || val == 'x' || val == '=' ) {
    if ( $('#screen').val() != '') {  add_vals(val); } else {
        update_type(val);
    }
    }
     else if (val == 'negative') {
    var screen =  $('#screen').val() * -1;
    $('#screen').val(screen);       
    }
    else if (val == 'C') {
       reset_calc();
    }
    else if (val == 'CE') {
        $('#screen').val('');
    }
    else if (val == 'back') {
        var screen_input = $('#screen');
        screen_input.val(screen_input.val().slice(0, -1));
    } else {
        $('#screen').val($('#screen').val() + val);
    }
    var the_div = $('.screen .values');
    the_div.animate(
    {
        scrollTop: the_div.prop("scrollHeight") - the_div.height()}, 500);
}

function do_math() {
    var process = '';
    var result = 0;
    $('.values input').each(function(index,data){
    
    var current =$(this).val();
    
    if (process == "+") {
        result = result + parseFloat(current); 
    } 
    
    else if (process == "-") { 
    result = result - parseFloat(current); }
    
    else if (process == "x") {
    result = result * parseFloat(current); }
    
    else if (process == "/") {
    result = result / parseFloat(current); }
    else if (process == "=") {
    result = result; }
        
    process =  current;
 
    });
    
    $('#result').val(result);
    $('.result span').html($('#result').val());
    if($('.result span').html() == "NaN"){
       $('.result span').html('Impossible calculation');
       }
}

function add_vals(val) {
    var value = "<input step='0.01' type='number' value='"+$('#screen').val()+"'>"
    var action = "<input type='text' value='"+val+"'>";
    $('div.values').append(value);
    $('div.values').append(action);
    $('#screen').val('');
    do_math();
    bind_liveupdate();
}
function reset_calc() {
     $('#screen').val('');
        $('.screen .values').html('<input type="hidden" type="text" value="+" />');
        do_math();
}
function unbind_liveupdate() {
    $('.values input').unbind('keyup');
}

// this unbinds the keyup then binds keyup again, to let you
//safely correct any of the number inputs in case of a mistake
function bind_liveupdate() {
    unbind_liveupdate();
    $('.values input').keyup(function (){
      do_math();  
    });
}

function update_type(val) {
    $('.values input:last-child()').val(val);    
}

$(document).on("pageshow","#calculatorContact",function(){ 
$("#calculatorContact button").unbind('click');            
    reset_calc();
$("#calculatorContact button").click(function(){
                var v = $(this).val();
               process_click(v); 
            });
     bind_liveupdate();
});



//Copyright Alexandru D Opre 41982.