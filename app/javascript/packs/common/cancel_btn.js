$(".cancel_btn").on("click", function() {
  var closeModal = $(this).parent().parent();
  closeModal.hide();
})

$(".modal").on('click', function(event) {
  // 表示したポップアップ以外の部分をクリックしたとき
  if (!$(event.target).closest('.modal_form').length) {
    $('#add_task_modal').hide();
    $('#edit_task_modal').hide();
    $('#delete_task_modal').hide();
  }
});