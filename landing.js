let header = "This is Jake Colledge."

$('.whoBtn').click(
    function(){
        $('.btnContainer').animate({
            top: '0px',
            width: '180px'
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
        $('.me').animate({
            height: '100%'
        },500)
        $('.containers').fadeIn('fast', function(){
            $(this).animate({
                height: '25vh'
            },500)
            $('.typing-area').css('display','flex')
                   
        })
        typeSentence()     
        
    })
    
})

let selector = 1;
async function typeSentence(sentence = $(`.containers p:nth-child(${selector})`).children().text(), eleRef = $('.sentence'), delay=80, callback){
    const letters = sentence.split("")

    let i = 0;
    while(i < letters.length){
        await waitForMs(delay);
        eleRef.append(letters[i]);
        i++      
    }
    eleRef.text('')
    switch(selector){
        case 1:
            $('.containers p:nth-child(1)').css('display', 'block')
            selector++
            typeSentence()
            break;
        case 2:
            $('.containers p:nth-child(2)').css('display', 'block')
            selector++
            typeSentence()
            break;
        case 3:
            $('.containers p:nth-child(3)').css('display', 'block')
            selector++
            typeSentence()
            break;
        case 4:
            $('.containers p:nth-child(4)').css('display', 'block')
            $('body').css('overflow-y','scroll')
            $('.typing-area').fadeOut('fast')
            break;
    }    
    return;
}

function waitForMs(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}