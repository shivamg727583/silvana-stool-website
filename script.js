var tl =gsap.timeline();

tl.from(".nav1 h4,.nav2 h1,.nav3 i",{
    x:-200,
    opacity:0,
    duration:.6,
    stagger:.3,

})
tl.from(".heading h1",{
    y:-200,
    opacity:0,
    
})
tl.from(".heading img",{
    scale:0,
rotate:720,
duration:1.5,
    duration:1,
})
tl.from(".llink h4,.rlink span",{
    y:-200,
    opacity:0,
    stagger:.3,

})



var tl2= gsap.timeline();

tl.from(".sub-heading h3 , .right-heading p ,.btn",{
    x:-300,
    opacity:0,
    stagger:.4,
})

tl.from(".card,.card-nav,.card-heading,.card i",{
    y:200,
    opacity:0,
    stagger:.3,
})
