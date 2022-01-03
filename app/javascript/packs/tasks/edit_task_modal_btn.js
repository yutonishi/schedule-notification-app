$(".edit_task_modal_btn").on('click', function(event) {
  // 表示した削除ボタン以外の部分をクリックしたとき
  if (!$(event.target).closest('.delete_task_modal_btn').length) {
    var id = $(this).data("task-id");
    var url = "tasks/" + id + "/edit";

    var title = $(this).data("task-title");
    var info = $(this).data("task-info");
    var date = $(this).data("task-date");
    var start_time = $(this).data("task-start_time");
    var end_time = $(this).data("task-end_time");

    $("#edit_task_title").val(title);
    $("#edit_task_info").val(info);
    $("#edit_task_date").val(date);
    $("#edit_task_start_time").val(start_time);
    $("#edit_task_end_time").val(end_time);
    
    $.ajax({
      url: url,
      type: 'GET',
      dateType: 'json'
    })
    .done(function() {
      $("#edit_task_modal").show();
    })
    .fail(function() {
      alert("失敗しました")
    })
  }
});