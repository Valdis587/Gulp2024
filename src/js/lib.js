document.addEventListener('DOMContentLoaded', ()=>{
    if(window.innerWidth < 960) {
    var mobMenuOpen = document.querySelector('.header__mob-menu');
    var mobMenuClose = document.querySelector('.header__mob-menu-close');
    var mobPanel = document.querySelector('.header__menu-nav');
    mobMenuOpen.onclick=function() {
    mobPanel.classList.add('menu-nav-open');
    }
    mobMenuClose.onclick=function() {
       mobPanel.classList.remove('menu-nav-open');
    }
}
if(window.innerWidth > 850) {
//popup show//
if(document.querySelector('.popup__body')) {
    let messagePopup = document.querySelector('.popup__body');
    window.addEventListener('load', ()=> {
       setTimeout(() => {
          messagePopup.classList.add('pop-open');
          messagePopup.classList.add('popup__show');
        }, 5000);
       });
    }
   
    // end popup show//
   
    // popup close //
   var popupButtonClose = document.getElementsByClassName('popup__close');
   var popupBody = document.getElementsByClassName('popup__body');
   popupButtonClose[0].onclick = function() {
    popupBody[0].classList.remove('pop-open');
   } 
   // end popup close // 
}


});