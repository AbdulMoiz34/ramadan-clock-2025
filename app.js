let date;
let intervalId;
function onClickHandler() {
    document.querySelector(".expected-date").style.display = "none";
    document.querySelector(".remaining-time-container").style.display = "block";
    date = event.target.textContent + "2025";
    remainingTimerAnim();
    updateCountdown();
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
}

function toggleMode() {
    console.log("run");
    document.body.classList.toggle("dark-mode");
}

anim();