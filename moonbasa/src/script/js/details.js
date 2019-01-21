; !function () {
    //获取图片id
    var $picid = location.search.substring(1).split("=")[1];


    $.ajax({
        url: 'http://10.31.161.32/1807/moonbasa/php/details.php',
        data: {
            sid: $picid,
        },
        dataType: 'json',
    }).done(function (data) {

        var srcstr = data.src;
        var srcarr = srcstr.split(',');


        $('.spic img').attr('src', data.url)
        $('.bf img').attr('src', srcarr[0]);
        $('.product_mid h2').html(data.title);
        $('.leftPrice b').html(data.price);
        $('.rightPrice del').html(data.delprice);
        $('.spanColork img').attr('src', data.url);


        var $str = "<ul class='list'>";
        $.each(srcarr, function (index, value) {
            $str += `
            <li><a href=""><img src="${value}" alt=""></a></li>
            `;
        });
        $str += "</ul>";
        $('.pic_list').html($str);
    });
    //时间委托改边框和图片地址
    $('.pic_lubo').on('mouseover', '.list img', function (ev) {
        // console.log($(this));
        $(this).addClass('hover').parents('li').siblings('li').find('img').removeClass();
        $('.spic img').attr('src', $(this).attr('src'));
        $('.bpic').attr('src', $(this).attr('src'));
    })

    // 查看
    $('.uaresb').on('click', function () {
        $('.active').show();
    });
    $('#hidemytb').on('click', function () {
        $('.active').hide();
    })


    // 数量加减
    $('.reduce').on('click', function () {
        var $count = parseInt($('.num b').html());
        if ($count > 1) {
            $count--;
        } else {
            $count = 1;
            $(this).css({
                "color": "#ccc",
                "cursor": "not-allowed",
            });
        }
        $('.num b').html($count);
    });

    $('.add').on('click', function () {
        var $count = parseInt($('.num b').html());
        $count++;
        $('.num b').html($count);
    });





    //点击按钮将商品的数量和id存放cookie中
    var arrsid = [];
    var arrnum = [];

    //获取cookie里面id和num
    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');
            arrnum = getcookie('cookienum').split(',');
        }
    }

    $('.join').on('click', function () {
        cookietoarray();
        if ($.inArray($picid, arrsid) != -1) {
            var num = parseInt(parseInt(arrnum[$.inArray($picid, arrsid)]) + parseInt($('.num b').html()));
            console.log(num);
            arrnum[$.inArray($picid, arrsid)] = num;
            addcookie('cookienum', arrnum.toString(), 10);
        } else {
            arrsid.push($picid);
            addcookie('cookiesid', arrsid.toString(), 10);
            arrnum.push($('.num b').html());
            addcookie('cookienum', arrnum.toString(), 10);
        }

        var $arr = getcookie('cookienum').split(',');
        var $sum = 0;
        $.each($arr, function (index, value) {
            $sum += parseInt(value);
        })
        $('.mask').show();
        $('.mola').show();
        $('.mola b').html($sum);
        $('.close,.shopping').on('click', function () {
            $('.mask').hide();
            $('.mola').hide();
        })

    });


    $('.buy').on('click', function () {
        cookietoarray();
        if ($.inArray($picid, arrsid) != -1) {
            var num = parseInt(parseInt(arrnum[$.inArray($picid, arrsid)]) + parseInt($('.num b').html()));
            arrnum[$.inArray($picid, arrsid)] = num;
            addcookie('cookienum', arrnum.toString(), 10);
        } else {
            arrsid.push($picid);
            addcookie('cookiesid', arrsid.toString(), 10);
            arrnum.push($('.num b').html());
            addcookie('cookienum', arrnum.toString(), 10);
        }
        window.location.href = 'http://10.31.161.32/1807/moonbasa/src/cart.html';
    });


    // 头部导航特效
    $('.weixing,.weibo,.phone').hover(function () {
        $(this).children('img').show();
    }, function () {
        $(this).children('img').hide();
    });

    $('.cart').hover(function () {
        $('.cartdiv').show();
    }, function () {
        $('.cartdiv').hide();
    });

}(jQuery)

    ; !function ($) {
        //放大镜
        $('.spic').on('mouseover', function () {
            $('.sf,.bf').show();
            $('.sf').width($('.spic').width() * $('.bf').width() / $('.bpic').width());
            $('.sf').height($('.spic').height() * $('.bf').height() / $('.bpic').height());
            var $ratio = $('.bf').width() / $('.sf').width();

            $(document).on('mousemove', function (ev) {
                var ev = ev || window.event;
                var $l = ev.pageX - $('.pic').offset().left - $('.sf').width() / 2;
                var $t = ev.pageY - $('.pic').offset().top - $('.sf').height() / 2;

                if ($l < 0) {
                    $l = 0
                } else if ($l >= $('.spic').width() - $('.sf').width()) {
                    $l = $('.spic').width() - $('.sf').width();
                }

                if ($t < 0) {
                    $t = 0
                } else if ($t >= $('.spic').height() - $('.sf').height()) {
                    $t = $('.spic').height() - $('.sf').height();
                }

                $('.sf').css({
                    left: $l,
                    top: $t,
                });

                $('.bpic').css({
                    left: -$l * $ratio,
                    top: -$t * $ratio,
                })

            });

        });


        $('.spic').on('mouseout', function () {
            $('.sf,.bf').hide();
        })

    }(jQuery)