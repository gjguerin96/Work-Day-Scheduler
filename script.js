var eight = $("#8AM")
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
    $('#currentDay').text(rightNow)
}
displayTime()


function setColor() {
    var currentHour = moment().hours();
 
    $('.row').each(function(){
        var hour = parseInt($(this).attr('id'))
        
        if(currentHour > hour){
            $(this).children('.input').addClass('past');
        }
        else if(currentHour === hour){
            $(this).children('.input').removeClass('past');
            $(this).children('.input').addClass('present');
        }else{
            $(this).children('.input').removeClass('past');
            $(this).children('.input').removeClass('present');
            $(this).children('.input').addClass('future');
        }
    })
}
setColor()


$("#8button").click(function(){
    localStorage.setItem("8AM",eight.val())
})
$("#9button").click(function(){
    localStorage.setItem("9AM",nine.val())
})
$("#10button").click(function(){
    localStorage.setItem("10AM",ten.val())
})
$("#11button").click(function(){
    localStorage.setItem("11AM",eleven.val())
})
$("#12button").click(function(){
    localStorage.setItem("12PM",twelve.val())
})
$("#1button").click(function(){
    localStorage.setItem("1PM",one.val())
})
$("#2button").click(function(){
    localStorage.setItem("2PM",two.val())
})
$("#3button").click(function(){
    localStorage.setItem("3PM",three.val())
})
$("#4button").click(function(){
    localStorage.setItem("4PM",four.val())
})
$("#5button").click(function(){
    localStorage.setItem("5PM",five.val())
})
$("#6button").click(function(){
    localStorage.setItem("6PM",six.val())
})


function getSavedValues () {
    if (localStorage.getItem("8AM") != eight.val()) {
        eight.val(localStorage.getItem("8AM"))
    }
    if (localStorage.getItem("9AM") != nine.val()) {
        nine.val(localStorage.getItem("9AM"))
    }
    if (localStorage.getItem("10AM") != ten.val()) {
        ten.val(localStorage.getItem("10AM"))
    }
    if (localStorage.getItem("11AM") != eleven.val()) {
        eleven.val(localStorage.getItem("11AM"))
    }
    if (localStorage.getItem("12PM") != twelve.val()) {
        twelve.val(localStorage.getItem("12PM"))
    }
    if (localStorage.getItem("1PM") != one.val()) {
        one.val(localStorage.getItem("1PM"))
    }
    if (localStorage.getItem("2PM") != two.val()) {
        two.val(localStorage.getItem("2PM"))
    }
    if (localStorage.getItem("3PM") != three.val()) {
        three.val(localStorage.getItem("3PM"))
    }
    if (localStorage.getItem("4PM") != four.val()) {
        four.val(localStorage.getItem("4PM"))
    }
    if (localStorage.getItem("5PM") != five.val()) {
        five.val(localStorage.getItem("5PM"))
    }
    if (localStorage.getItem("6PM") != six.val()) {
        six.val(localStorage.getItem("6PM"))
    }
}
getSavedValues()



 