const countdown = () => { 
    const countDate = new Date('May 17, 2023 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = 1000 * 60;
    const hour = 1000 * 60 * 60;
    const day = 1000 * 60 * 60 * 24 //millisecond

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)
    console.log(textDay)

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
}

setInterval(countdown, 1000);
 