var tl=gsap.timeline()
tl.from("#nav img,#nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})
tl.from("#page1 h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
tl.from("#page1 span",{
    rotate:360
})
tl.from("#page1>img",{
    scale:0,
    opacity:0,
    stagger:0.3,
    

})
