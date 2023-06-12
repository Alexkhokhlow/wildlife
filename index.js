let n = 1
let slider = document.getElementsByClassName("main_slider_img")[0]
let sliderChildrens = slider.children

function rightClick() {

    for (let i = 0; i < sliderChildrens.length; i++) {

        sliderChildrens[i].style.order = (n + i) % sliderChildrens.length
        checkWindowWidth(i)
    }
    n++
}

function leftClick() {
    for (let i = 0; i < sliderChildrens.length; i++) {
        sliderChildrens[i].style.order = (n + i + 1) % sliderChildrens.length
        checkWindowWidth(i)
    }
    n = n + 2
}

function checkWindowWidth(i) {
    if (window.innerWidth <= 1024) {
        if (sliderChildrens[i].style.order == 2) {
            sliderChildrens[i].style.display = "none"

        } else {
            sliderChildrens[i].style.display = "flex"
        }
    }

    if (window.innerWidth <= 380) {
        if (sliderChildrens[i].style.order == 2 || sliderChildrens[i].style.order == 1) {
            sliderChildrens[i].style.display = "none"
        } else {
            sliderChildrens[i].style.display = "flex"
        }
    }
}
