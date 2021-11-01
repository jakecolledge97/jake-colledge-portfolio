let header = "This is Jake Colledge."
let navigation = 0;
let selector = 1;
let element = "#welcome-text"
let hasRunAbout = false;
let hasRunPages = false;

function onLoad(){
    
    if(!(window.location.hash === '')){
        clearTimeout(waitForMs())
        hasRunAbout = true
        hasRunPages = true
        $('.whoBtn').css('display','none')
        $('.btnContainer').css({'display':'block','top': '0','width': '100%','height':'56px','position':'fixed', 'border-radius': '0'})
        $('.hamburger').css('display', 'block')
        $('.me').css('height', '100%')
        $('.containers').css('display','flex')
        $('.typing-area').css('display','flex')
        loadAll()
    }   
}
onLoad()

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

$('.hamburger').click(function(){
    navigation++
    if(navigation === 1){
        $('.navigation').css('display','block')
    }else if(navigation === 2){
        $('.navigation').css('display','none')
        navigation = 0
    }
})
$('#welcome-nav').click(function(){
    loadAll()
})
$('#about-me-nav').click(function(){
    loadAll()
})
$('#my-work-nav').click(function(){
    loadAll()
})
$('#contact-me-nav').click(function(){
    loadAll()
})
function loadAll(){
    hasRunAbout = true
    hasRunPages = true
    navigation = 0
    $('#welcome-text p').css('display','block')
    $('#about-me p').css('display','block')
    $('#pages p').css('display','block')
    $('.bootcamp').css('display','flex')
    $('#pic2').css('pointer-events','all')
    $('.my-work').css('pointer-events','all')
    $('.navigation').css('display','none')
    $('.info-container').css('overflow-y','scroll')
}

async function typeSentence(sentence = $(`${element} p:nth-child(${selector})`), eleRef = $(element).find('.sentence'), delay=100, callback){
    if(!(window.location.hash === '')){
        return
    }
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
                element = "#pages"
                selector = 1
                aboutMePics()
                break;
        }
    }else if(element = "#pages"){
        switch(selector){
            case 1:
                sentence.css('display', 'block')
                hasRunPages = true;
                $('.info-container').css('overflow-y','scroll')
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

var observer2 = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true && !hasRunPages)
        //document.querySelector('.info-container').style.overflow="hidden";
        typeSentence()

}, { threshold: [1] });

observer2.observe(document.querySelector('#pages'));

function aboutMePics(){
    $('.bootcamp').fadeIn('fast')
    $('.bootcamp').css('display','flex')
    $('#pic2').css('pointer-events','all')
    $('.info-container').css('overflow-y','scroll')
    $('.my-work').css('pointer-events','all')
}

$('.my-work:first-child').click(function(){
    window.open("https://jakecolledge97.github.io/work-day-scheduler/", "_blank")
})
$('.my-work:nth-child(2)').click(function(){
    window.open("https://rhjeffries.github.io/ideal-telegram/", "_blank")
})
$('.my-work:last-child').click(function(){
    window.open("https://jakecolledge97.github.io/weather-app/", "_blank")
})

