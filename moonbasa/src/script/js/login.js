; !function () {
    $('.submit').on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://10.31.161.32/1807/moonbasa/php/login.php',
            data: {
                tel: $('.tel').val(),
                password: $('.password').val(),
            },
        }).done(function (data) {
            if (data) {
                addcookie('tel', $('.tel').val(), 7);
                location.href = 'http://10.31.161.32/1807/moonbasa/src/index.html';

            } else {
                alert('用户名或者密码错误');
            }
        })
    })
}(jQuery)