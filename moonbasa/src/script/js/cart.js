; !function () {
    //拼接商品列表
    function goodslist(id, count) {
        $.ajax({
            url: 'http://10.31.161.32/1807/moonbasa/php/goodsdata.php',
            dataType: 'json'
        }).done(function (data) {
            $.each(data, function (index, value) {
                if (id == value.sid) {
                    var $clonebox = $('.sel:hidden').clone(true, true);
                    $clonebox.find('.left').find('img').attr('src', value.url);
                    $clonebox.find('.left').find('img').attr('sid', value.sid);
                    $clonebox.find('.spmc').find('a').html(value.titile);
                    $clonebox.find('.price').find('span').html(value.price);
                    $clonebox.find('.sl').find('input').val(count);
                    $clonebox.find('.jexj').find('span').html((value.price * count).toFixed(2));
                    $clonebox.css('display', 'block');
                    $('.shop').append($clonebox);
                    priceall();
                }
            });
        });
    }

    //2.获取cookie，执行渲染列表的函数
    if (getcookie('cookiesid') && getcookie('cookienum')) {
        var s = getcookie('cookiesid').split(',');
        var n = getcookie('cookienum').split(',');
        for (var i = 0; i < s.length; i++) {
            goodslist(s[i], n[i]);

        }
    }

    //3.如果购物车为空，显示section盒子(购物车空空的)
    kong();
    function kong() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            $('.section').hide();
            $('.paym').show()
        } else {
            $('.section').show();
            $('.paym').hide();
        }
    }

    //4.计算总价和总的商品件数
    function priceall() {
        var $sum = 0;
        var $count = 0;
        $('.sel:visible').each(function (index, element) {
            if ($(element).find('.top input').prop('checked')) {
                $sum += parseInt($(element).find('.sl').find('input').val());
                $count += parseFloat($(element).find('.jexj').find('span').html());
            }
        });

        $('.pics').html($sum+'件');
        $('.howmuch').html($count.toFixed(2));
    }

    //5.全选操作
    $('#chkall').on('change', function () {
        $('.sel:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
    });

    var $inputs = $('.sel:visible').find(':checkbox');
    $('.buygoods').on('change', $inputs, function () {//事件的委托的this指向被委托的元素
        if ($('.sel:visible').find('input:checkbox').length == $('.sel:visible').find('input:checked').size()) {
            $('#chkall').prop('checked', true);
        } else {    
            $('#chkall').prop('checked', false);
        }
        priceall();
    });

    //6.数量的改变
    //改变商品数量++
    $('.add').on('click', function () {
        var $count = $(this).parents('.sel').find('.sl input').val();//值
        $count++;
        if ($count >= 99) {
            $count = 99;
        }
        $(this).parents('.sel').find('.sl input').val($count);//赋值回去
        $(this).parents('.sel').find('.jexj').find('span').html(singlegoodsprice($(this)));//改变后的价格
        priceall();//重新计算总和。
        setcookie($(this));//将改变的数量重新添加到cookie

    });

    //改变商品数量--
    $('.reduce').on('click', function () {
        var $count = $(this).parents('.sel').find('.sl input').val();
        $count--;
        if ($count <= 1) {
            $count = 1;
        }
        $(this).parents('.sel').find('.sl input').val($count);
        $(this).parents('.sel').find('.jexj').find('span').html(singlegoodsprice($(this)));//改变后的价格
        priceall();
        setcookie($(this));
    });

    //直接输入改变数量
    $('.sl input').on('input', function () {
        var $reg = /^\d+$/g; //只能输入数字
        var $value = parseInt($(this).val());
        if ($reg.test($value)) {
            if ($value >= 99) {//限定范围
                $(this).val(99);
            } else if ($value <= 0) {
                $(this).val(1);
            } else {
                $(this).val($value);
            }
        } else {
            $(this).val(1);
        }
        $(this).parents('.sel').find('.jexj').find('span').html(singlegoodsprice($(this)));//改变后的价格
        priceall();
        setcookie($(this));
    });

    //7.计算数量改变后单个商品的价格
    function singlegoodsprice(obj) { //obj:当前元素
        var $dj = parseFloat(obj.parents('.sel').find('.price').find('span').html());//单价
        var $cnum = parseInt(obj.parents('.sel').find('.sl input').val());//数量
        return ($dj * $cnum).toFixed(2);//结果
    }

    //8.将改变后的数量的值存放到cookie
    //点击按钮将商品的数量和id存放cookie中
    var arrsid = []; //商品的id
    var arrnum = []; //商品的数量
    //提前获取cookie里面id和num
    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');//cookie商品的sid  
            arrnum = getcookie('cookienum').split(',');//cookie商品的num
        }
    }
    function setcookie(obj) { //obj:当前操作的对象
        cookietoarray();//得到数组
        var $index = obj.parents('.sel').find('dl').find('img').attr('sid');//通过id找数量的位置
        arrnum[$.inArray($index, arrsid)] = obj.parents('.sel').find('.sl input').val();
        addcookie('cookienum', arrnum.toString(), 7);
    }

    //9.删除操作
    //删除cookie
    function delgoodslist(sid, arrsid) {//sid：当前删除的sid，arrsid:cookie的sid的值
        var $index = -1;
        $.each(arrsid, function (index, value) {//删除的sid对应的索引位置。 index:数组项的索引
            if (sid == value) {
                $index = index;//如果传入的值和数组的值相同，返回值对应的索引。
            }
        });
        arrsid.splice($index, 1);//删除数组对应的值
        arrnum.splice($index, 1);//删除数组对应的值
        addcookie('cookiesid', arrsid.toString(), 7);//添加cookie
        addcookie('cookienum', arrnum.toString(), 7);//添加cookie
    }

    //删除单个商品的函数(委托)
    $('.buygoods').on('click', '.shanchu a', function (ev) {
        location.reload();
        cookietoarray();//得到数组,上面的删除cookie需要。
        if(confirm('你确定删除吗？')) {
            $(this).first().parents('.sel').remove();//通过当前点击的元素找到整个一行列表，删除
            
        }
        delgoodslist($(this).first().parents('.sel').find('img').attr('sid'), arrsid);
        priceall();
        
        
    });


   

}(jQuery);