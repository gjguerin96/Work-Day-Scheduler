var currentDay = $('#currentDay')

function displayTime() {
    var rightNow = moment().format("dddd MMM Do YY")
    currentDay.text(rightNow)
}

displayTime()

if (moment().format("a") === "pm"){
    var time = moment().format("h") + 12
    console.log(time)
}

var time = moment().format("h")
console.log(time)