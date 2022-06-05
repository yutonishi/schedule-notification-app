$(document).on('click', '#delete_task_modal_submit_btn', function(e){
  e.preventDefault();
  var id = $("#delete_task_modal").attr("data-delete-task-id");
  var url = "/tasks";
  var closeModal = $(this).parent().parent().parent().parent();

  $.ajax({
    url: url + "/" + id,
    type: 'DELETE',
    data: {
      task: {
        id: id
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