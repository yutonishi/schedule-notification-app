$(document).on("click", ".edit_task_modal_btn", function(event) {
  // 表示した削除ボタン以外の部分をクリックしたとき
  if (!$(event.target).closest('.delete_task_modal_btn').length) {
    var id = $(this).data("task-id");
    var title = $(this).data("task-title");
    var info = $(this).data("task-info");
    var start_time = $(this).data("task-start_time");
    var notification = $(this).data("task-notification");

    $("#edit_task_title").val(title);
    $("#edit_task_info").val(info);
    $("#edit_task_start_time").val(start_time);
    $("#edit_task_notification").val(notification);
    $("#edit_task_modal").attr("data-edit-task-id", id);

    $("#edit_task_modal").show();
  }
});