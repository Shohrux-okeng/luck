const time = document.querySelector(".time");
const day = document.querySelector(".day");
const date = document.querySelector(".date");

function timeFormat (){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second

    return `${hour}:${minute}:${second}`
}

function dayFormat(){
    let date = new Date()
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekDays[date.getDay()]
}

time.innerHTML = timeFormat()
day.innerHTML = dayFormat()

setInterval(() => {
    time.innerHTML = timeFormat()
    day.innerHTML = dayFormat()
}, 1000);


function dateFormat() {
    let dateObj = new Date();
    let day = dateObj.getDate();
    let monthNames = [
        "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.",
        "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ];
    let month = monthNames[dateObj.getMonth()];
    let year = dateObj.getFullYear();

    return `${day}-${month} ${year}`;
}
date.innerHTML = dateFormat();

setInterval(() => {
    time.innerHTML = timeFormat();
    day.innerHTML = dayFormat();
    date.innerHTML = dateFormat();
}, 1000);
