$(document).ready(function () {
//
    $('#burger').click(function () {
        let mySidebar = $('#mySidebar');
        let burger = $('#burger');
        mySidebar.css('display', 'block');
        burger.css('display', 'none');
    });

 $('#close, .menu-item_side').click(function () {
        let mySidebar = $('#mySidebar');
        let burger = $('#burger');
        mySidebar.css('display', 'none');
        burger.css('display', 'block');
    });

 $('.menu-item_side').click(function () {
        let mySidebar = $('#mySidebar');
        let burger = $('#burger');
        mySidebar.css('display', 'none');
        burger.css('display', 'block');
    });

    $('.three-pro').click(function () {
        let close = $('.close');
        let threePro = $('.three-pro');

        close.css('display', 'block');
        threePro.css('display', 'none');
    });
    $('.close').click(function () {
        let close = $('.close');
        let threePro = $('.three-pro');

        close.css('display', 'none');
        threePro.css('display', 'block');
    });

    $('#nest6, #more, .description-btn').click(function () {
        $('#form_ord')[0].scrollIntoView({behavior: 'smooth'});
    });

    // let phoneInput = $('#phone');
    // phoneInput.inputmask({"mask": "(999) 999-9999"});


        $('.excursion-btn').click(function() {
            $('.popup-fade').css('display', 'block');
            return false;
        });

        $('.close-modal').click(function() {
            $(this).parents('.popup-fade').css('display', 'none');
            return false;
        });

        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').css('display', 'none');
            }
        });

        $('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).css('display', 'none');
            }
        });

    jQuery(window).scroll(function() {

        if (jQuery(this).scrollTop()>6000)
        {
            jQuery('.scroll').css('display', 'none')
        }
        // else
        // {
        //     jQuery('.scroll').css('display', 'block')
        // }
    });




    // document.getElementById('btn-finaly').addEventListener('click', func1);
    // function func1() {


        // var startElement1 = document.getElementById('start');
        // var endElement1 = document.getElementById('end');
        // var startElement2 = document.getElementById('start2');
        // var endElement2 = document.getElementById('end2');
        // var startElement3 = document.getElementById('start3');
        // var endElement3 = document.getElementById('end3');
        // var startElement4 = document.getElementById('start4');
        //     var endElement4 = document.getElementById('end4');
        // var startElement5 = document.getElementById('start5');
        // var endElement5 = document.getElementById('end5');
        //
        //
        //
        //
        //
        //
        // new LeaderLine( startElement1, endElement1,{
        //     color: '#ECC66BFF',
        //         path: 'grid',
        //         size: 1
        //
        // }
        // )
        // new LeaderLine( startElement2, endElement2,{
        //     color: '#ECC66BFF',
        //         path: 'grid',
        //         size: 1
        // }
        // )
        // new LeaderLine( startElement3, endElement3,{
        //     color: '#ECC66BFF',
        //         path: 'grid',
        //         size: 1
        // }
        // )
        // new LeaderLine( startElement4, endElement4,{
        //     color: '#ECC66BFF',
        //         path: 'grid',
        //         size: 1
        // }
        // )
        // new LeaderLine( startElement5, endElement5,{
        //     color: '#ECC66BFF',
        //         path: 'grid',
        //         size: 1
        // }
        // )


        $('.center').slick({
            centerMode: true,
            centerPadding: '0',
            infinite: true,
            dots: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 659,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
//
// //
//
// //
//         $(function () {
//             $("#accordion").accordion({
//                 heightStyle: "content"
//
//             })
//         });
// //
// // // $( "#dialog" ).dialog();
// //     $('.single-item').slick();

        // $('.single-item').slick({
        //     arrows: true
        //
        // });
        //


        //
        $('.image-house-facial').magnificPopup({
            type: 'image',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
        $('.image-house').magnificPopup({
            type: 'image',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        });
        // document.getElementById('btn-finaly').addEventListener('click', func1);

        // function func1() {
        //
        //     let nameInput = document.getElementById('inputName');
        //     let secondName = document.getElementById('inputSName');
        //     let phoneInput = document.getElementById('inputPhone');
        //     let countryInput = document.getElementById('inputCountry');
        //     let indexInput = document.getElementById('inputIndex');
        //     let adressInput = document.getElementById('inputAddress');
        //
        //
        //     if (!nameInput.value) {
        //         alert('Введите Ваше Имя');
        //         return;
        //     }
        //     if (!secondName.value) {
        //         alert('Введите Вашу Фамилию');
        //         return;
        //     }
        //     if (!phoneInput.value) {
        //         alert('Введите Ваш телефон');
        //         return;
        //     }
        //     if (!countryInput.value) {
        //         alert('Введите Вашу страну');
        //         return;
        //     }
        //
        //     if (!indexInput.value) {
        //         alert('Введите Ваш индекс');
        //         return;
        //     }
        //
        //
        //     if (indexInput.value.length !== 6) {
        //         alert(' Поле Индекс должно содержать  6 символов');
        //         return;
        //     }
        //
        //     if (!adressInput.value) {
        //         alert('Введите Ваш адрес');
        //         return;
        //     }
        //
        //     function LoginUp() {
        //
        //
        //         document.getElementsByClassName('modal')[0].style.display = "block";
        //         document.getElementById('forms-input').style.display = "none"
        //     }
        //
        //     LoginUp()


        //     let myModal = document.getElementById('myModal')
        //     let myInput = document.getElementById('myInput')
        //
        //     myModal.addEventListener('shown.bs.modal', function () {
        //         myInput.focus()
        //     })
        //     let modal = document.getElementById("modal_window");
        //
        //
        // }

        new WOW({
            boxClass:     'wow',
            animateClass: 'animate__animated',
            mobile:       true
        }).init();
//
//

})
