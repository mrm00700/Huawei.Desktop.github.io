const nav_btn = document.querySelectorAll('nav li');
const nav_icon = document.querySelectorAll('nav li .icon i');
const dropdowns = document.querySelectorAll('.dropdown')
const nav_search = document.querySelector('.bottom-nav .search');
const nav_shop = document.querySelector('.bottom-nav .shop');
const nav = document.querySelector('nav')
const searchBox = document.querySelector ('.bottom-nav .search-box')
const searchxmark = document.querySelector('.bottom-nav .search-box .xmark')
const shopingBox = document.querySelector('.bottom-nav .shoping-box')
const shopingBoxxmark = document.querySelector('.bottom-nav .shoping-box .xmark')
const footercontent =  document.querySelectorAll('.footercontent')
const arrowlogo = document.querySelectorAll('.footercontent .arrow-box i')
const dropdownxmark = document.querySelectorAll('.dropdown .xmark')
const naviconarrow = document.querySelectorAll('.bottom-nav .icon i')


console.log(arrowlogo)
for(let i = 0 ; i < footercontent.length ; i++){
    footercontent[i].addEventListener('mouseenter',function(){
        arrowlogo[i].classList.remove('hidden')
    })}
for(let i = 0 ; i < footercontent.length ; i++){
    footercontent[i].addEventListener('mouseleave',function(){
        arrowlogo[i].classList.add('hidden')
    })
}
for(let i = 0 ; i < dropdownxmark.length ; i++){
    dropdownxmark[i].addEventListener('click',function(){
        hidedropdown(activeindex);
        changearrownavoff();
    })
}

for(let i = 0 ; i < nav_btn.length ; i++){
    nav_btn[i].addEventListener('mouseenter',function(){
        nav_icon[i].classList.remove('hidden')
    })
    nav_btn[i].addEventListener('mouseleave',function(){
        nav_icon[i].classList.add('hidden')

    })
}


nav_search.addEventListener('click',function(){
    hidedropdown(activeindex);
                changearrownavoff()
    scaledownNav();

    setTimeout(() => {
    
        hideNav();
        showSearchbox();

    }, 500);

})
searchxmark.addEventListener('click',function(){
    hideSerachbox();
    showNav();
    setTimeout(function(){
        scaleupNav();
    },400)
})
nav_shop.addEventListener('click',function(){
    hidedropdown(activeindex);
    changearrownavoff()
    scaledownNav();
    setTimeout(() => {
    
        hideNav();
        showshopingbox();
    }, 400);

})
shopingBoxxmark.addEventListener('click',function(){
    hideshopingbox();
    showNav();
    setTimeout(() => {
    scaleupNav();
    }, 400);
})
activeindex = 0;
dropdownactive = false;
for(let i = 0 ; i < nav_btn.length ; i++){
    nav_btn[i].addEventListener('click',function(){
        if(dropdownactive == false){
            activeindex = i;
            showdropdown();
            changearrownav(i);
        }
        else{
            if(i == activeindex){
                hidedropdown(activeindex);
                changearrownav(i)
                changearrownavoff()
            }
            else{
                changedropdown(i);
                changearrownav(i);
                changearrownavoff()
            }
        }
    })
}






function hideNav(){
    nav_search.classList.add('hidden')
    nav.classList.add('hidden')
    nav_shop.classList.add('hidden')
}
function showNav(){
    nav_search.classList.remove('hidden')
    nav.classList.remove('hidden')
    nav_shop.classList.remove('hidden')
}
function scaledownNav(){
    nav.classList.add('scale0');
    nav_shop.classList.add('scale0')
    nav_search.classList.add('scale0')
}
function scaleupNav(){
    nav.classList.remove('scale0');
    nav_shop.classList.remove('scale0');
    nav_search.classList.remove('scale0');

}
function showSearchbox(){
    searchBox.classList.remove('hidden')
    setTimeout( function(){
        searchBox.classList.remove('scale0')
    },100)
}
function hideSerachbox(){
    searchBox.classList.add('scale0')
    setTimeout(function(){
        searchBox.classList.add('hidden')
    },400)
}
function showshopingbox (){
    shopingBox.classList.remove('hidden')
    setTimeout( function(){
        shopingBox.classList.remove('scale0')
    },100)
}
function hideshopingbox(){
    shopingBox.classList.add('scale0')
    setTimeout(function(){
        shopingBox.classList.add('hidden')
    },400)
}
function showdropdown(){
    dropdowns[activeindex].classList.remove('hidden')
    setTimeout(function(){
       dropdowns[activeindex].classList.remove('zeroheight')
       dropdownactive = true ; 
    },400)
}
function changedropdown(active){
    setTimeout(function(){
        dropdowns[activeindex].classList.add('zeroheight')
    },500)
    setTimeout(function(){
        dropdowns[active].classList.remove('hidden')
        dropdowns[activeindex].classList.add('hidden')
    },1000)
    setTimeout(function(){
        dropdowns[active].classList.remove('zeroheight')
        activeindex = active;
    },1150)
    

}
function hidedropdown(active){
    dropdowns[active].classList.add('zeroheight');
    setTimeout(function(){
        dropdowns[active].classList.add('hidden')
        dropdownactive=false;
    },400)
}
function changearrownav(active){
    naviconarrow[active].classList.remove('fa-angle-down')
    naviconarrow[active].classList.add('fa-angle-up')
}
function changearrownavoff(){
    naviconarrow[activeindex].classList.add('fa-angle-down')
    naviconarrow[activeindex].classList.remove('fa-angle-up')
}