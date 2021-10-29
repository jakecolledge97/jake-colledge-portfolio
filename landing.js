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
                minHeight: '17vh'
            },500)
            $('.containers').css('display','flex')
            $('.typing-area').css('display','flex')
                   
        })
        typeSentence()     
        
    })
    
})

let selector = 1;
let element = "#welcome-text"
let hasRunAbout = false;

async function typeSentence(sentence = $(`${element} p:nth-child(${selector})`), eleRef = $(element).find('.sentence'), delay=20, callback){
    $('.info-container').css('overflow-y','hidden')
    const letters = sentence.children().text().split("")

    let i = 0;
    while(i < letters.length){
        await waitForMs(delay);
        eleRef.append(letters[i]);
        i++      
    }
    eleRef.text('')
    if(element === "#welcome-text"){
        switch(selector){
            case 1:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 2:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 3:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 4:
                sentence.css('display', 'block')
                $('.info-container').css('overflow-y','scroll')
                element = "#about-me"
                selector = 1
                break;
        }
    }else if(element === "#about-me"){
        hasRunAbout = true
        switch(selector){
            case 1:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 2:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 3:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 4:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 5:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 6:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 7:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 8:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 9:
                sentence.css('display', 'block')
                selector++
                typeSentence()
                break;
            case 10:
                hasRunAbout = true
                aboutMePics()
                break;
        }
    }    
    return;
}

function waitForMs(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}


var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true && !hasRunAbout)
        //document.querySelector('.info-container').style.overflow="hidden";
        typeSentence()

}, { threshold: [1] });

observer.observe(document.querySelector('#about-me'));

function aboutMePics(){
    $('.bootcamp').fadeIn('fast')
    $('.bootcamp').css('display','flex')
    $('#pic2').css('pointer-events','all')
    $('.info-container').css('overflow-y','scroll')
}

