var currentDay = $('#currentDay')
var nine = $("#9AM")
var ten = $("#10AM")
var eleven = $("#11AM")
var twelve = $("#12PM")
var one = $("#1PM")
var two = $("#2PM")
var three = $("#3PM")
var four = $("#4PM")
var five = $("#5PM")
var six = $("#6PM")
var test = $("#test")

function displayTime() {
    var rightNow = moment().format("dddd MMM Do YY")
    currentDay.text(rightNow)
    test.addClass("present")
}

displayTime()


function setColor() {
    if (moment("h").isSame(9) === true) {
        nine.addClass("present")
    }
    else if (moment("h").isBefore(9) === true) {
        nine.addClass("future")
    }
    else {
        nine.addClass("past")
    }

    if (moment("h").isSame(10) === true) {
        ten.addClass("present")
    }
    else if (moment("h").isBefore(10) === true) {
        ten.addClass("future")
    }
    else {
        ten.addClass("past")
    }

    if (moment("h").isSame(12) === true) {
        twelve.addClass("present")
    }
    else if (moment("h").isBefore(12) === true) {
        twelve.addClass("future")
    }
    else if (moment("h").isBefore(12) === false){
        twelve.addClass("past")
    }
    else {
        console.log("broken")
    }

    if (moment("h").isSame(1) === true) {
        one.addClass("present")
    }
    else if (moment("h").isBefore(1) === true) {
        one.addClass("future")
    }
    else {
        one.addClass("past")
    }
}


setColor()
// var hours = [nine,ten,eleven,twelve,one,two,three,four,five,six]

// jQuery.each(hours, function(){
//     this.addClass("present")
// })


// nine.addClass("present")
 var check = moment("h").isSame(12)

console.log(check)