// displays current date in jumbotron
$('#currentDay').text(moment().format("dddd MMMM Do, YYYY"));
// changes background color based on time and inputs saved local storage
$('input').each(function () {
    $(this).val(localStorage.getItem($(this).attr("id")))
    if (parseInt($(this).attr("id")) > moment().hour()) {
        $(this).addClass("future")
    } else if (parseInt($(this).attr("id")) < moment().hour()) {
        $(this).addClass('past')
    } else {
        $(this).addClass('present')
    }
});
// stores input value
$('.saveBtn').on('click', function () {
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());
});