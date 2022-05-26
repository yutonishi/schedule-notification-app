$(document).on("click", ".delete_task_modal_btn", function() {
  var id = $(this).parent().parent().attr('data-task-id');
  $("#delete_task_modal").attr('data-delete-task-id', id);
  $("#delete_task_modal").show();
})