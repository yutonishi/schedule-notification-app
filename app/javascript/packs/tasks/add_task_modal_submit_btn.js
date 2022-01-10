$("#add_task_modal_submit_btn").on("click", function() {
  var title = $(this).parent().find("#task_title").val();
  var info = $(this).parent().find("#task_info").val();
  var start_time = $(this).parent().find("#task_start_time").val();
  var notification = $(this).parent().find("#task_notification").val();
  var url = $(this).parent().attr("action");
  var closeModal = $(this).parent().parent();

  $.ajax({
    url: url,
    type: 'POST',
    data: {
      task: {
        title: title,
        info: info,
        start_time: start_time,
        notification: notification
      }
    },
    dateType: 'json'
  })
  .done( function(data) {
    closeModal.hide();
    console.log(data);
  })
  .fail( function() {
    alert('通信nに失敗しました');
  })
})