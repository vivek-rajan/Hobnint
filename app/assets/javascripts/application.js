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
      noneSelectedText: 'Select Interest',
      selectedList: 4
   })
   .multiselectfilter();
   
   $("#btnKeepMeInformed").click(function() {
     if(("#user_email").val().toLowerCase() == "email")
       ("#user_email").val("");

     if(("#user_city").val().toLowerCase() == "city")
        ("#user_city").val("");

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
