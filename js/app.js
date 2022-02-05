var check = document.querySelector(".check")
check.addEventListener('click', lenguage)

function lenguage() {
    let id = check.checked;
    if (id===true) {
        location.href="es/index.html"
    } else {
        location.href="/index.html"
    }
}