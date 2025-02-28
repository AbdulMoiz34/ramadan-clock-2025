let date;
let intervalId;
const expectedDateContainer = document.querySelector(".expected-date");
const showTimeContainer = document.querySelector(".remaining-time-container");
function onClickHandler() {
    const audio = document.getElementById("bg-audio");
    audio.play();
    expectedDateContainer.style.display = "none";
    showTimeContainer.style.display = "block";
    date = event.target.textContent + "2025";
    remainingTimerAnim();
    updateCountdown();
}

function goBackBtnHandler() {
    expectedDateContainer.style.display = "block";
    showTimeContainer.style.display = "none";
}
// let i = 0
function updateCountdown() {
    // i++
    // console.log(i);
    if (intervalId) {
        clearInterval(intervalId);
    }
    const ramadanDate = new Date(date);

    const now = new Date();
    // Handle past dates
    if (now > ramadanDate) {
        document.querySelector('.clock').innerHTML = '<p>Ramadan has begun!</p>';
        return;
    }

    const tempDate = new Date(now);

    // Calculate remaining time components
    const timeDifference = ramadanDate - tempDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update display with zero-padding
    document.querySelector('.days').textContent = days.toString().padStart(2, '0');
    document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
    document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    intervalId = setInterval(updateCountdown, 1000);
}

const ramadanTimings = [
    { date: "March 2, 2025", sehri: "5:37 AM", iftar: "6:36 PM" },
    { date: "March 3, 2025", sehri: "5:36 AM", iftar: "6:36 PM" },
    { date: "March 4, 2025", sehri: "5:35 AM", iftar: "6:37 PM" },
    { date: "March 5, 2025", sehri: "5:34 AM", iftar: "6:37 PM" },
    { date: "March 6, 2025", sehri: "5:33 AM", iftar: "6:38 PM" },
    { date: "March 7, 2025", sehri: "5:32 AM", iftar: "6:38 PM" },
    { date: "March 8, 2025", sehri: "5:31 AM", iftar: "6:39 PM" },
    { date: "March 9, 2025", sehri: "5:30 AM", iftar: "6:39 PM" },
    { date: "March 10, 2025", sehri: "5:29 AM", iftar: "6:39 PM" },
    { date: "March 11, 2025", sehri: "5:28 AM", iftar: "6:40 PM" },
    { date: "March 12, 2025", sehri: "5:27 AM", iftar: "6:40 PM" },
    { date: "March 13, 2025", sehri: "5:26 AM", iftar: "6:41 PM" },
    { date: "March 14, 2025", sehri: "5:25 AM", iftar: "6:41 PM" },
    { date: "March 15, 2025", sehri: "5:24 AM", iftar: "6:42 PM" },
    { date: "March 16, 2025", sehri: "5:23 AM", iftar: "6:42 PM" },
    { date: "March 17, 2025", sehri: "5:22 AM", iftar: "6:43 PM" },
    { date: "March 18, 2025", sehri: "5:21 AM", iftar: "6:43 PM" },
    { date: "March 19, 2025", sehri: "5:20 AM", iftar: "6:44 PM" },
    { date: "March 20, 2025", sehri: "5:19 AM", iftar: "6:44 PM" },
    { date: "March 21, 2025", sehri: "5:18 AM", iftar: "6:44 PM" },
    { date: "March 22, 2025", sehri: "5:17 AM", iftar: "6:45 PM" },
    { date: "March 23, 2025", sehri: "5:16 AM", iftar: "6:45 PM" },
    { date: "March 24, 2025", sehri: "5:15 AM", iftar: "6:46 PM" },
    { date: "March 25, 2025", sehri: "5:14 AM", iftar: "6:46 PM" },
    { date: "March 26, 2025", sehri: "5:12 AM", iftar: "6:47 PM" },
    { date: "March 27, 2025", sehri: "5:11 AM", iftar: "6:47 PM" },
    { date: "March 28, 2025", sehri: "5:10 AM", iftar: "6:47 PM" },
    { date: "March 29, 2025", sehri: "5:09 AM", iftar: "6:48 PM" },
    { date: "March 30, 2025", sehri: "5:08 AM", iftar: "6:48 PM" },
    { date: "March 31, 2025", sehri: "5:07 AM", iftar: "6:49 PM" }
];

function showCalender() {
    calnderAnim();
    document.querySelector(".calender").style.display = "block";
    showTimeContainer.style.display = "none";
    const table = document.querySelector(".calender table");
    let i = 0;
    for (let day of ramadanTimings) {
        i++
        table.innerHTML += `<tr>
                        <td>${i}</td>
                        <td>${day.iftar}</td>
                        <td>${day.sehri}</td>
                        <td>${day.date}</td>
                    </tr>`;
    }
    setInterval(function () {
        displayDate();
    }, 1000);
}

function anim() {
    const timeline = gsap.timeline();
    // header animation
    timeline.from("header :is(.logo, .switch)", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: .5
    });
    //    expected date animation
    timeline.from(".expected-date h2 , .expected-date>div>button", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
        stagger: .4,
    });

    // footer animation
    timeline.from("footer>a", {
        x: -20,
        opacity: 0,
        stagger: .5,
    });

    // top image animation
    timeline.from(".top-img", {
        y: -10,
        opacity: 0
    });

    // end image animation
    timeline.from(".bottom-img", {
        y: 20,
        opacity: 0,
    });
}
// remaining-time-container function
function remainingTimerAnim() {
    console.log("CLICKED");
    const tl = gsap.timeline();

    tl.from(".remaining-time-container :is(h1)", {
        x: 100,
        opacity: 0
    });

    tl.from(".clock>div", {
        x: 100,
        opacity: 0,
        stagger: .3
    });
    tl.from(".back-btn", {
        x: 10,
        opacity: 0,
    });
}


// calender animation
function calnderAnim() {
    gsap.from(".calender", {
        opacity: 0,
        duration: 3,
        delay: .5
    });
}
function toggleMode() {
    console.log("run");
    document.body.classList.toggle("dark-mode");
}
function displayDate() {
    const current = new Date();
    const showDate = document.querySelector(".date");
    const showTime = document.querySelector(".time");
    showDate.innerHTML = current.toDateString();
    showTime.innerHTML = current.toLocaleTimeString();
}

anim();