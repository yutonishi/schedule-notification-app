$("#add_task_modal_submit_btn").on("click", function() {
  var title = $(this).parent().find("#task_title").val();
  var info = $(this).parent().find("#task_info").val();
  var url = $(this).parent().attr("action");
  var closeModal = $(this).parent().parent();

  $.ajax({
    url: url,
    type: 'POST',
    data: {
      task: {
        title: title,
        info: info,
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