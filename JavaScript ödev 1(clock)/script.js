const promptName = prompt("Lütfen adınızı giriniz.")
document.querySelector("#userName").innerText = promptName.toUpperCase()



function showCurrentDayAndTime() {
    const date = new Date()
    let [hour, minute, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()]
    let dayName = " "
    let turkishDay = (day + 7) % 7
    switch (turkishDay) {

        case 1:
            dayName = "pazartesi"
            break;

        case 2:
            dayName = "Sali"
            break;

        case 3:
            dayName = "çarşamba"
            break;

        case 4:
            dayName = "perşembe"
            break;

        case 5:
            dayName = "Cuma"
            break;

        case 6:
            dayName = "cumartesi"
            break;

        case 7:
            dayName = "pazar"
            break;
    }

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    setTimeout(showCurrentDayAndTime, 1000);

    const infoTimer = `${hour}:${minute}:${second}-${dayName}`
    document.querySelector("#myTime").innerText = infoTimer.toUpperCase()
}
showCurrentDayAndTime();