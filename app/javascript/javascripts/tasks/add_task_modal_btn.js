$(document).on('turbolinks:load', function () {
  $("#add_task_modal_btn").on("click", function() {
    $("#add_task_modal").show();
  
    $("#task_title").val("");
    $("#task_info").val("");
    $("#task_start_time").val("");
    $("#task_task_notification").val("");
  
    console.log('成功');
  })
})
