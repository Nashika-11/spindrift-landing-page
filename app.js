var tl = gsap.timeline({scrollTrigger:{
    trigger:".about",
    start:"0% 90%",
    end:"50% 50%",
    scrub:true,
    // markers:true
}})

tl.to("#logo",{
    translateX:'-100%'
},"watermelon")

tl.to("#watermelon-soda",{
    top:"155%",
    right:"27%",
    rotate:"18deg"
},'watermelon')

tl.to("#lemon",{
    rotate:"-360deg",
    top:"125%",
    right:"53%",
    scale:"0.7"
},'watermelon')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".products",
    start:"0% 90%",
    end:"55% 50%",
    scrub:true,
    // markers:true
}})

tl2.from("#lime",{
    rotate:"-90deg",
    top:"100%",
    left:"-60%",
},"products")

tl2.from("#lemonade",{
    rotate:"90deg",
    top:"100%",
    left:"60%"
},"products")

tl2.from("#grapefruit",{
    rotate:"90deg",
    top:"100%",
    left:"60%"
},"products")

tl2.from("#grapefruit-soda",{
    rotate:"-90deg",
    left:"-70%",
    top:"100%"
},"products")

tl2.to("#lemon",{
    rotate:"115deg",
    top:"200%",
    right:"39%",
    scale:"1.3"
},"products")

tl2.to("#watermelon-soda",{
    rotate:"0deg",
    top:"230%",
    right:"53%",
    width:"33%"
},"products")

