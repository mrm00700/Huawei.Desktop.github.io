const btn1 = document.querySelector('.corporate-btn')
const btn2 = document.querySelector('.worldwide-btn')
const nav1 = document.querySelector('.corporate-nav')
const nav2 = document.querySelector('.worldwide-nav')
const arrow = document.querySelectorAll('.arrow')

let open1 = false;
let open2 = false;

btn1.addEventListener('click', function () {
    if (open2 == true) {
        hide_nav2();
        show_nav1();
    }
    else {
        if (open1 == true) {
            hide_nav1();
        }
        else {
            show_nav1();
        }

    }

})
btn2.addEventListener('click', function () {
    if (open1 == true) {
        hide_nav1();
        show_nav2();
    }
    else {
        if (open2 == true) {
            hide_nav2();
        }
        else {
            show_nav2();
        }

    }

})

function show_nav1() {
    open1 = true;
    nav1.style.height = '188px';
    arrow[0].classList.remove('fa-caret-down')
    arrow[0].classList.add('fa-caret-up')
    btn1.classList.add('show')
}
function hide_nav1() {
    open1 = false;
    nav1.style.height = '0';
    arrow[0].classList.add('fa-caret-down')
    arrow[0].classList.remove('fa-caret-up')
    btn1.classList.remove('show')

}
function show_nav2() {
    open2 = true;
    nav2.style.height = '500px';
    arrow[1].classList.remove('fa-caret-down')
    arrow[1].classList.add('fa-caret-up')
    btn2.classList.add('show')
    
}
function hide_nav2() {
    open2 = false;
    nav2.style.height = '0';
    arrow[1].classList.add('fa-caret-down')
    arrow[1].classList.remove('fa-caret-up')
    btn2.classList.remove('show')

}