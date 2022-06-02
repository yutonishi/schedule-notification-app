document.addEventListener("turbolinks:load", function() {
  $("#task_start_time,#edit_task_start_time").datepicker({
    dateFormat: "yy/mm/dd",
    prevText: "",
    nextText: "",
    monthNames: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ],
    dayNames: [
      "日曜日",
      "月曜日",
      "火曜日",
      "水曜日",
      "木曜日",
      "金曜日",
      "土曜日"
    ],
    dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    showMonthAfterYear: true,
    firstDay: 2
  });
  
  console.log('読み込み成功');
})
