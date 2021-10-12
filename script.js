var currentDay = $('#currentDay')

function displayTime() {
    var rightNow = moment().format("dddd MMM Do YY")
    currentDay.text(rightNow)
}

displayTime()