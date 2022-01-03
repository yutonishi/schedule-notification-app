$("#delete_task_modal_submit_btn").on("click", function() {
  var id = $(".edit_task_modal_btn").data("task-id")
  var url = "/tasks/" + id;
  var closeMOdal = $(this).parent().parent();

  $.ajax({
    url: url,
    type: 'DELETE',
    dateType: 'json'
  })
  .done( function() {
    closeMOdal.hide();
  })
  .fail( function() {
    console.log('しくじった')
  })
});