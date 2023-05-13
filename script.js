const hour = document.getElementById('hour');
const minute = document.getElementById("minute");
const seonds = document.getElementById("seonds");


const clock = setInterval(
    function time() {
        const dateNow = new Date();
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let sec = dateNow.getSeconds();

        hr = hr.toString().padStart(2, '0');
        min = min.toString().padStart(2, '0');
        sec = sec.toString().padStart(2, "0");

        hour.textContent = hr;
        minute.textContent = min;
        seonds.textContent = sec;


    }, 1000 //1s




)