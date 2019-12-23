var date = moment().format('MMMM Do YYYY, h:mm:ss a')
$("#currentDay").append(date)
var date = moment().hour()




// var time = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

// var image = images / locks.jpg
var time = [8, 10, 11, 12, 13, 14, 15, 16, 17]
// made a function that used all separate values of time variable
time.forEach(function (id, i) {

    var hours = time[i]
    var timeValue;
    // changing the value of time to hours instead of military time
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
    var newrow = $("<tr><Td class='hour'>" + timeValue + "</td><td><textarea id= " + [i] + "></textarea></td><td><button class= " + [i] + ">a</button></td></tr>")
    $(".container").append(newrow)

    $("." + [i]).on("click", function () {
        event.preventDefault();
        console.log($("#" + i).val());

        $("#" + i).each(function () {
            var user = $("#" + i).val();
            localStorage.setItem("user", user);
            console.log(user);

            $("#" + i).text(localStorage.user[i])
            console.log($("#" + i).text(localStorage.user));


        })
    })

    $(document).ready(function () {
        $("#" + i).text(localStorage.user)
        $("#" + i).each(function () {
            // checked if the data i was looking for was correct
            // console.log("#" + i)
            // console.log(time[i] < date)
            // console.log(time[i] > date)

            // created the color deciding statement
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


// adding classes to the button
$("button").attr("class", "saveBtn time-block")

