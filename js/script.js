let menu = document.querySelector("#nav-toggle") ;
let navbar = document.querySelector(".navigation") ;

menu.onclick = () =>{
    menu.classList.toggle("open"); 
    navbar.classList.toggle("open");
    }

window.onscroll = () => {
    menu.classList.remove("open");
    navbar.classList.remove("open");   
}


// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     let currentScrollpos = window.pageYOffset;
//     if (prevScrollpos > currentScrollpos) {
//         document.querySelector('#navbar').style.top = '0';
//     } else {
//         document.querySelector('#navbar').style.top = '-100px';
//     }
//     prevScrollpos = currentScrollpos;
// };


const dropdown = document.querySelector('.dropdownSatu');
    dropdown.addEventListener('click', function(){
        dropdown.classList.toggle('show');
    });
   


const menuAktif = document.querySelectorAll('.menu');
menuAktif.forEach((element)=>{
    element.addEventListener('click', function(){
        menuAktif.forEach((element)=>{
            element.classList.remove('active');
        });
        this.classList.add('active');
    });
});


const list = document.querySelectorAll('.list')
const itemBox = document.querySelectorAll('.item-box')

list.forEach((elem)=>{
    elem.addEventListener('click',function(){
        list.forEach((elem)=>{
            elem.classList.remove('active');
        });
        this.classList.add('active');

        let value = this.getAttribute('data-filter');
        itemBox.forEach(element=>{
            element.classList.add('hide');
            if(element.getAttribute('data-item') == value || value == "all"){
                element.classList.remove('hide');
            }
        })

    })
});

(function($) { 

    function thmbxSlider() {
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').bxSlider({
                adaptiveHeight: true,
                auto: true,
                controls: true,
                pause: 5000,
                speed: 500,
                pager: true,
                pagerCustom: '.pager-one, .pager-two'
            });
        }
    }

    $(window).on('load', function() {
    
        thmbxSlider();
    });

})(jQuery);