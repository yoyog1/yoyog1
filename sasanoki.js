$(function(){   
    
    $('.c1').hover(
        function(){
            $('.c2').show();
        }

    );

    //ヘッダー
    


    $('header a').click(function(){
        var $scrollid=$(this).attr('href');
        var $position=$($scrollid).offset().top;

        $('html,body').animate({'scrollTop':$position},1000);
    });

    $('#nav1').hover(
        function(){
            $(this).html('これまでの作品');
        },

        function(){
            $(this).html('WORKS');
        }
    );

    $('#nav2').hover(
        function(){
            $(this).html('僕にできること');
        },
        
        function(){
            $(this).html('SKILL');
        }
    );

    $('#nav3').hover(

    function(){$(this).html('自己紹介');
    },
    
    function(){
        $(this).html('ABOUT');
    }
    );

    $('#nav4').hover(
        function(){
            $(this).html('ご連絡');
        },
        
        function(){
            $(this).html('CONTACT');
        }
    );

    $('#title-logo').hover(function(){
        $(this).html('佐々ノ木のマイウェイ…')
    });

    //ヘッダーメニュー
    $('.menu-icon').click(function(){
        if($(this).hasClass('open')) {
            //開いてる×
            $(this).removeClass('open').find('#bar').css('display','block');
            $('#time').css('display','none');

            $('.header-nav').slideUp();

        }else{
            //閉まってる三
            $(this).addClass('open').find('#time').css('display','block');
            $('#bar').css('display','none');

            $(function () {
            
                $('.header-nav').slideDown();
                $('.header-nav').css('display','flex');
                
            });
        };

    });
    media();
$(window).on("resize", function(){ media(); });


function media() {
    if($(window).width()>550){
        $('.header-nav').show();
    }
}

    //アバウト
    $('.about-img img').hover(
        function(){
            $(this).animate({'height':'220px','width':'220px'});
        },
        function(){
            $(this).animate({'height':'160px','width':'160px'});
        }

    );
    $('.question').click(function(){

        if( $(this).hasClass('open') ){

            $(this).children('span').text('+');
            $(this).removeClass('open');
            $('.answer').slideUp();
            
        }else{
            $(this).children('span').text('-');
            $(this).addClass('open');
            $('.answer').slideDown();
        };


    });

    //コンタクト
    $('.contact-btn').click(function(){
        $('.contact-modal-wrapper').fadeIn(500);
        $('body').css('background-color','#rgba(0,0,0,0.5)');
    });

    $('.close-btn').click(function(){
        $('.contact-modal-wrapper').fadeOut(500);
    });
    $('.close-btn').hover(
        function(){
            $(this).animate({'font-size':'32px'},500);
        },function(){
            $(this).animate({'font-size':'30px'},500);
        }


    );

    //フッター

    $('footer a').click(function(){
        $('html,body').animate({'scrollTop':0},500);
    });

}); 
