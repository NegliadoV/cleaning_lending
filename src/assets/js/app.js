


let header = document.querySelector('.header')

let posY = innerHeight / 1.2

let headerLogo = document.querySelector('#headerLogo');
let headerInner = document.querySelector('#headerInner');


window.addEventListener('scroll', function () {


    if (pageYOffset > posY ) {
        header.classList.add('fixed')

    } else {
        header.classList.remove('fixed');

    }

    if (this.pageYOffset > posY) {
        headerLogo.style.display = ('none')
    }
    else {
        headerLogo.style.display = ('block')
    }

    if (this.pageYOffset > posY) {
        headerInner.classList.add('header__inner-fix')
    }
    else {
        headerInner.classList.remove('header__inner-fix')
    }

})


let select = function() {
    let selectInner = document.querySelectorAll('.select__inner')
    let selectValue = document.querySelectorAll('.select__value')

    selectInner.forEach(item => {
        item.addEventListener('click', selectToggle)
    })

    selectValue.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active')
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = this.closest('.select').querySelector('.select_placeholder')
            currentText.innerText = text;
            select.classList.remove('is-active')

    }
}

select()



//Calculation


const selectText = document.querySelectorAll('option')
const inputLeft = document.querySelector('#inputLeft')
const inputRight = document.querySelector('#inputRight')
const totalPrice = document.querySelector('#totalPrice')


inputLeft.addEventListener('input', function() {
    inputLeft.value
})

inputRight.addEventListener('input', function() {
    inputRight.value
})


for(const item of selectText) {
    item.addEventListener('click', function() {
       let selectOpcion = item.value

       btnIntro.onclick = function btnClic() {

   let totalSumm = selectOpcion *  inputLeft.value + (inputRight.value * 150);

   const formater = new Intl.NumberFormat('ru')

   totalPrice.innerText = formater.format(totalSumm)

        }
    })
}



//Button price service

let btnService = document.querySelectorAll('a[href*="#linkFeedback"]')

    for (const btnItem of btnService) {
        btnItem.addEventListener('click', function (e) {
            e.preventDefault()

            const blockId = btnItem.getAttribute('href')

            document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
            })

        })
    }

    //click nav

    let clickNav = document.querySelectorAll('#navLinck')

     for (const clickItem of clickNav) {
        clickItem.addEventListener('click', function (e) {
            e.preventDefault()

            const blockId = clickItem.getAttribute('href')

            document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
            })

        })
    }


// button up


$(function () {
  $(window).scroll(function () {
  if ($(this).scrollTop() > 300) $('a#move_up').fadeIn(200);
  else $('a#move_up').fadeOut(400);
  });
  $('a#move_up').click(function () {
  $('body,html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });
});


//animacion burger

const navBurger = document.querySelector('.nav__burger');




    if (navBurger) {
       const burgerMenu = document.querySelector('.ul__burger')

        navBurger.addEventListener('click', function burgerOpen (e) {
             navBurger.classList.toggle('open');
             burgerMenu.classList.toggle('active');

});

    }