console.log("test if js is linked");

//gets current time in military format
var currentHour = moment().format("HH");
var currentDay = moment().format("dddd MMMM Do, YYYY");

$('#currentDay').text(currentDay);

if ($('.description').data('hour') > currentHour) {
    $('.description').addClass("future")
} else if ($('.description').data('hour') < currentHour) {
    $('.description').addClass("past")
} else {
    $('.description').addClass("present")
}