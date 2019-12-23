var date = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").append(date)
var date = moment().hour()



// var time = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

// var image = images / locks.jpg
var time = [8, 10, 11, 12, 13, 14, 15, 16, 17]
// for (i = 0; i < time.length; i++) {
time.forEach(function (id, i) {
    // console.log(time[i])
    var hours = time[i]
    var timeValue;

    if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
    } else if (hours == 0) {
        timeValue = "12";
    }
    timeValue += (hours >= 12) ? " P.M." : " A.M.";
    // console.log(timeValue)

    // creating a row with 3 colums the first one taking an index from the variable time, the second containing a textare and the third containing a button.
    var newrow = $("<tr><Td class='hour'>" + timeValue + "</td><td><textarea id=" + [i] + "></textarea></td><td><button id=" + [i] + ">a</button></td></tr>")
    $(".container").append(newrow)

    $("button").on("click", function () {
        event.preventDefault();
        event.stopPropagation();
        console.log($("textarea " + [i]).data("id"));

        var user = $("textarea").val();
        localStorage.setItem("user", user);
    })

    // function render() {
    //     var user = $("textarea").val().trim();
    //     $("textarea").text(user)
    //     console.log(user);
    //     localStorage.setItem("user", user);
    //     console.log(localStorage.setItem("user", 7user)));

    // }
    console.log(time[i]);
    console.log(date);



    $(document).ready(function () {

        $("#" + i).each(function () {
            console.log("#" + i)
            console.log(time[i] < date)
            console.log(time[i] > date)

            if (time[i] < date) {
                $("#" + i).attr("class", "past")
            } else if (time[i] > date) {
                $("#" + i).attr("class", "future")
            } else {
                $("#" + i).attr("class", "present")
            }

        });
    });
})



// $("textarea").attr("class", "past")
// $("textarea").attr("class", "present")
// $("textarea").attr("class", "future")
$("button").attr("class", "saveBtn time-block")

// {/* <img src='images/locks.jpg'></img> */ }

// $("button").on("click", function () {
//     event.preventDefault();
//     var user = $("textarea").val();
//     localStorage.setItem("user", user);
// })

function render() {
    var user = localStorage.getItem("user");
    $("textarea").text(user)
}
render();

// var hours = time[i]
// var timeValue;

// if (hours > 0 && hours <= 12) {
//     timeValue = "" + hours;
// } else if (hours > 12) {
//     timeValue = "" + (hours - 12);
// } else if (hours == 0) {
//     timeValue = "12";
// }
// timeValue += (hours >= 12) ? " P.M." : " A.M.";
// console.log(timeValue)



