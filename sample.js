$(function() {

    $(".fa-bars").click(function() {
        //　メニューバーを押したら処理開始//
        $(".main__changemenu").fadeIn(1000);

        $(".main__changemenu ul li").hide();
        // 繰り返し処理
        $(".main__changemenu ul li").each(function(i) {

            // 遅延させてフェードイン
            $(this).delay(500 * i).fadeIn(1000);

        });

    });
    $(".main__changemenu").click(function() {
        $(".main__changemenu").fadeOut(1000);


    });



});