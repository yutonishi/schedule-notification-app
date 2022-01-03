$("#add_task_modal_btn").on("click", function() {
  $.ajax({
    url: '/tasks/new',
    type: 'GET',
    dateType: 'json'
  })
  .done(function() {
    $("#add_task_modal").show();
  })
  .fail(function() {
    alert("開けない")
  })
})