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

tl2.from(".sub-heading h3,.right-heading p",{
    x:-300,
    opacity:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:".sub-heading",
        scroller:"body",
        // markers:true,
       start:"top 100%",
       end:"top 0%",
        scrub:2
    }
})
tl2.from(".btn button,.btn i",{
y:-200,
opacity:0,
duration:1,
stagger:.3,
scrollTrigger:{
    trigger:".btn",
    scroller:"body",
    // markers:true,
   start:"top 100%",
   end:"top 0%",
    scrub:5
}
})


tl2.from(".card,.card-nav,.card-heading,.card i",{
    y:200,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 100%",
        scrub:5
    }
})
