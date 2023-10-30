let loader = $('.loader')



$('#submit').click(function () {

    let name = $('#name');
    let phone = $('#phone');
    let check = document.getElementById('checkedd');
    check.onclick = (e) => {
        if (check.checked) {

            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    }
    let hasError = false;

    $('.error_input').hide();

    name.css('border', '1px solid white');
    phone.css('border', '1px solid white');


    if (!name.val()) {
        name.next().show();
        hasError = true;
        name.css('border', '1px solid red');

    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        phone.css('border', '1px solid red');

    }

    if (!check.checked) {
        alert('Условия не приняты');
        return;
    }

    if (!hasError) {


        loader.css('display', 'flex');

        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: { name: name.val(), phone: phone.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    $('.order_ok').css('display', 'flex');
                    $('.ordering__form_order').css('display', 'none');
                } else {
                    alert('Возникла ошибка, попробуйте еще раз')
                }
                console.log(msg);
            });

    }

})




$('#submit_modal').click(function () {

    let nameM = $('#name_modal');
    let phoneM = $('#phone_modal');
    let checkM = document.getElementById('checkedd_modal');
    checkM.onclick = (e) => {
        if (checkM.checked) {

            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    }
    let hasError = false;

    $('.error_input').hide();

    nameM.css('border', '1px solid white');
    phoneM.css('border', '1px solid white');


    if (!nameM.val()) {
        nameM.next().show();
        hasError = true;
        nameM.css('border', '1px solid red');

    }
    if (!phoneM.val()) {
        phoneM.next().show();
        hasError = true;
        phoneM.css('border', '1px solid red');

    }

    if (!checkM.checked) {
        alert('Условия не приняты');
        return;
    }

    if (!hasError) {


        loader.css('display', 'flex');

        $.ajax({
            method: "POST",
            url: "http://testologia.site/checkout",
            data: { name: nameM.val(), phone: phoneM.val()}
        })
            .done(function (msg) {
                loader.hide();
                if (msg.success) {
                    $('.order_ok_modal').css('display', 'flex');
                    $('.order-info_modal').css('display', 'none');
                    $('.popup').css('width', '705px');
                    $('.popup').css('height', '405px');

                } else {
                    alert('Возникла ошибка, попробуйте еще раз')
                }
                console.log(msg);
            });

    }

})