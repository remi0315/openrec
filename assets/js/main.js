import "../scss/styles.scss";
import $ from "jquery";

$(function() {
  $("#jsModalLogin").on("click", function() {
    //TO DO
    $("#jsModalBg").removeClass("is-hidden");
    $("#jsModalContents").removeClass("is-hidden");
  });

  $(".jsModalClose").on("click", function() {
    $("#jsModalBg").addClass("is-hidden");
    $("#jsModalContents").addClass("is-hidden");
  });

});




