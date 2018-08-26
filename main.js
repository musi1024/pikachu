!function() { 
    var css1 = `
    /* 
    * Hello 
    * 今天来画个皮卡丘
    * 代码的过程也给你看看吧
    * 首先准备一些样式
    */
    * {
        transition: all 1s;    
    }
    /* 
    * 先给背景换个色吧
    */
    html {
        color: rgb( 222,222,222 ); 
        background: rgb( 0,43,54 );
    }
    #code {
        width: 100%;
        border: 1px solid #aaa;
        padding: 16px;
        font-size: 16px;
        border-radius: 15px;
    }
    /*
    * 代码高亮一下吧 
    */
    .token.selector {
        color: #690;
    }
    .token.property {
        color: #905;
    }
    .token.punctuation { 
        color: yellow; 
    }
    .token.function {
        color: #DD4A68;
    }
    /*
    * 有点单调，加点呼吸效果吧
    */
    #code {
        animation: breath 1s infinite alternate-reverse;
    }
    #code-wrapper {
        position: fixed;
        width: 50%;
        height: 100%;
        left: 0;
    }
    /*
    * 好了，开始画了，先来张白纸
    */
    #paper {
        display: block;
    }
    #paper > .content {
        background: white;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        padding: 20% 20% 20% 30%;
    }
    /*
    * 先来画个头
    */    
    .head {
        position: relative;
        margin: 0 auto;
        background-color: #FFFF00;
        border: solid 4px #000000;
    }    
    .head-top {
        position: absolute;
        top: 2px;
        left: 9px;
        height: 195px;
        width: 218px;
        border-radius: 110px;
        border-bottom: solid 4px #FFFF00;
        z-index: 1; 
    }    
    .head-down {
        position: absolute;
        top: 65px;
        left: 2px;
        border-radius: 50%;
        height: 154px;
        width: 234px;
    }    
    .head-middle {
        position: absolute;
        top: 76px;
        left: 7px;
        height: 123px;
        width: 224px;
        border-radius: 50%;
        border: medium none;
        z-index: 2;
    }
    /*
    * 再来两只眼睛
    */            
    .eye {
        position: absolute;
        height: 42px;
        width: 42px;
        border-radius: 50%;
        background: #000000;
        top: 84px;
        overflow: hidden;
    }    
    .eye-left {
        left: 36px;
    }    
    .eye-right {
        right: 36px;
    }
    /*
    * 加上眼白
    */    
    .iris {
        position: absolute;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #FFF;
        top: 7px;
        overflow: hidden;
    }    
    .iris-left {
        right: 6px;
    }   
    .iris-right {
        left: 6px;
    }   
    .iris.iris-small {
        width: 6px;
        height: 11px;
    }    
    .eye-left .iris-small {
        left: 7px;
        top: 32px;
        transform: rotate(27deg);
    }    
    .eye-right .iris-small {
        right: 7px;
        top: 32px;
        transform: rotate(-25deg);
    }
    /*
    * 来个鼻子
    */       
    .nose {
        position: relative;
        height: 16px;
        width: 17px;
        top: -8px;
        left: 0px;
        border-radius: 30%;
        background: #0c0c0c;
        transform: rotate(45deg);
    }
    /*
    * 两个大大的红脸颊
    */    
    .cheek {
        background-color: #EC0000;
        border: 2px solid #000000;
        border-radius: 50% 50% 50% 50%;
        height: 50px;
        width: 50px;
        position: absolute;
        top: 126px; 
    }    
    .cheek-left {
        left: 5px;
    }   
    .cheek-right {
        right: 5px;
    }
    /*
    * 波浪的嘴巴
    */       
    .mouth {
        position: absolute;
        border: solid 2px #000000;
        border-radius: 20px;
    }    
    .mouth-left {
        height: 40px;
        left: 21px;
        top: -31px;
        width: 30px;
    }   
    .mouth-right {
        height: 40px;
        right: 21px;
        top: -31px;
        width: 30px;
    }    
    .mouth-center {
        height: 40px;
        right: 35px;
        top: 0px;
        width: 30px;
        background-color: #FFFF00;
        z-index: 2;
    }
    /*
    * 好了，头部画好了
    * 不对，差两个耳朵
    */    
    .ear {
        position: absolute;
        background: none repeat scroll 0 0   #FFFF00;
        border: 5px solid #000000;
        overflow: hidden;
    }
    .ear-left {
        left: -35px;
        top: -65px;
        width: 100px;
        height: 110px;
        border-radius: 5px 125% 0px 125%; 
        transform: rotate(-26deg) skewX(25deg) skewY(0deg);
        transform-origin: 100% 100%;
    }    
    .ear-left:before {
        background-color: #000000;
        content: "";
        height: 60px;
        left: -32px;
        position: absolute;
        top: -5px;
        width: 60px;
        transform: rotate(18deg);
    }    
    .ear-right {
        width: 140px;
        height: 80px;
        right: -77px;
        top: 70px;
        border-radius: 10px 125% 10px 125%;
        box-shadow: 11px -9px 0 2px rgba(0, 0, 0, 0.2) inset;
        transform: rotate(-90deg) skewX(27deg) skewY(0deg);
        transform-origin: 0 0;
        animation: ear_right 3s infinite linear 0s;
    
    }    
    .ear-right:before {
        background-color: #000000;
        content: "";
        height: 60px;
        position: absolute;
        right: -8px;
        top: 54px;
        width: 65px;
        transform: rotate(-15deg);
    }
    /*
    * 皮卡丘胖胖的身体
    */    
    .hold-body {
        background-color: #FFFF00;
        border: 4px solid #000000;
        border-radius: 55% 55% 23% 23%;
        height: 260px;
        left: 6px;
        position: relative;
        top: -70px;
        width: 225px;
        z-index: 2;
    } 
    /*
    * 两只小手
    */   
    .hand {
        border: 2px solid #000000;   
        height: 65px;    
        position: absolute;    
        width: 45px;
    }    
    .hand-left {
        top: 100px;
        left: 25px;
        border-radius: 20px 20px 28px 35px;
        transform: rotate(-26deg);
    }    
    .hand-left:before {
        background-color: #FFFF00;
        content: "";
        height: 15px;
        left: -3px;
        position: absolute;
        top: -3px;
        width: 50px;
        z-index: 2; 
    }   
    .hand-right {
        top: 100px;
        right: 25px;
        border-radius: 20px 20px 28px 35px;
        transform: rotate(26deg);
    }    
    .hand-right:before {
        background-color: #FFFF00;
        content: "";
        height: 15px;
        left: -3px;
        position: absolute;
        top: -3px;
        width: 50px;
        z-index: 2; 
    }
    /*
    * 两只短腿
    */   
    .foot {
        position: absolute;
        border: 3px solid #000000;
        background: #FFFF00;
        height: 27px;
        width: 75px;
        z-index: 0;
    }    
    .foot-left {
        border-radius: 65px 20px 10px 15px;
        bottom: 17px;    
        left: 0px;    
    }   
    .foot-right {
        border-radius: 20px 65px 15px 10px;
        bottom: 17px;
        right: 0px;
    }
    /*
    * 最后，剩下尾巴了
    */      
    .tail {
        position: absolute;
        border: 3px solid #000000;
        background-color: #FFFF00;
    }   
    .brown {
        background: #976500;
    }    
    .tail1 {   
        z-index: 3; 
        border-top: none;
        bottom: 83px;
        height: 25px;
        right: -4px;
        width: 45px;
        transform: skewX(-30deg);
    }    
    .tail2 {
        z-index: 2;
        bottom: 107px;
        height: 23px;    
        right: 22px;
        width: 21px;
        border-left: none;
        transform: skewX(-30deg);
    }
    .tail3 {
        bottom: 107px;
        height: 69px;
        right: 26px;
        width: 29px;
        z-index: 1;
        transform: skewX(-30deg);
        background: #ffff00;
        background: linear-gradient(to bottom,  #ffff00 0%,#ffff00 49%,#000000 50%,#926512 51%,#926512 100%);
    }
    .tail4 {   
        border-radius: 0 0 0 6px;
        bottom: 147px;
        height: 29px;
        right: 39px;
        width: 63px;
        z-index: 1;
        border-right: none;
        transform: skewX(-30deg);
    }    
    .tail5 {   
        border-bottom: medium none;
        border-top: none;
        bottom: 173px;
        height: 51px;
        right: 28px;
        width: 52px;
        z-index: 1;
        transform: skewX(-30deg);
    }  
    .tail6 {   
        border-radius: 10px 0 0 10px;
        border-right: none;
        bottom: 220px;
        height: 60px;
        right: 8px;
        width: 135px;
        z-index: 0;
        transform: skewX(41deg);
    }
    /*
    * 好啦，去吧，皮卡丘
    */
    `

    function writeCss(code, fn) {
        var domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let nn = 1
        var id = setTimeout(function run() {
            if (n > nn * 1000) {
                nn +=1
            }
            n += nn            
            domCode.innerHTML = Prism.highlight(code.slice(0, n), Prism.languages.css);
            styleTag.innerHTML = code.slice(0, n)
            domCode.scrollTop = domCode.scrollHeight
            if(n < code.length){
                id = setTimeout(run, duration)
            }else {
                fn && fn.call()
            }
        },duration)
    } 

    var duration = 50
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
        case 'slow':
            duration = 80
            break
        case 'normal':
            duration = 40
            break
        case 'fast':
            duration = 0
            break
        }
    })
    

    writeCss(css1, ()=> {
        console.log('done')
    })
}()
