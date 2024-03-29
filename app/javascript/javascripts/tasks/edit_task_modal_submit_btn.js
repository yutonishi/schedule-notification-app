$(document).on("click","#edit_task_modal_submit_btn", function(e){
  e.preventDefault();
  var id = $(this).parent().parent().parent().parent().attr("data-edit-task-id");
  var title = $("#edit_task_title").val();
  var info = $("#edit_task_info").val();
  var start_time = $("#edit_task_start_time").val();
  var notification = $("#edit_task_notification").val();
  var closeModal = $(this).parent().parent().parent().parent();

  console.log(start_time);

  $.ajax({
    url: "/tasks/" + id,
    type: 'PATCH',
    data: {
      task: {
        title: title,
        info: info,
        start_time: start_time,
        notification: notification
      }
    },
    headers: {
      'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
    },
    dateType: 'json'
  })
  .done( function(data) {
    closeModal.hide();
    $("#task_index").html(data);      
  })
  .fail( function() {
    alert('通信nに失敗しました');
  })
})
