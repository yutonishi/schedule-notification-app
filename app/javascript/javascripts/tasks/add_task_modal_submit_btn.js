$(document).on("click", "#add_task_modal_submit_btn", function(e){
  e.preventDefault();
  var title = $("#task_title").val();
  var info = $("#task_info").val();
  var start_time = $("#task_start_time").val();
  var notification = $("#task_notification").val();
  var closeModal = $(this).parent().parent().parent().parent();

  $.ajax({
    url: '/tasks',
    type: 'POST',
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
    console.log(data);
  })
  .fail( function() {
    alert('通信に失敗しました');
  })
})

