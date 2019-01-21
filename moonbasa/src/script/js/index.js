!function () {
    var $weburl = 'http://10.31.161.32/1807/moonbasa/'
    // 头部导航特效
    $('.weixing,.weibo,.phone').hover(function () {
        $(this).children('img').css({
            'display': 'block',
        });
    }, function () {
        $(this).children('img').css({
            'display': 'none',
        });
    })

    $('.cart').hover(function () {
        $('.cartdiv').css({
            'display': 'block',
        });
    }, function () {
        $('.cartdiv').css({
            'display': 'none',
        });
    })

    // 导航移进移出
    // $('.nav_con li').not('.nav_con .li0').hover(function () {
    //     $('.nav_con .second').css({
    //         'display': 'block',
    //     })
    // }, function () {
    //     $('.nav_con .second').css({
    //         'display': 'none',
    //     })
    // })

    $('.nav_con li').not('.nav_con .li0').hover(function () {
        $(this).find('.second').css({
            'display': 'block',
        })
    }, function () {
        $(this).find('.second').css({
            'display': 'none',
        })
    })

    // 轮播图
    $('.banner .btn span').on('mouseover', function () {
        $(this).addClass('active').siblings('span').removeClass('active');
        $('.banner .pic li').eq($(this).index()).addClass('show').siblings('li').removeClass('show');
    });
    var $index = 0;
    var $timer = null;
    $timer = setInterval(function () {
        picswitch();
    }, 2000);
    $('.banner').hover(function () {
        clearInterval($timer);
    }, function () {
        $timer = setInterval(function () {
            picswitch();
        }, 2000);
    })

    function picswitch() {
        $index++;
        if ($index > 11) {
            $index = 0;
        }
        $('.banner .btn span').eq($index).addClass('active').siblings('span').removeClass('active');
        $('.banner .pic li').eq($index).addClass('show').siblings('li').removeClass('show');
    }

    //tab切换
    $('.tab_btn img').first().attr('src', 'http://i0.mbscss.com/img/moonbasa/2018/ydw/M7_16_93701_00.jpg')
    $('.tab_btn img').each(function (index, element) {
        $('.tab_btn img').on('mouseover', function () {
            var index = $(this).index();
            var $img_other = `http://i2.mbscss.com/img/moonbasa/2018/ydw/M7_16_93751_0${index}.jpg`;
            var $img = `http://i0.mbscss.com/img/moonbasa/2018/ydw/M7_16_93701_0${index}.jpg`;
            $('.tab_btn img').each(function (index) {
                var $img_other = `http://i2.mbscss.com/img/moonbasa/2018/ydw/M7_16_93751_0${index}.jpg`;
                $(this).attr('src', $img_other);
            });
            $(this).attr('src', $img);
            $('.tab_con div').eq($(this).index()).show().siblings('div').hide();
        });
    });

    //发现潮流点击图片变化

    var long = -400;
    var num = 0;
    var timer1, timer2
    function upimg1(timer1) {

        if (long / -800 > 1) {
            long = -400;
            $(".box").css({ "left": long + 'px' })
            clearInterval(timer1)

            $('.box').append($('.box a').first())
        }
    }
    function upimg2(timer2) {

        if (long > 0) {
            long = -400;
            $(".box").css({ "left": long + 'px' })
            clearInterval(timer2)
            $('.box').prepend($('.box a').last())
        }
    }

    $('.right').on('click', function (event) {


        timer1 = setInterval(function () {
            long -= 10;
            $(".box").css({ "left": long + 'px' })
            upimg1(timer1)
            event.preventDefault();
        }, 10)
    })
    $('.left').on('click', function (event) {
        timer2 = setInterval(function () {
            long += 10;
            $(".box").css({ "left": long + 'px' })
            upimg2(timer2)
            event.preventDefault();
        }, 10)
    })



    // 幻灯片
    var num = 0;
    var $_timer = 0;
    var flag = true;
    var first = $('.new_con li').first().clone(true);
    var last = $('.new_con li').last().clone(true);
    $('.new_con li').first().before(last);
    $('.new_con ul').append(first);

    $('.new_con ul').css({
        width: $('.new_con li').first().width() * $('.new_con ul').children().size() + 'px',
        left: -$('.new_con li').first().width() + 'px',
    });

    $('.next').on('click', function () {
        if (flag) {
            flag = false;
            num++;
            $('.new_con ul').stop(true).animate({
                left: -$('.new_con li').first().width() * (num + 1),
            }, function () {
                if (num == 6) {
                    $('.new_con ul').css({
                        left: -$('.new_con li').first().width() + 'px',
                    });
                    num = 0;
                } else if (num == -1) {
                    $('.new_con ul').css({
                        left: -$('.new_con li').first().width() * $('.new_con li').size() + 'px',
                    });
                    num = $('.new_con li').size() - 1;
                }
                flag = true;
            });
        }


    });


    $('.prev').on('click', function () {
        if (flag) {
            flag=false;
            num--;
            $('.new_con ul').stop(true).animate({
                left: -$('.new_con li').first().width() * (num + 1),
            }, function () {
                if (num == $('.new_con li').size()) {
                    $('.new_con ul').css({
                        left: -$('.new_con li').first().width() + 'px',
                    });
                    num = 0;
                } else if (num == -1) {
                    $('.new_con ul').css({
                        left: -$('.new_con li').first().width() * 6 + 'px',
                    });
                    num = 5;
                }
                flag = true;
            });
        }

    })

    $_timer = setInterval(function () {
        $('.next').click();
    }, 3000);
    $('.new_con').hover(function () {
        clearInterval($_timer);
    }, function () {
        $_timer = setInterval(function () {
            $('.next').click();
        }, 3000);
    })


    // 底部hover特效 
    $('.qx').hover(function () {
        $('.qxpp').show();
    }, function () {
        $('.qxpp').hide();
    })

    //回到顶部
    $('.side_top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0,
        }, 2000);
    })

    //登录后
    if (getcookie('tel')) {
        $('.my').show();
        $('.cusname').html(getcookie('tel'));
        $('.mymbs').hover(function () {
            $('ul').show();
            $('.mymbs').css({
                border: '1px solid #797979',
            })
        }, function () {
            $('ul').hide();
            $('.mymbs').css({
                border: 0,
            })
        });

    } else {
        $('.my').hide();
    }

    $('.tuichu').on('click', function () {
        $('.my').hide();
        delcookie('tel');
    });


    //侧边栏效果
    $('.side_my').hover(function () {
        $('.my_con').show();
        $('.my_con span').on('click', function () {
            $('.my_con').hide();
        })
    }, function () {
        $('.my_con').hide();
    })

    if (getcookie('cookienum')) {
        var $arr = getcookie('cookienum').split(',');
    }

    var $sum = 0;
    $.each($arr, function (index, value) {
        $sum += parseInt(value);
    })
    $('.side_cart .number').html($sum);
    $('.side_cart').on('click', function () {
        location.href = $weburl + 'src/cart.html'
    });
    $('.side_chat').hover(function () {
        $('.code').show();
    }, function () {
        $('.code').hide();
    })


    // 拼接猜你喜欢数据

    $.ajax({
        url: $weburl + 'php/goodsdata.php',
        dataType: 'json',
    }).done(function (data) {
        var $str = "";
        $.each(data, function (index, value) {
            $str += `<dl>
            <dt>
                <a target="_blank" href="${$weburl}src/details.html?sid=${value.sid}">
                    <img src="${value.url}" alt="${value.title}">
                </a>
            </dt>
            <dd>
                <a target="_blank" href="${$weburl}src/details.html?sid=${value.sid}">			
                    <span class="title">${value.title}</span>			
                    <span class="price">￥${value.price}
                        <span class="del">
                            <del>￥${value.delprice}</del>
                        </span>
                    </span>		
                </a>
            </dd>
        </dl>`;
        });
        $('.recom_con').html($str);
    });
}(jQuery)


