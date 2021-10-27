
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
        $('.whoBtn').fadeOut('slow',function(){
            $(this).css('display','none')
            $('.hamburger').fadeIn('slow')
        })
        $('.btnContainer').css('height','56px')
        
    })
    
})