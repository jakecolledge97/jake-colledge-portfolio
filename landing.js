let header = "This is Jake Colledge."

$('.whoBtn').click(
    function(){
        $('.btnContainer').animate({
            top: '0px'
    },1000)
    $('.btnContainer').css({'top': '0','width': '191px'})
    $('.btnContainer').animate({
        width: '100%',
        borderRadius: '0px',
        margin: '0px'
    },1000, function(){
        $('.whoBtn').fadeOut('fast',function(){
            //$(this).css('display','none')
            $('.hamburger').fadeIn('fast')
        })
        $('.btnContainer').css({'height':'56px','position': 'fixed'})
        $('body').css('overflow-y','scroll')
        $('.me').animate({
            height: '100%'
        },500)
        $('.containers').fadeIn('fast', function(){
            $(this).animate({
                height: '25vh',
                padding: '5px'
            },500)
            $('.info-container').animate({
                marginTop: '56px'
            },500)
        })

    })
    
})
