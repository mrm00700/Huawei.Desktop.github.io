const img = document.querySelectorAll('main .img-box img')
const imgbox = document.querySelectorAll('main .img-box .img')
const input = document.querySelector('.search-box2 input')
const bottom = document.querySelector('.search-box2 .bottom')
const gototopbtn = document.querySelector('.sideicon .gototop')

console.log(img)

for (let i = 0; i < imgbox.length; i++) {
    imgbox[i].addEventListener('mouseenter', function () {
        img[i].style.transform = 'scale(1.08)'
    })
}
for (let i = 0; i < imgbox.length; i++) {
    imgbox[i].addEventListener('mouseleave', function () {
        img[i].style.transform = 'scale(1)'
    })
}

input.addEventListener('focusin', function(){
    bottom.classList.remove('hidden')
    setTimeout(function(){
        
        bottom.classList.remove('scale0')
     },100)
})
input.addEventListener('focusout', function(){
    bottom.classList.add('scale0')
    setTimeout(function(){
        bottom.classList.add('hidden')
        
     },400)
})

const showOnPx = 100;

function scrollContainer() {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    gototopbtn.classList.remove("hidden")
  } else {
    gototopbtn.classList.add("hidden")
  }
})
gototopbtn.addEventListener('click',function(){
    gototop();
})
function gototop(){
    document.body.scrollIntoView({
        behavior:'smooth',
    })
}