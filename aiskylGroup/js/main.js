// start scroll to price

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// end scrool to price


// start modal window

const modal = document.getElementById("_customer-my__modal");
const btn = document.getElementById("_customer-btn__modal__window");
const span = document.getElementsByClassName("_customer-close__modal__window")[0];
const send = document.getElementById("_customer-form-send");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

send.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// end modal window


// start mask in a phone

const selector = document.getElementById("_customer-phone");
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(phone);

// end mask in a phone



// start slider swiper

const swiper1 = new Swiper('._customer-comment__items', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        780: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});
const swiper2 = new Swiper('._customer-clients__items', {
    slidesPerView: 5,
    loop: true,
    mousewheel: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
        850: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        },
    },
    autoplay: {
        delay: 4000,
    },
});

// end slider swiper