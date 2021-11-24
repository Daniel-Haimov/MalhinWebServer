let i = 0;
if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 1000);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
        }
    }
}