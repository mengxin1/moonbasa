; !function () {

    $('#tel').on('keyup',function(){
        $('#tel-error').css({
            color:'red',
        });
    });



    $(function () {
        $("#checkform").validate({
            rules: {
                tel: {
                    required: true,//不能为空
                    digits: true,
                    minlength: 11,//长度必须大于等于5
                    maxlength: 11,//最大长度是10
                    remote: {//将前端的username给后端
                        url: "http://10.31.161.32/1807/moonbasa/php/registor.php",
                        type: "post",
                    }
                },
                password: {
                    required: true,
                    digits: true,
                    minlength: 6,
                },
                password2: {
                    required: true,
                    digits: true,
                    equalTo: "[name='password']"
                },
                check: {
                    required: true,
                },
            },
            messages: {
                tel: {
                    required: '用户名不能为空',
                    minlength: '用户名不能小于11',
                    maxlength: '用户名不能大于11',
                    remote: '用户名已存在'
                },
                password: {
                    required: '密码不能为空',
                    digits: '密码必须为整数',
                    minlength: '密码不能小于6位',
                },
                password2: {
                    required: '确认密码不能为空',
                    equalTo: '两次输入密码不一致',
                },
                check: {
                    required:'必选',
                },
            }
        });
    });
    $.validator.setDefaults({
        success: function (label) {
            label.html('√').css('color', 'green').addClass('valid');
        }
    })
    
$('.tex1').on('click',function(){
    location.href='http://10.31.161.32/1807/moonbasa/src/login.html';
    $('.tex1').css({
        color:'#000',
    });
});
console.log($('.tex1'));




    $('#tel').on('blur', function () {
            $.ajax({
                type: 'post',
                url: 'http://10.31.161.32/1807/moonbasa/php/registor.php',
                data: {
                    tel: $('.phone input').val(),
                }
            })
    })
}(jQuery)