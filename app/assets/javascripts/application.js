// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require_tree .

$(function(){
  $("#select")
  .multiselect({
    noneSelectedText: 'Your interests',
    selectedList: 4
  })
  .multiselectfilter();

  var othersElement = $("ul.ui-multiselect-checkboxes > li input[title='Others']");
  othersElement.next().hide();

  //append at li level
  othersElement.parent().parent().append('<input class="inputboxInDropdown" value="Others,..." onfocus = "clickclear(this, \'Others,...\')", onblur = "SetCustomInterest(this,\'Others,...\')" type="text" size="30" name="user[other_interests]" ></input>');
   
   $("#btnKeepMeInformed").click(function() {
     if($("#user_email").val().toLowerCase() == "your email")
       $("#user_email").val("");

     if($("#user_city").val().toLowerCase() == "your city")
        $("#user_city").val("");

     if($("#user_other_interests").val().toLowerCase() == "others,...")
        $("#user_other_interests").val("");

      return true;
   });

});

//$(document).ready(function(){
//   $("#select").multiselect();
//});

function clickclear(thisfield, defaulttext) {
  if (thisfield.value == defaulttext) {
  thisfield.value = "";
  }
}
function clickrecall(thisfield, defaulttext) {
  if (thisfield.value == "") {
  thisfield.value = defaulttext;
  }
}

function SetCustomInterest(thisfield, defaulttext) {
  if (thisfield.value == "") {
    thisfield.value = defaulttext;
  }else{
    var othersElement = $("ul.ui-multiselect-checkboxes > li input[title='Others']");
    othersElement.next().text(thisfield.value);//Setting span value
    $("#user_other_interests").val(thisfield.value);
//    othersElement.prop("checked", false);
//    othersElement.prop("checked", true);
      othersElement.removeAttr('checked');
      othersElement.click();
  }
}

function SetDropdownTitleChange(title){
  $(".ui-multiselect.ui-widget.ui-state-default.ui-corner-all>span").last().text(title);
}
