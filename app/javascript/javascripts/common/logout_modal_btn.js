document.addEventListener("turbolinks:load", function() {
  $("#logout_modal_btn").on("click", function() {
    $("#logout_modal").show();
  })
})