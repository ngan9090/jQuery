$(document).ready(function () {
    //Save data and check
    $("#save").click(function (event) {
        var focusSet = false;
    var fname = document.getElementById('name');
    if(fname.value.length > 50)
     {
        document.getElementById('msg-error').style.display = 'block';
        event.preventDefault();
        fname.focus();
        return false;
     }

     var fbirthday = document.getElementById('birthday');
     var start_date = new Date($("#birthday").val());
            var date = new Date();
            var year_old = date.getFullYear() - start_date.getFullYear();
           if(year_old > 120  || date < start_date || year_old < 0 ){
            document.getElementById('day-error').style.display = 'block';
            event.preventDefault();
            fbirthday.focus();
            return false;
           }
      
      var fphone = document.getElementById('phoneNumber').value.length;
      if(fphone != 10 ){
        document.getElementById('phone-error').style.display = 'block';
        event.preventDefault();
        fphone.focus();
        return false;
       }

 //Save data to table
       var name = $("#name").val();
       var birthday = $("#birthday").val();
       var phone = $("#phoneNumber").val();
       var home = $("#hometown").val();
  //---->Form validation goes here
  var new_row = '<tr><td><input type="checkbox" id="choice"/></td><td id="nameTb">'+ name + '</td><td id="birthdayTb">' + birthday + 
  '</td><td id="phoneTb">' + phone + '</td><td id="homeTb">' +  home + '</td></tr>';
   var count = 0;
  $("table tbody tr").each(function(index) {
    if($(this).find('#editValue').text().length > 0){
     $(this).find("#editValue").text($('#name').val());
     $(this).find('#birthdayTb').text($('#birthday').val());
     $(this).find("#phoneTb").text($('#phoneNumber').val());
     $(this).find("#homeTb").text($('#hometown').val());
     $('#editValue').attr('id','nameTb');
     count = 1;
    }
    });
   if(count == 0){
     $("table tbody").append(new_row);}

  $("#name").val('');
  $("#birthday").val('');
  $("#phoneNumber").val('');
  $("#hometown").val('');
  document.getElementById('day-error').style.display = 'none';
  document.getElementById('phone-error').style.display = 'none';
  });   
});

//Delete data 
function del() {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên đang chọn?")) 
    jQuery('input:checkbox:checked').parents("tr").remove();
    else
    return false;
}

//Edit data
function edit(){
    var number = $('input:checkbox:checked'). length;
    if(number > 1){
        alert("Bạn chỉ được sửa thông tin của 1 sinh viên");
        return false;  
    }

  $("table tbody tr").each(function(index) {
   if($(this).find('#choice').is(':checked')){
    $("#name").val($(this).find('#nameTb').text());
    $("#birthday").val($(this).find('#birthdayTb').text());
    $("#phoneNumber").val($(this).find('#phoneTb').text());
    $("#hometown").val($(this).find('#homeTb').text());
    $(this).find('#nameTb').attr('id','editValue');
   }
   });  

}

//Delete and edit button active or not
$("#control-group").on("change", "[id=choice]",function(){
    if($(this).is(':checked')||$('input:checkbox:checked'). length > 0 ) {
      $('#edit').removeAttr('disabled');
      $('#edit').addClass('button');
      $('#delete').removeAttr('disabled');
      $('#delete').addClass('button');
      }
    else{
      $('#edit').attr('disabled','disabled');
      $('#edit').removeClass('button');
      $('#delete').attr('disabled','disabled');
      $('#delete').removeClass('button');
      }
}); 

//Reset form
function resetForm() {
    document.getElementById('msg-error').style.display = 'none';
    document.getElementById('day-error').style.display = 'none';
    document.getElementById('phone-error').style.display = 'none';
}

