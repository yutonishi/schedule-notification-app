$(".cancel_btn").on("click", function() {
  var closeModal = $(this).parent().parent().parent().parent() ;
  closeModal.hide();
})

$(".c-modal").on('click', function(event) {
  // 表示したポップアップ以外の部分をクリックしたとき
  if (!$(event.target).closest('.c-modal_form').length) {
    $('#add_task_modal').hide();
    $('#edit_task_modal').hide();
    $('#delete_task_modal').hide();
    $('#logout_modal').hide();
  }
});