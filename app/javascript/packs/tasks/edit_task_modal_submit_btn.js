$("#edit_task_modal_submit_btn").on("click", function() {
  var id = $(".edit_task_modal_btn").data("task-id")
  var title = $(this).parent().find("#edit_task_title").val();
  var info = $(this).parent().find("#edit_task_info").val();
  var date = $(this).parent().find("#edit_task_date").val();
  var start_time = $(this).parent().find("#edit_task_start_time").val();
  var end_time = $(this).parent().find("#edit_task_end_time").val();
  var url = $(this).parent().attr("action") + "/" + id
  var closeModal = $(this).parent().parent();

  $.ajax({
    url: url,
    type: 'PATCH',
    data: {
      title: title,
      info: info,
      date: date,
      start_time: start_time,
      end_time: end_time
    },
    dateType: 'json'
  })
  .done( function(data) {
    closeModal.hide();
    console.log(data)
  })
  .fail( function() {
    console.log('しくじった')
  })
});